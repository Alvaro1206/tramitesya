import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal y condiciones de uso | TramitesYA",
  description:
    "Datos de titularidad, condiciones de uso y responsabilidades del servicio privado TramitesYA para tramitar la Tarjeta Sanitaria Europea.",
  robots: { index: true, follow: true },
};

const UPDATED_AT = "16/11/2025";

const OWNER = {
  name: "Alvaro Esteve Rovira",
  nif: "53873015T",
  address: "Carrer de Pahissa 10, 08172 Sant Cugat del Valles, Barcelona, Espana",
  email: "tramitesyaweb@gmail.com",
  tradeName: "TramitesYA",
  site: "https://tramitesyaweb.com",
};

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
        <header>
          <p className="text-xs uppercase tracking-wide text-slate-500">Aviso legal, LSSI</p>
          <h1>Aviso legal y condiciones de uso</h1>
          <p className="mt-2 text-sm text-slate-600">
            Ultima actualizacion: <strong>{UPDATED_AT}</strong>
          </p>
          <ul className="text-sm text-slate-600">
            <li>
              <strong>Titular:</strong> {OWNER.name} (empresario individual bajo el nombre comercial {OWNER.tradeName})
            </li>
            <li>
              <strong>NIF:</strong> {OWNER.nif}
            </li>
            <li>
              <strong>Domicilio fiscal:</strong> {OWNER.address}
            </li>
            <li>
              <strong>Contacto:</strong>{" "}
              <a href={`mailto:${OWNER.email}`} className="text-indigo-600">
                {OWNER.email}
              </a>
            </li>
            <li>
              <strong>Sitio web:</strong>{" "}
              <a href={OWNER.site} className="text-indigo-600">
                {OWNER.site}
              </a>
            </li>
          </ul>
          <p>
            TramitesYA es un servicio privado de gestion administrativa y no forma parte de la Seguridad Social ni de ningun organismo
            publico.
          </p>
        </header>

        <section>
          <h2>1. Objeto del sitio web</h2>
          <p>Este sitio web tiene como finalidad:</p>
          <ul>
            <li>Informar sobre los servicios de gestion administrativa ofrecidos por TramitesYA, especialmente la TSE.</li>
            <li>Permitir la contratacion online de dichos servicios mediante los formularios disponibles.</li>
            <li>Habilitar medios de pago electronicos seguros, como PayPal.</li>
          </ul>
          <p>
            El acceso implica aceptar sin reservas este Aviso legal, las Condiciones de contratacion, la Politica de Privacidad y la Politica de
            Cookies. Si no estas de acuerdo, no debes usar el sitio ni contratar los servicios.
          </p>
        </section>

        <section>
          <h2>2. Condicion de usuario y normas de acceso</h2>
          <p>Se considera usuario a toda persona que acceda o utilice la web. Al hacerlo te comprometes a:</p>
          <ol>
            <li>Usar la web de forma licita, diligente y respetuosa con la ley y el orden publico.</li>
            <li>
              No realizar actividades ilicitas, difundir contenido ilegal u ofensivo, ni introducir virus o sistemas que puedan danar las
              infraestructuras de TramitesYA o de terceros.
            </li>
            <li>Aportar datos veraces y actualizados en los formularios, siendo responsable de cualquier dano por datos falsos o inexactos.</li>
          </ol>
          <p>
            El acceso es gratuito pero la contratacion de servicios esta sujeta al pago del precio correspondiente. Declaras ser mayor de 18 anos y
            contar con capacidad legal suficiente. Los menores deben actuar bajo supervision de sus tutores.
          </p>
        </section>

        <section>
          <h2>3. Naturaleza del servicio</h2>
          <p>
            TramitesYA no es la Seguridad Social. Es un servicio privado que, con tu autorizacion, recoge tus datos, presenta la solicitud de TSE y
            realiza seguimiento razonable. La resolucion del tramite depende exclusivamente de la Administracion competente.
          </p>
          <p>
            Aunque nos comprometemos a presentar la solicitud con rapidez y mantenerte informado, no podemos garantizar plazos ni resultados.
            Tampoco respondemos de errores, cambios normativos o incidencias imputables a la Administracion o a datos incorrectos aportados por ti.
          </p>
        </section>

        <section>
          <h2>4. Informacion sobre precios, pagos y facturacion</h2>
          <h3>Precio del servicio</h3>
          <p>
            El precio vigente se muestra en el formulario de contratacion, en euros e impuestos incluidos salvo indicacion contraria. Las posibles
            actualizaciones de precio no afectan a pedidos ya pagados.
          </p>
          <h3>Medios de pago</h3>
          <p>
            El pago se realiza mediante plataformas seguras (por ejemplo, PayPal). TramitesYA no almacena los datos completos del medio de pago. El
            uso de estas plataformas implica aceptar sus condiciones propias.
          </p>
          <h3>Confirmacion</h3>
          <p>
            Tras el pago enviaremos una confirmacion con el detalle del servicio y una referencia interna. Conservamos registro de la operacion para
            atender obligaciones legales y posibles reclamaciones.
          </p>
        </section>

        <section>
          <h2>5. Derecho de desistimiento y reembolsos</h2>
          <p>
            El servicio de gestion comienza casi de forma inmediata tras recibir tus datos y el pago. Al confirmar la contratacion autorizas
            expresamente el inicio de la prestacion y reconoces que el derecho de desistimiento puede no resultar aplicable una vez iniciadas las
            gestiones.
          </p>
          <p>
            No obstante, podremos valorar reembolsos totales o parciales si existe un error imputable a TramitesYA o si la gestion no se ha iniciado.
            Para solicitarlo envia un correo con tus datos, fecha de pago y motivo a {OWNER.email}.
          </p>
        </section>

        <section>
          <h2>6. Responsabilidad del usuario sobre los datos</h2>
          <p>
            Eres responsable de la veracidad y legitimidad de los datos facilitados. Debes ser titular de los datos o contar con autorizacion para
            tramitar en nombre de terceros. Cualquier error u omision puede impedir la gestion o provocar retrasos en la Administracion sin derecho
            automatico a reembolso.
          </p>
        </section>

        <section>
          <h2>7. Exclusiones y limitaciones de responsabilidad</h2>
          <p>TramitesYA no garantiza la disponibilidad permanente del sitio ni la ausencia de errores tecnicos.</p>
          <p>No seremos responsables de:</p>
          <ul>
            <li>Decisiones, retrasos o incidencias de la Administracion publica.</li>
            <li>Pérdida de oportunidades o danos indirectos derivados del tramite.</li>
            <li>Uso negligente de la web, aportacion de datos falsos o fallos tecnicos inevitables.</li>
          </ul>
          <p>
            En cualquier caso, la responsabilidad maxima frente al usuario se limita al importe satisfecho por el servicio concreto objeto de
            reclamacion.
          </p>
        </section>

        <section>
          <h2>8. Propiedad intelectual e industrial</h2>
          <p>
            Los contenidos (textos, imagenes, logotipos, codigo, etc.) pertenecen a {OWNER.name} o a terceros autorizados. Se prohibe su reproduccion,
            transformacion o utilizacion comercial sin permiso expreso y por escrito.
          </p>
        </section>

        <section>
          <h2>9. Enlaces de terceros</h2>
          <p>
            El sitio puede contener enlaces a webs de terceros unicamente a efectos informativos. No controlamos su contenido ni asumimos
            responsabilidades por ellos. La inclusion de enlaces no implica recomendacion o aprobacion.
          </p>
        </section>

        <section>
          <h2>10. Politica de privacidad y proteccion de datos</h2>
          <p>
            Los datos personales se tratan conforme a la Politica de Privacidad disponible en{" "}
            <a href="https://tramitesyaweb.com/politica-privacidad" className="text-indigo-600">
              https://tramitesyaweb.com/politica-privacidad
            </a>
            . Encontraras informacion sobre finalidades, bases legales, destinatarios, plazos de conservacion y derechos. El uso de los formularios
            implica que has leido y aceptado dicha politica.
          </p>
        </section>

        <section>
          <h2>11. Politica de cookies</h2>
          <p>
            Utilizamos cookies propias y de terceros para fines tecnicos, de personalizacion y, en su caso, analiticos. Puedes consultar el detalle y
            configurar tus preferencias en{" "}
            <a href="https://tramitesyaweb.com/politica-cookies" className="text-indigo-600">
              https://tramitesyaweb.com/politica-cookies
            </a>
            .
          </p>
        </section>

        <section>
          <h2>12. Comunicaciones comerciales</h2>
          <p>
            Solo enviaremos comunicaciones comerciales si las has solicitado o consentido. Podras revocar ese consentimiento en cualquier momento
            siguiendo las instrucciones de cada mensaje o escribiendo a {OWNER.email}.
          </p>
        </section>

        <section>
          <h2>13. Reclamaciones y resolucion de conflictos</h2>
          <p>
            Para reclamaciones contacta en {OWNER.email} indicando nombre, correo usado en la compra, fecha aproximada del pago y descripcion de la
            incidencia. Trataremos de responder en un plazo razonable. Ademas, puedes utilizar la plataforma europea de resolucion de litigios en
            <a href="https://ec.europa.eu/consumers/odr" className="text-indigo-600" target="_blank" rel="noreferrer">
              {" "}
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>
          <p>Salvo lo previsto por la normativa de consumidores, las partes se someten a los juzgados y tribunales de Barcelona.</p>
        </section>

        <section>
          <h2>14. Legislacion aplicable</h2>
          <p>
            Este Aviso legal se rige por la legislacion espanola vigente, incluida la LSSI, la normativa de consumo y la normativa de proteccion de
            datos (RGPD y LOPDGDD), entre otras disposiciones aplicables.
          </p>
        </section>

        <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>Ultima actualizacion: {UPDATED_AT}</p>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href={OWNER.site} className="text-indigo-600">
              Tramitesyaweb.com
            </a>
            . Todos los derechos reservados.
          </p>
        </footer>
      </article>
    </main>
  );
}
