"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    paypal?: any;
  }
}

type FormPayload = {
  titular: {
    nombre: string;
    apellido1: string;
    apellido2: string | null;
    fecha_nacimiento: string;
    doc_tipo: string;
    doc_num: string;
    naf: string | null;
  };
  domicilio: {
    via: string;
    direccion: string;
    piso: string | null;
    cp: string;
    municipio: string;
    provincia: string;
  };
  contacto: {
    telefono: string;
    email: string;
  };
  dom_coincide: boolean;
  otra_direccion: boolean;
  mandato: boolean;
  firma: string;
  privacidad: boolean;
  version: string;
  submitted_at: string;
};

const PRICE = 9.9;
const LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";
const PROVINCES = [
  "",
  "A Coruña",
  "Álava",
  "Albacete",
  "Alicante",
  "Almería",
  "Asturias",
  "Ávila",
  "Badajoz",
  "Baleares",
  "Barcelona",
  "Burgos",
  "Cáceres",
  "Cádiz",
  "Cantabria",
  "Castellón",
  "Ceuta",
  "Ciudad Real",
  "Córdoba",
  "Cuenca",
  "Girona",
  "Granada",
  "Guadalajara",
  "Guipúzcoa",
  "Huelva",
  "Huesca",
  "Jaén",
  "La Rioja",
  "Las Palmas",
  "León",
  "Lleida",
  "Lugo",
  "Madrid",
  "Málaga",
  "Melilla",
  "Murcia",
  "Navarra",
  "Ourense",
  "Palencia",
  "Pontevedra",
  "Salamanca",
  "Santa Cruz de Tenerife",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Vizcaya",
  "Zamora",
  "Zaragoza",
];

const isDNI = (value: string) => {
  const match = value.toUpperCase().match(/^(\d{8})([A-HJ-NP-TV-Z])$/);
  if (!match) return false;
  const expected = LETTERS[parseInt(match[1], 10) % 23];
  return expected === match[2];
};

const isNIE = (value: string) => {
  const match = value.toUpperCase().match(/^([XYZ])(\d{7})([A-HJ-NP-TV-Z])$/);
  if (!match) return false;
  const map: Record<string, string> = { X: "0", Y: "1", Z: "2" };
  const expected = LETTERS[parseInt(map[match[1]] + match[2], 10) % 23];
  return expected === match[3];
};

const isPassport = (value: string) => /^[A-Z0-9]{5,15}$/i.test(value);
const isNAF = (value: string) => /^\d{12}$/.test(value);
const isCP = (value: string) => /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(value);
const isPhoneES = (value: string) => /^(\+34|0034)?\s?[6-9]\d{8}$/.test(value);
const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function collectForm(): FormPayload {
  const form = document.getElementById("tseForm") as HTMLFormElement | null;
  if (!form) {
    throw new Error("Formulario no disponible");
  }

  const requiredValue = (name: string) =>
    ((form.elements.namedItem(name) as HTMLInputElement | null)?.value ?? "").trim();
  const optionalValue = (name: string) => {
    const value = requiredValue(name);
    return value.length ? value : null;
  };
  const checkbox = (id: string) => Boolean((document.getElementById(id) as HTMLInputElement | null)?.checked);

  return {
    titular: {
      nombre: requiredValue("nombre"),
      apellido1: requiredValue("apellido1"),
      apellido2: optionalValue("apellido2"),
      fecha_nacimiento: requiredValue("fecha_nacimiento"),
      doc_tipo: requiredValue("doc_tipo"),
      doc_num: requiredValue("doc_num").toUpperCase(),
      naf: optionalValue("naf"),
    },
    domicilio: {
      via: requiredValue("via"),
      direccion: requiredValue("direccion"),
      piso: optionalValue("piso"),
      cp: requiredValue("cp"),
      municipio: requiredValue("municipio"),
      provincia: requiredValue("provincia"),
    },
    contacto: {
      telefono: requiredValue("telefono"),
      email: requiredValue("email"),
    },
    dom_coincide: checkbox("domCoincide"),
    otra_direccion: checkbox("otraDir"),
    mandato: checkbox("mandato"),
    firma: requiredValue("firma"),
    privacidad: checkbox("privacidad"),
    version: "tse-paypal-1.0",
    submitted_at: new Date().toISOString(),
  };
}

