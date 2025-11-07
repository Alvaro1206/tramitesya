import React from "react";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export default function CookiesPage() {
  usePageMetadata({
    title: "TramitesYA - Política de cookies",
    description: "Información sobre el uso de cookies y tecnologías similares en TramitesYA (servicio TSE sin certificado).",
  });

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-bold">Política de cookies</h1>
          <p className="mt-2 text-sm text-blue-200">Aplicable al dominio tramitesyaweb.com y al servicio de TSE</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-4 py-12 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. ¿Qué son las cookies?</h2>
          <p className="mt-3">
            Las cookies son archivos que el navegador guarda temporalmente para recordar preferencias y mejorar la experiencia. También usamos tecnologías similares (por ejemplo, almacenamiento local) para mantener el estado del formulario TSE mientras lo completas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Tipos de cookies que utilizamos</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Esenciales:</strong> necesarias para que el formulario y la pasarela de pago funcionen. Incluyen las cookies que inyecta PayPal al renderizar los Smart Buttons.</li>
            <li><strong>De analítica ligera:</strong> podemos usar herramientas anónimas para medir eventos como <code>tse_preview_ok</code> o <code>tse_submitted</code>. Se recogen sin identificar al usuario.</li>
            <li><strong>Funcionales:</strong> permiten recordar temporalmente tus elecciones (tipo de vía o campos ya validados) mientras navegas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Gestión y desactivación</h2>
          <p className="mt-3">
            Puedes borrar o bloquear cookies desde el menú de tu navegador. Si eliminas las cookies esenciales, el formulario TSE y los pagos con PayPal podrían dejar de funcionar correctamente. Consulta la ayuda de tu navegador para gestionarlas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Cookies de terceros</h2>
          <p className="mt-3">
            PayPal es el principal tercero que instala cookies al procesar pagos. También podemos incrustar scripts de analítica o de soporte (por ejemplo, para medir errores). Estos proveedores tienen sus propias políticas y recomendamos revisarlas.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Actualizaciones</h2>
          <p className="mt-3">Actualizaremos esta política cuando incorporemos nuevas herramientas o cambie la normativa. Publicaremos siempre la versión vigente en esta página.</p>
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
