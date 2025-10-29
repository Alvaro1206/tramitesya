import React from "react";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-bold">Politica de cookies</h1>
          <p className="mt-2 text-sm text-blue-200">
            TramitesYA.com - Como usamos cookies y tecnologias similares
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-10 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Que son las cookies?</h2>
          <p className="mt-3">
            Las cookies son pequenos archivos que se almacenan en tu dispositivo cuando visitas
            nuestro sitio. Permiten recordar preferencias, analizar el uso de la web y ofrecer
            funcionalidades esenciales para el servicio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Tipos de cookies que utilizamos</h2>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <strong>Cookies necesarias:</strong> permiten el funcionamiento basico del sitio
              (por ejemplo, recordar el tramite seleccionado). No pueden desactivarse porque la web
              dejaria de funcionar correctamente.
            </li>
            <li>
              <strong>Cookies de analitica:</strong> utilizamos herramientas como servicios de
              medicion anonima (por ejemplo, Google Analytics) para conocer uso general del sitio y
              mejorar la experiencia. Los datos se recogen de forma agregada.
            </li>
            <li>
              <strong>Cookies de funcionalidad:</strong> ayudan a recordar preferencias como idioma,
              datos del formulario temporalmente o mostrar notificaciones de exito.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Gestion y desactivacion</h2>
          <p className="mt-3">
            Puedes controlar o eliminar cookies desde la configuracion de tu navegador. Los
            principales navegadores ofrecen opciones para bloquear o eliminar cookies existentes.
            Ten en cuenta que, si desactivas las cookies necesarias, algunos servicios pueden
            dejar de funcionar.
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <a className="underline text-blue-700" href="https://support.google.com/chrome/answer/95647">
                Google Chrome
              </a>
            </li>
            <li>
              <a className="underline text-blue-700" href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a className="underline text-blue-700" href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
                Safari
              </a>
            </li>
            <li>
              <a className="underline text-blue-700" href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies">
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Cookies de terceros</h2>
          <p className="mt-3">
            Algunos proveedores externos pueden instalar cookies cuando interactuas con sus
            servicios integrados en nuestra web (pasarelas de pago, reproductores de video o
            herramientas de soporte). Te recomendamos revisar sus propias politicas para mas
            informacion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Actualizaciones</h2>
          <p className="mt-3">
            Actualizaremos esta politica si incorporamos nuevos servicios o si cambia la normativa.
            Publicaremos la nueva version en esta pagina e indicaremos la fecha de revision.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-100 py-6 text-sm text-slate-600">
        <div className="mx-auto max-w-5xl px-4">
          <p>Ultima actualizacion: octubre de 2025 - Gestion Online TramitesYA S.L.</p>
        </div>
      </footer>
    </div>
  );
}