function validatePayload(payload: FormPayload): string | null {
  const { titular, domicilio, contacto } = payload;
  if (!titular.nombre || !titular.apellido1) return "Completa nombre y primer apellido.";
  if (!titular.fecha_nacimiento) return "Indica la fecha de nacimiento.";
  if (!titular.doc_tipo || !titular.doc_num) return "Indica tipo y número de documento.";
  if (titular.doc_tipo === "DNI" && !isDNI(titular.doc_num)) return "DNI no válido.";
  if (titular.doc_tipo === "NIE" && !isNIE(titular.doc_num)) return "NIE no válido.";
  if (titular.doc_tipo === "Pasaporte" && !isPassport(titular.doc_num)) return "Pasaporte no válido.";
  if (titular.naf && !isNAF(titular.naf)) return "El NAF debe tener 12 dígitos.";
  if (!domicilio.via || !domicilio.direccion || !domicilio.municipio || !domicilio.provincia)
    return "Completa los datos de domicilio.";
  if (!isCP(domicilio.cp)) return "Código postal no válido.";
  if (!payload.dom_coincide) return "Debes declarar que el domicilio coincide.";
  if (!isPhoneES(contacto.telefono)) return "Teléfono español no válido.";
  if (!isEmail(contacto.email)) return "Email no válido.";
  if (!payload.mandato) return "Debes autorizar la gestión.";
  if (!payload.privacidad) return "Acepta la privacidad y términos.";
  if (!payload.firma || payload.firma.length < 3) return "Firma con tu nombre completo.";
  return null;
}

