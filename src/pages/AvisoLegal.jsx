import React from "react";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export default function AvisoLegal() {
  usePageMetadata({
    title: "TramitesYA - Aviso legal del servicio TSE",
    description: "Información legal y condiciones de uso del servicio privado TramitesYA para tramitar la Tarjeta Sanitaria Europea.",
  });

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-bold">Aviso legal</h1>
          <p className="mt-2 text-sm text-blue-200">TramitesYA · Gestoría digital para la Tarjeta Sanitaria Europea</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-4 py-12 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Titularidad y contacto</h2>
          <p className="mt-3">
            El dominio tramitesyaweb.com y el servicio "TramitesYA" pertenecen a un profesional autónomo que actúa como
            gestoría digital independiente. Puedes contactar en <a className="text-blue-700 underline" href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a> para cualquier asunto relacionado con el sitio o con las solicitudes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Objeto del servicio</h2>
          <p className="mt-3">
            TramitesYA ofrece un servicio privado de preparación y presentación de solicitudes de Tarjeta Sanitaria Europea (TSE) ante la Seguridad Social española, mediante el canal sin certificado cuando el domicilio registrado coincide con el declarado por el usuario.
          </p>
          <p className="mt-3">
            No somos la Seguridad Social ni un organismo público. Actuamos como representantes autorizados por el usuario y cobramos por la gestión (9,90 € titular + 5 € por beneficiario). El documento oficial TSE tiene un coste administrativo de 0 €.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Condiciones de uso</h2>
          <p className="mt-3">
            El usuario declara ser titular de los datos aportados y se compromete a facilitar información veraz, completa y actualizada. El servicio se presta exclusivamente para envíos dentro de España y para expedientes en los que el domicilio esté validado por la Seguridad Social. Si detectamos que el domicilio no coincide, te indicaremos el procedimiento de actualización y, si no puede resolverse, se aplicará devolución del 100% del importe cobrado.
          </p>
          <p className="mt-3">
            TramitesYA se reserva el derecho de rechazar solicitudes que sean contrarias a la normativa, presenten indicios de fraude o no cumplan los requisitos básicos para el canal sin certificado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Propiedad intelectual</h2>
          <p className="mt-3">
            Los contenidos, diseños, logotipos e interfaces del sitio son propiedad del titular o se usan con autorización. Queda prohibida su reproducción o distribución sin consentimiento previo escrito. Las marcas y logotipos de terceros (por ejemplo, PayPal) pertenecen a sus titulares y se citan exclusivamente a título informativo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Responsabilidad</h2>
          <p className="mt-3">
            TramitesYA actúa como intermediario para tramitar la TSE. No puede garantizar plazos de emisión o entrega física de la tarjeta, al depender de la Seguridad Social. Sí garantizamos la presentación correcta siempre que el usuario cumpla los requisitos y aporte la información solicitada.
          </p>
          <p className="mt-3">
            Si no podemos presentar la solicitud por causas imputables al servicio, reembolsaremos el 100% del pago gestionado mediante PayPal. Para incidencias relacionadas con la propia pasarela, se aplicarán las condiciones de PayPal Business.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. Protección de datos</h2>
          <p className="mt-3">
            Tratamos los datos únicamente para tramitar la TSE y dar soporte al usuario. Los detalles completos se describen en la Política de Privacidad. Eliminamos documentos adjuntos en un máximo de 30 días, salvo obligación legal de conservación.
          </p>
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
