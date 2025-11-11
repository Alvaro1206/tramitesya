import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | TramitesYA",
  description: "Información sobre el uso de cookies y tecnologías similares en TramitesYA.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  const updatedAt = "11/11/2025";
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
        <header>
          <h1>Política de Cookies</h1>
          <p className="mt-2 text-sm text-slate-600">
            <strong>Última actualización:</strong> {updatedAt}
          </p>
          <p>
            Esta web utiliza cookies propias y de terceros para garantizar su funcionamiento y, solo si das tu consentimiento, para analítica
            y marketing. Puedes gestionar tu elección desde el banner de cookies o escribiéndonos a{" "}
            <a href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>.
          </p>
        </header>

        <section>
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Son archivos que se almacenan en tu navegador y permiten recordar cierta información. Pueden ser necesarias para que la web funcione,
            medir su rendimiento o mostrar contenidos personalizados.
          </p>
        </section>

        <section>
          <h2>2. Tipos de cookies que usamos</h2>
          <ul>
            <li>
              <strong>Esenciales:</strong> imprescindibles para recordar tu sesión, proteger el formulario y mantener tus preferencias (no requieren
              consentimiento).
            </li>
            <li>
              <strong>Analítica básica (opcional):</strong> nos ayuda a comprender el uso del sitio de forma agregada para mejorar la experiencia.
            </li>
            <li>
              <strong>Marketing (opcional):</strong> solo se activan si lo autorizas expresamente.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Gestión del consentimiento</h2>
          <p>
            El banner de cookies te permite <strong>aceptar</strong> o <strong>rechazar</strong> las cookies opcionales. Puedes modificar tu elección
            borrando las cookies del navegador o volviendo a abrir el banner (escríbenos si necesitas asistencia).
          </p>
        </section>

        <section>
          <h2>4. Desactivación desde el navegador</h2>
          <p>También puedes configurar tu navegador para ser avisado ante la recepción de cookies o bloquearlas.</p>
          <ul>
            <li>
              <a href="https://support.google.com/chrome/answer/95647" rel="noreferrer" target="_blank">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" rel="noreferrer" target="_blank">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" rel="noreferrer" target="_blank">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/es-es/microsoft-edge" rel="noreferrer" target="_blank">
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Cambios en la política</h2>
          <p>
            Podemos actualizar esta política para reflejar modificaciones legales o tecnológicas. Publicaremos siempre la versión vigente indicando
            la fecha de actualización.
          </p>
        </section>
      </article>
    </main>
  );
}
