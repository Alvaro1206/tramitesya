import React from "react";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export default function PoliticaPrivacidad() {
  usePageMetadata({
    title: "TramitesYA - Política de privacidad TSE",
    description: "Cómo gestionamos tus datos para tramitar la Tarjeta Sanitaria Europea sin certificado.",
  });

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-bold">Política de privacidad</h1>
          <p className="mt-2 text-sm text-blue-200">Aplicable al servicio TramitesYA para la Tarjeta Sanitaria Europea</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-4 py-12 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Responsable y contacto</h2>
          <p className="mt-3">
            El responsable del tratamiento es TramitesYA (gestoría digital independiente). Puedes ejercer tus derechos o plantear dudas escribiendo a
            <a className="text-blue-700 underline" href="mailto:tramitesyaweb@gmail.com"> tramitesyaweb@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Datos que tratamos</h2>
          <p className="mt-3">Recopilamos únicamente los datos necesarios para tramitar la TSE:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Datos identificativos del titular: nombre y apellidos, fecha de nacimiento, tipo y número de documento (DNI/NIE/Pasaporte) y, si se facilita, número de la Seguridad Social.</li>
            <li>Datos de domicilio: tipo de vía, dirección completa, código postal, municipio y provincia. Es obligatorio que coincidan con los registrados en la Seguridad Social para usar el canal sin certificado.</li>
            <li>Datos de contacto: teléfono móvil español y correo electrónico.</li>
            <li>Información transaccional: referencias de pago generadas por PayPal (orderID, captureID, importe abonado).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Finalidades</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Validar los datos y el domicilio para presentar la solicitud de TSE sin certificado.</li>
            <li>Gestionar la relación contractual y mantenerte informado sobre el estado del trámite (envío de referencia, incidencias, reembolsos).</li>
            <li>Cumplir obligaciones legales (facturación, prevención del fraude y atención a requerimientos oficiales).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Base legal</h2>
          <p className="mt-3">Tratamos los datos sobre las siguientes bases del RGPD:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Ejecución de contrato:</strong> necesaria para tramitar la TSE en tu nombre.</li>
            <li><strong>Consentimiento explícito:</strong> cuando marcas la autorización y aceptas la Política de Privacidad en el formulario.</li>
            <li><strong>Interés legítimo / obligaciones legales:</strong> conservación mínima para responder a reclamaciones o auditorías.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Destinatarios</h2>
          <p className="mt-3">
            Compartimos datos únicamente con los proveedores imprescindibles:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Seguridad Social / INSS: envío de la solicitud oficial y seguimiento.</li>
            <li>PayPal (entidad de pago): procesamiento del cobro y, en su caso, devoluciones.</li>
            <li>Herramientas de soporte (correo electrónico, almacenamiento seguro o automatizaciones) bajo acuerdos de confidencialidad y con servidores ubicados en la UE o con cláusulas tipo.</li>
          </ul>
          <p className="mt-3">No vendemos datos a terceros ni los utilizamos para campañas publicitarias.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. Plazos de conservación</h2>
          <p className="mt-3">
            Conservamos la información mientras gestionamos tu TSE y, posteriormente, el tiempo necesario para resolver incidencias o justificar la prestación del servicio (máximo 12 meses). Los documentos adjuntos y capturas de pantalla se eliminan en un máximo de 30 días, salvo obligación legal de conservación.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Derechos</h2>
          <p className="mt-3">
            Puedes solicitar acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento escribiendo a
            <a className="text-blue-700 underline" href="mailto:tramitesyaweb@gmail.com"> tramitesyaweb@gmail.com</a>. Deberemos verificar tu identidad antes de aplicar cualquier cambio. Si no estás conforme con la respuesta, puedes reclamar ante la Agencia Española de Protección de Datos (AEPD).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">8. Seguridad</h2>
          <p className="mt-3">Usamos conexiones cifradas (HTTPS), almacenamos la información en servicios con autenticación reforzada y auditamos el acceso interno. Solo el personal autorizado puede ver tus datos y únicamente para completar la solicitud.</p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-100 py-6 text-sm text-slate-600">
        <div className="mx-auto max-w-5xl px-4">
          <p>Última actualización: octubre de 2025 · TramitesYA.</p>
        </div>
      </footer>
    </div>
  );
}
