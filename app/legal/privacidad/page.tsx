import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidad | TramitesYA",
  description:
    "Informacion sobre como TramitesYA trata los datos personales para gestionar la Tarjeta Sanitaria Europea y otros tramites.",
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

export default function PoliticaPrivacidadPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
        <header>
          <p className="text-xs uppercase tracking-wide text-slate-500">Proteccion de datos</p>
          <h1>Politica de Privacidad</h1>
          <p className="mt-2 text-sm text-slate-600">
            Ultima actualizacion: <strong>{UPDATED_AT}</strong>
          </p>
          <p className="text-sm text-slate-600">
            Responsable: {OWNER.name} ({OWNER.tradeName}) &middot; NIF {OWNER.nif} &middot; {OWNER.address} &middot;{" "}
            <a href={`mailto:${OWNER.email}`} className="text-indigo-600">
              {OWNER.email}
            </a>
          </p>
          <p>
            El uso del sitio <a href={OWNER.site}>{OWNER.site}</a> implica la lectura y aceptacion de esta Politica de Privacidad. Si no estas de acuerdo,
            no utilices el sitio ni contrates los servicios.
          </p>
        </header>

        <section>
          <h2>1. Identidad del responsable</h2>
          <p>{OWNER.name} actua como empresario individual bajo el nombre comercial TramitesYA y es el responsable del tratamiento de los datos recogidos a traves del sitio.</p>
        </section>

        <section>
          <h2>2. Datos personales tratados</h2>
          <h3>Formulario de solicitud TSE</h3>
          <ul>
            <li>Datos identificativos: nombre, apellidos, documento de identidad, firma.</li>
            <li>Contacto: telefono y correo electronico.</li>
            <li>Seguridad Social y domicilio: NAF, direccion principal y alternativa.</li>
            <li>Datos adicionales necesarios, incluida fecha de nacimiento o declaraciones sobre el domicilio.</li>
          </ul>
          <h3>Datos de navegacion</h3>
          <p>Direccion IP, identificadores de dispositivo, agente del navegador, paginas visitadas y cookies segun la Politica de Cookies.</p>
          <h3>Pagos y facturacion</h3>
          <p>Importe, fecha, identificador de operacion, medio de pago y datos fiscales para emitir factura. TramitesYA no almacena datos completos de tarjeta; los gestiona la pasarela (por ejemplo, PayPal).</p>
        </section>

        <section>
          <h2>3. Finalidades y bases legales</h2>
          <h3>Gestion de la solicitud TSE</h3>
          <p>Recoger datos, presentar la solicitud ante la Seguridad Social, hacer seguimiento y comunicarse contigo. Base legal: ejecucion del contrato y cumplimiento de obligaciones legales.</p>
          <h3>Pagos y facturacion</h3>
          <p>Gestionar el cobro, control contable y fiscal, emision de facturas. Base legal: ejecucion del contrato y obligaciones legales.</p>
          <h3>Atencion al usuario</h3>
          <p>Responder dudas e incidencias por correo u otros canales. Base legal: medidas precontractuales, contrato e interes legitimo.</p>
          <h3>Seguridad y prevencion de fraude</h3>
          <p>Proteger el sitio, evitar usos abusivos y registrar evidencias minimas. Base legal: interes legitimo y, en su caso, obligaciones legales.</p>
          <h3>Comunicaciones informativas o comerciales</h3>
          <p>Enviar avisos del servicio o comunicaciones comerciales sobre servicios similares. Base legal: interes legitimo cuando existe relacion previa o consentimiento expreso. Puedes oponerte en cualquier momento escribiendo a {OWNER.email}.</p>
        </section>

        <section>
          <h2>4. Plazos de conservacion</h2>
          <ul>
            <li>Datos del servicio: mientras dure la gestion y, tras ello, bloqueados durante hasta 6 anos para responsabilidades legales.</li>
            <li>Facturacion y contabilidad: 4 a 6 anos segun norma fiscal.</li>
            <li>Comunicaciones comerciales: hasta que retires el consentimiento u/oposicion.</li>
          </ul>
          <p>Finalizados los plazos, los datos se eliminan de forma segura o se anonimizan.</p>
        </section>

        <section>
          <h2>5. Destinatarios y encargados</h2>
          <p>Los datos podran comunicarse a:</p>
          <ul>
            <li>Administraciones publicas (Seguridad Social, Agencia Tributaria) cuando sea necesario.</li>
            <li>Pasarelas de pago como PayPal, que actuan como responsables respecto a los datos que recogen.</li>
            <li>Proveedores tecnologicos (hosting en Vercel, base de datos en Supabase, correo, etc.) como encargados del tratamiento con contratos adecuados.</li>
          </ul>
        </section>

        <section>
          <h2>6. Transferencias internacionales</h2>
          <p>Si un proveedor esta fuera del EEE solo se transferiran datos con garantias adecuadas (decision de adecuacion o clausulas contractuales tipo). Puedes solicitar detalle adicional escribiendo a {OWNER.email}.</p>
        </section>

        <section>
          <h2>7. Derechos de las personas usuarias</h2>
          <p>Puedes ejercer acceso, rectificacion, supresion, oposicion, limitacion, portabilidad y retiro del consentimiento enviando una solicitud con copia de tu documento de identidad a {OWNER.email}. Tambien puedes reclamar ante la Agencia Espanola de Proteccion de Datos (www.aepd.es).</p>
        </section>

        <section>
          <h2>8. Seguridad</h2>
          <p>Se aplican medidas tecnicas y organizativas como HTTPS, control de accesos y revisiones periodicas. Ningun sistema es infalible, por lo que se recomienda cautela al utilizar el sitio.</p>
        </section>

        <section>
          <h2>9. Veracidad y actualizacion de datos</h2>
          <p>Eres responsable de que los datos aportados sean veraces, exactos y actualizados. Debes comunicar cualquier cambio y no facilitar datos de terceros sin autorizacion.</p>
        </section>

        <section>
          <h2>10. Datos de terceros</h2>
          <p>Si tramitas en nombre de otra persona, declaras contar con su autorizacion y haberla informado de esta Politica. Respondes de los danos derivados del incumplimiento de esta obligacion.</p>
        </section>

        <section>
          <h2>11. Cookies y tecnologias similares</h2>
          <p>
            Utilizamos cookies tecnicas y, si lo aceptas, cookies de preferencias o analiticas. Encontraras toda la informacion y opciones de configuracion en la{" "}
            <a href="https://tramitesyaweb.com/politica-cookies" className="text-indigo-600">
              Politica de Cookies
            </a>
            .
          </p>
        </section>

        <section>
          <h2>12. Menores de edad</h2>
          <p>La web no esta dirigida a menores de 18 anos. Si detectamos datos de menores sin autorizacion los eliminaremos a la mayor brevedad.</p>
        </section>

        <section>
          <h2>13. Cambios en la politica</h2>
          <p>Podemos actualizar esta Politica para adaptarla a cambios legales o de servicio. Cuando el cambio sea relevante intentaremos avisarte por medios razonables. Consulta periodicamente esta pagina.</p>
        </section>

        <section>
          <h2>14. Contacto</h2>
          <p>Para cualquier consulta sobre privacidad escribe a {OWNER.email}. Atenderemos tu solicitud en el menor plazo posible.</p>
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
