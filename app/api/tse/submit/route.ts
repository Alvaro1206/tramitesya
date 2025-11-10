export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { encryptText } from "@/lib/crypto";
import { getPayPalAccessToken, verifyPayPalCapture } from "@/lib/paypal";

const ORDER_PRICE = "9.90";

async function verifyCapture(captureID?: string | null) {
  if (!captureID) {
    return true;
  }

  const { access_token } = await getPayPalAccessToken();
  const capture = await verifyPayPalCapture(captureID, access_token);
  return capture?.status === "COMPLETED";
}

export async function POST(req: NextRequest) {
  try {
    const { form, paypal } = await req.json();

    if (!form || !paypal) {
      return NextResponse.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
    }

    const captureVerified = await verifyCapture(paypal?.captureID);
    if (!captureVerified) {
      return NextResponse.json({ ok: false, error: "Pago no verificado" }, { status: 400 });
    }

    const order = await prisma.order.create({
      data: {
        amountEur: ORDER_PRICE,
        paypalOrderId: paypal?.orderID ?? "",
        paypalCapture: paypal?.captureID ?? null,
        status: "PAID",
        customer: {
          create: {
            name: form.titular.nombre,
            surname1: form.titular.apellido1,
            surname2: form.titular.apellido2 ?? null,
            birthDate: new Date(form.titular.fecha_nacimiento),
            docType: form.titular.doc_tipo,
            docEnc: encryptText(form.titular.doc_num),
            nafEnc: form.titular.naf ? encryptText(form.titular.naf) : null,
            phone: form.contacto.telefono,
            email: form.contacto.email,
          },
        },
        address: {
          create: {
            via: form.domicilio.via,
            line1: form.domicilio.direccion,
            line2: form.domicilio.piso ?? null,
            postal: form.domicilio.cp,
            city: form.domicilio.municipio,
            province: form.domicilio.provincia,
            coincide: Boolean(form.dom_coincide),
            otherAddr: Boolean(form.otra_direccion),
          },
        },
      },
    });

    return NextResponse.json({ ok: true, orderId: order.id });
  } catch (error) {
    console.error("Error al registrar pedido TSE", error);
    return NextResponse.json({ ok: false, error: "Error interno" }, { status: 500 });
  }
}