export default function TSEPage() {
  const [error, setError] = useState<string | null>(null);
  const [paypalReady, setPaypalReady] = useState(false);
  const payRef = useRef<HTMLDivElement>(null);
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "";

  useEffect(() => {
    if (!paypalReady || !payRef.current || !window.paypal) return;

    payRef.current.innerHTML = "";

    const buttons = window.paypal.Buttons({
      style: { layout: "vertical", shape: "rect", color: "gold" },
      onClick: () => {
        try {
          const payload = collectForm();
          const validationError = validatePayload(payload);
          if (validationError) {
            setError(validationError);
            return false;
          }
          setError(null);
          return true;
        } catch (err) {
          setError("No se pudo leer el formulario. Recarga la página.");
          return false;
        }
      },
      createOrder: (_: unknown, actions: any) =>
        actions.order.create({
          purchase_units: [
            {
              description: "Gestión solicitud TSE (0 € oficial)",
              amount: { value: PRICE.toFixed(2), currency_code: "EUR" },
            },
          ],
        }),
      onApprove: async (_: unknown, actions: any) => {
        try {
          const orderDetails = await actions.order.capture();
          const payload = collectForm();
          const response = await fetch("/api/tse/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              form: payload,
              paypal: {
                orderID: orderDetails.id,
                captureID:
                  orderDetails.purchase_units?.[0]?.payments?.captures?.[0]?.id ??
                  orderDetails.id ??
                  null,
                payer: orderDetails.payer,
              },
            }),
          });

          if (!response.ok) {
            setError("Pago completado, pero no se registró el pedido. Contacta con soporte.");
            return;
          }

          const body = await response.json();
          window.location.href = `/gracias?order=${encodeURIComponent(body.orderId)}`;
        } catch (err) {
          console.error(err);
          setError("No se pudo completar el proceso. Inténtalo de nuevo.");
        }
      },
      onError: () => {
        setError("No se pudo completar el pago con PayPal. Inténtalo de nuevo.");
      },
    });

    buttons.render(payRef.current);

    return () => {
      if (buttons?.close) buttons.close();
    };
  }, [paypalReady]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR&components=buttons`}
        strategy="afterInteractive"
        onLoad={() => setPaypalReady(true)}
      />
      <p className="text-sm text-indigo-500">Servicio sin beneficiarios</p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">
        Tarjeta Sanitaria Europea <span className="text-indigo-600">sin certificado</span>
      </h1>
      <p className="mt-2 text-slate-600">
        Presentamos tu solicitud ante la Seguridad Social y te enviamos la referencia oficial por correo electrónico.
        El coste es de <strong>9,90 €</strong> por gestión (0 € oficial).
      </p>

      <form id="tseForm" className="mt-8 space-y-8 rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1) Titular</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-slate-600">Nombre</label>
              <input name="nombre" className="mt-1 w-full rounded-lg border border-slate-200 p-2" required />
            </div>
            <div>
              <label className="text-sm text-slate-600">1º apellido</label>
              <input name="apellido1" className="mt-1 w-full rounded-lg border border-slate-200 p-2" required />
            </div>
            <div>
              <label className="text-sm text-slate-600">2º apellido (opcional)</label>
              <input name="apellido2" className="mt-1 w-full rounded-lg border border-slate-200 p-2" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Fecha de nacimiento</label>
              <input
                name="fecha_nacimiento"
                type="date"
                className="mt-1 w-full rounded-lg border border-slate-200 p-2"
                required
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">Documento</label>
              <select name="doc_tipo" className="mt-1 w-full rounded-lg border border-slate-200 p-2" required>
                <option value="">Selecciona…</option>
                <option value="DNI">DNI</option>
                <option value="NIE">NIE</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-600">Nº documento</label>
              <input
                name="doc_num"
                className="mt-1 w-full rounded-lg border border-slate-200 p-2"
                placeholder="12345678Z / X1234567L / PA12345"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">Nº Seguridad Social (NAF, opcional)</label>
              <input
                name="naf"
                className="mt-1 w-full rounded-lg border border-slate-200 p-2"
                placeholder="12 dígitos"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2) Domicilio de envío</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-slate-600">Tipo de vía</label>
              <select name="via" className="mt-1 w-full rounded-lg border border-slate-200 p-2" required>
                <option value="">Selecciona…</option>
                <option value="Calle">Calle</option>
                <option value="Avenida">Avenida</option>
                <option value="Plaza">Plaza</option>
                <option value="Camino">Camino</option>
                <option value="Carretera">Carretera</option>
                <option value="Travesía">Travesía</option>
                <option value="Otra">Otra</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-600">Vía y nº</label>
              <input name="direccion" className="mt-1 w-full rounded-lg border border-slate-200 p-2" required />
            </div>
            <div>
              <label className="text-sm text-slate-600">Piso / Puerta (opcional)</label>
              <input name="piso" className="mt-1 w-full rounded-lg border border-slate-200 p-2" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Código postal</label>
              <input
                name="cp"
                className="mt-1 w-full rounded-lg border border-slate-200 p-2"
                placeholder="08001"
                required
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">Municipio</label>
              <input name="municipio" className="mt-1 w-full rounded-lg border border-slate-200 p-2" required />
            </div>
            <div>
              <label className="text-sm text-slate-600">Provincia</label>
              <select name="provincia" className="mt-1 w-full rounded-lg border border-slate-200 p-2" required>
                {PROVINCES.map((province) => (
                  <option key={province} value={province}>
                    {province || "Selecciona…"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <label className="flex gap-2">
              <input id="domCoincide" type="checkbox" className="mt-1" required />
              Declaro que este domicilio coincide con el registrado en la Seguridad Social.
            </label>
            <label className="flex gap-2">
              <input id="otraDir" type="checkbox" className="mt-1" />
              Quiero recibirla en otra dirección en España (requiere verificación adicional).
            </label>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3) Contacto y autorización</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-slate-600">Teléfono</label>
              <input
                name="telefono"
                className="mt-1 w-full rounded-lg border border-slate-200 p-2"
                placeholder="+34 6XXXXXXXX"
                required
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input
                name="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-200 p-2"
                placeholder="tucorreo@dominio.com"
                required
              />
            </div>
          </div>
          <div className="mt-3 space-y-3 text-sm text-slate-600">
            <label className="flex gap-2">
              <input id="mandato" type="checkbox" className="mt-1" required />
              Autorizo a TuMarca a presentar esta solicitud de TSE en mi nombre.
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-600">Firma (nombre completo)</label>
                <input id="firma" name="firma" className="mt-1 w-full rounded-lg border border-slate-200 p-2" required />
              </div>
              <label className="flex items-end gap-2">
                <input id="privacidad" type="checkbox" className="mt-1" required />
                Acepto la Política de Privacidad y Términos.
              </label>
            </div>
          </div>
        </section>

        <p className="text-sm text-slate-500">
          Coste total: {PRICE.toFixed(2)} € de gestión. Si no presentamos tu solicitud, reembolso 100% automático.
        </p>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div ref={payRef} className="mt-4" />
      </form>
    </main>
  );
}
