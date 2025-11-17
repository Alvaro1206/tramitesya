import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal | TramitesYA",
  description: "Información legal sobre tramitesyaweb.com, condiciones de uso y responsabilidades.",
  robots: { index: true, follow: true },
};

const UPDATED_AT = "16/11/2025";

const CONTACT_EMAIL = "tramitesyaweb@gmial.com";
const ALT_EMAIL = "tramitesyawe@gmail.com";
const DOMAIN = "https://tramitesyaweb.com";

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
        <header>
          <h1>Aviso legal</h1>
          <p className="mt-2 text-sm text-slate-600">
            <strong>Fecha de última actualización:</strong> {UPDATED_AT}
          </p>
          <p className="text-sm text-slate-600">
            <strong>Titular:</strong> Tramitesyaweb &middot; <strong>Dominio:</strong>{" "}
            <a href={DOMAIN}>{DOMAIN}</a> &middot; <strong>Contacto:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </header>

        <section>
          <h2>1. Objeto</h2>
          <p>
            El presente Aviso legal regula el acceso y uso del sitio web <strong>{DOMAIN}</strong> (en adelante, el
            &ldquo;Sitio Web&rdquo;). El acceso implica la aceptación plena y sin reservas de este Aviso legal y de las
            políticas que lo acompañan.
          </p>
        </section>

        <section>
          <h2>2. Condiciones de uso</h2>
          <p>El usuario se compromete a utilizar el Sitio Web de forma lícita, diligente y honesta.</p>
          <p>Queda expresamente prohibido:</p>
          <ul>
            <li>Utilizar el Sitio Web con fines fraudulentos o que puedan causar daños a terceros.</li>
            <li>Introducir virus o sistemas capaces de dañar la infraestructura del Titular o de terceros.</li>
            <li>
              Reproducir, extraer o reutilizar contenidos sin autorización, así como obstaculizar el correcto
              funcionamiento del servicio.
            </li>
          </ul>
          <p>El Titular se reserva el derecho a retirar el acceso a quienes incumplan estas condiciones.</p>
        </section>

        <section>
          <h2>3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos (textos, logotipos, diseños, código y software) son propiedad del Titular o de terceros
            autorizados. Queda prohibida cualquier explotación sin permiso expreso y por escrito.
          </p>
        </section>

        <section>
          <h2>4. Enlaces</h2>
          <p>
            El Sitio Web puede enlazar a páginas de terceros. El Titular no controla su contenido ni sus políticas, por lo
            que no asume responsabilidades por ellos. La inclusión de enlaces no implica relación ni respaldo.
          </p>
        </section>

        <section>
          <h2>5. Responsabilidades</h2>
          <p>
            El Titular no garantiza la disponibilidad o infalibilidad del Sitio Web y no será responsable de los daños
            derivados del uso o imposibilidad de acceso. El usuario debe contar con herramientas para impedir software
            malicioso.
          </p>
        </section>

        <section>
          <h2>6. Contratación de servicios y pagos</h2>
          <p>
            Antes de contratar, se informará del precio total, impuestos y medios de pago disponibles (por ejemplo,
            PayPal). Los pagos se procesan en los servidores del proveedor; el Titular no almacena datos completos de
            tarjetas.
          </p>
          <p>
            Si procede, la factura se solicitará introduciendo los datos fiscales durante la compra o escribiendo a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. El derecho de desistimiento no aplica una vez
            prestado el servicio o cuando la ejecución comienza con el consentimiento expreso del consumidor.
          </p>
          <p>
            Si el Titular no pudiera prestar el servicio por causas imputables a él, se reembolsará el importe abonado en
            el mismo medio de pago.
          </p>
        </section>

        <section>
          <h2>7. Protección de datos</h2>
          <p>
            El tratamiento de datos personales se rige por la Política de Privacidad y la Política de Cookies. El Titular
            cumple con el RGPD y la LOPDGDD.
          </p>
        </section>

        <section>
          <h2>8. Menores de edad</h2>
          <p>
            El Sitio Web no se dirige a menores de 14 años. El uso sin autorización de padres o tutores es responsabilidad
            de quienes tengan la patria potestad o tutela.
          </p>
        </section>

        <section>
          <h2>9. Seguridad</h2>
          <p>
            El Sitio Web utiliza medidas como HTTPS/TLS y proveedores especializados para proteger la información, si bien
            ningún sistema es infalible.
          </p>
        </section>

        <section>
          <h2>10. Atención al cliente</h2>
          <p>
            Para consultas o reclamaciones puede escribirse a <a href={`mailto:${ALT_EMAIL}`}>{ALT_EMAIL}</a>. La
            plataforma europea de resolución de litigios en línea está disponible en{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </section>

        <section>
          <h2>11. Nulidad parcial</h2>
          <p>La nulidad de una cláusula no afectará a la validez del resto.</p>
        </section>

        <section>
          <h2>12. Legislación y jurisdicción</h2>
          <p>
            Este Aviso legal se rige por la legislación española. Si el usuario es consumidor, las controversias se
            resolverán ante los juzgados del domicilio del consumidor; en los demás casos, ante los de Barcelona, salvo
            norma imperativa distinta.
          </p>
        </section>

        <section>
          <h2>13. Modificaciones</h2>
          <p>
            El Titular podrá modificar este Aviso legal y/o el contenido del Sitio Web en cualquier momento. Se recomienda
            su revisión periódica.
          </p>
        </section>

        <footer>
          <p>
            &copy; 2025{" "}
            <a href={DOMAIN} rel="noreferrer">
              Tramitesyaweb.com
            </a>
            . Todos los derechos reservados.
          </p>
        </footer>
      </article>
    </main>
  );
}
