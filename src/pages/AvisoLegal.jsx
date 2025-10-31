
import React from "react";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export default function AvisoLegal() {
  usePageMetadata({
    title: "TramitesYA - Aviso legal y condiciones de uso",
    description:
      "Consulta los datos de titularidad, responsabilidades y condiciones de uso del servicio privado TramitesYA.",
  });
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-bold">Aviso legal</h1>
          <p className="mt-2 text-sm text-blue-200">
            TramitesYA.com - Servicio privado de gestion de tramites administrativos
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-10 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Informacion general</h2>
          <p className="mt-3">
            TramitesYA.com es una plataforma privada dedicada a la gestion y asistencia en tramites administrativos en nombre de particulares. No somos un portal oficial del Gobierno ni pertenecemos a ninguna administracion publica.
          </p>
          <p className="mt-3">
            Titular: Gestion Online TramitesYA S.L. (empresa ficticia). Domicilio: Calle Ejemplo 123, 28000 Madrid. Correo de contacto:
            <a className="ml-1 underline hover:text-blue-700" href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Objeto del servicio</h2>
          <p className="mt-3">
            Nuestro servicio consiste en recopilar los datos necesarios, verificar la documentacion y tramitar solicitudes en nombre del usuario ante los organismos oficiales correspondientes. La emision de los documentos depende del cumplimiento de los requisitos exigidos por dichos organismos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Condiciones de uso</h2>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>El usuario garantiza que los datos aportados son veraces y conformes a derecho.</li>
            <li>TramitesYA.com puede rechazar solicitudes si detecta irregularidades o imposibilidad de gestion.</li>
            <li>Las tasas oficiales u otros cargos de organismos no estan incluidos salvo indicacion expresa.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Responsabilidad</h2>
          <p className="mt-3">
            No nos hacemos responsables de retrasos o denegaciones imputables a la administracion publica ni de errores derivados de datos incorrectos facilitados por el usuario. Garantizamos el reembolso del servicio si la gestion no puede realizarse por causas imputables a nuestra actuacion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Propiedad intelectual</h2>
          <p className="mt-3">
            El contenido del sitio web, incluyendo textos, logotipos y diseno, pertenece a TramitesYA.com o a sus respectivos titulares. Queda prohibida su reproduccion sin autorizacion expresa.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-100 py-6 text-sm text-slate-600">
        <div className="mx-auto max-w-5xl px-4">
          <p>Ultima actualizacion: octubre de 2025 - Gestion Online TramitesYA S.L.</p>
          <LinkFooter />
        </div>
      </footer>
    </div>
  );
}

function LinkFooter() {
  return (
    <div className="mt-2">
      <a className="text-blue-700 underline" href="mailto:tramitesyaweb@gmail.com">
        Contacto directo
      </a>
    </div>
  );
}
