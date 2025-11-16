export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import type { FormPayload, AddressPayload } from "../../../tse/schema";

const PRICE = 9.9;
const CURRENCY = "EUR";

type PaypalPayload = {
  status: string;
  orderId?: string | null;
  captureId?: string | null;
  raw?: any;
};

type SubmitBody = {
  form: FormPayload;
  paypal: PaypalPayload;
};

function addressField(address: AddressPayload | null, key: keyof AddressPayload) {
  if (!address) return null;
  return address[key] ?? null;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as SubmitBody | null;

    if (!body?.form || !body.paypal) {
      return NextResponse.json(
        { ok: false, error: "missing_form_or_paypal" },
        { status: 400 },
      );
    }

    const form = body.form;
    const paypal = body.paypal;

    if (paypal.status !== "COMPLETED") {
      console.error("[TSE] PayPal status invalid", paypal.status);
      return NextResponse.json(
        { ok: false, error: "invalid_paypal_status" },
        { status: 400 },
      );
    }

    const captureDetails = paypal.raw?.purchase_units?.[0]?.payments?.captures?.[0] ?? null;

    let amountValue: number | null = null;
    let currencyCode: string | null = null;

    if (captureDetails?.amount?.value) {
      const parsed = Number(captureDetails.amount.value);
      if (!Number.isNaN(parsed)) {
        amountValue = parsed;
      }
    }

    if (captureDetails?.amount?.currency_code) {
      currencyCode = captureDetails.amount.currency_code;
    }

    if (amountValue !== null && amountValue !== PRICE) {
      console.error("[TSE] Unexpected PayPal amount", amountValue);
      return NextResponse.json(
        { ok: false, error: "invalid_amount" },
        { status: 400 },
      );
    }

    if (currencyCode !== null && currencyCode !== CURRENCY) {
      console.error("[TSE] Unexpected PayPal currency", currencyCode);
      return NextResponse.json(
        { ok: false, error: "invalid_currency" },
        { status: 400 },
      );
    }

    const orderId =
      paypal.orderId ??
      (typeof paypal.raw?.id === "string" ? paypal.raw.id : null);

    if (!orderId) {
      console.error("[TSE] Missing PayPal orderId");
      return NextResponse.json(
        { ok: false, error: "missing_order_id" },
        { status: 400 },
      );
    }

    const domicilio = form.domicilio;
    const alt = form.otra_direccion_detalle ?? null;

    const { data, error } = await supabaseServer
      .from("tse_requests")
      .insert({
        status: "paid",
        titular_nombre: form.titular.nombre,
        titular_primer_apellido: form.titular.apellido1,
        titular_segundo_apellido: form.titular.apellido2 ?? null,
        titular_fecha_nacimiento: form.titular.fecha_nacimiento,
        titular_tipo_documento: form.titular.doc_tipo,
        titular_numero_documento: form.titular.doc_num,
        titular_naf: form.titular.naf ?? null,
        dom_tipo_via: domicilio.via,
        dom_via: domicilio.direccion,
        dom_numero: domicilio.numero ?? null,
        dom_piso_puerta: domicilio.piso ?? null,
        dom_codigo_postal: domicilio.cp,
        dom_municipio: domicilio.municipio,
        dom_provincia: domicilio.provincia,
        dom_coincide_seg_social: form.dom_coincide,
        dom_usa_direccion_alternativa: form.otra_direccion,
        alt_tipo_via: addressField(alt, "via"),
        alt_via: addressField(alt, "direccion"),
        alt_numero: addressField(alt, "numero"),
        alt_piso_puerta: addressField(alt, "piso"),
        alt_codigo_postal: addressField(alt, "cp"),
        alt_municipio: addressField(alt, "municipio"),
        alt_provincia: addressField(alt, "provincia"),
        contacto_telefono: form.contacto.telefono,
        contacto_email: form.contacto.email,
        contacto_autoriza_tramites_ya: form.mandato,
        contacto_firma_nombre_completo: form.firma,
        contacto_acepta_politica: form.privacidad,
        form,
        paypal_capture: paypal.raw ?? paypal,
        paypal_order_id: orderId,
        paypal_capture_id: paypal.captureId ?? captureDetails?.id ?? null,
        amount: amountValue ?? PRICE,
        currency: currencyCode ?? CURRENCY,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[Supabase] insert error", error);
      return NextResponse.json(
        { ok: false, error: "db_insert_failed" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { ok: true, id: data.id, orderId },
      { status: 200 },
    );
  } catch (error) {
    console.error("[TSE] submit internal error", error);
    return NextResponse.json(
      { ok: false, error: "internal_error" },
      { status: 500 },
    );
  }
}
