import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | TramitesYA",
  description:
    "Condiciones de uso del servicio TramitesYA para solicitar la Tarjeta Sanitaria Europea (TSE) sin certificado. Información contractual y responsabilidades.",
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  const updatedAt = "11/11/2025";
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
        <header>
          <h1>Términos y Condiciones</h1>
          <p className="mt-2 text-sm text-slate-600">
            <strong>Última actualización:</strong> {updatedAt}
          </p>
          <p className="text-sm text-slate-600">
            TramitesYA ofrece un servicio privado de gestión de la Tarjeta Sanitaria Europea (TSE) sin certificado digital. Al utilizar esta web
            aceptas estas condiciones.
          </p>
        </header>

        <section>
          <h2>1. Servicio</h2>
          <p>
            Consiste en recopilar tus datos mediante el formulario web, validar la información mínima y presentar la solicitud de la TSE en tu
            nombre ante la Seguridad Social. La emisión y envío físico de la tarjeta dependen exclusivamente de la Administración.
          </p>
        </section>

        <section>
          <h2>2. Precio y pagos</h2>
          <ul>
            <li>Coste único: 9,90 EUR (IVA incluido) por expediente.</li>
            <li>El pago se procesa a través de plataformas de terceros (p. ej., PayPal). No almacenamos datos de tu tarjeta.</li>
            <li>Si no podemos presentar la solicitud, reembolsamos el importe íntegro.</li>
          </ul>
        </section>

        <section>
          <h2>3. Obligaciones del usuario</h2>
          <ul>
            <li>Proporcionar datos veraces y actualizados.</li>
            <li>Ser mayor de 18 años y contar con capacidad legal para contratar.</li>
            <li>Informar a terceras personas en caso de facilitarnos sus datos (p. ej., dirección alternativa).</li>
          </ul>
        </section>

        <section>
          <h2>4. Plazos</h2>
          <p>
            Presentamos tu solicitud en un máximo de 24 horas laborables desde que validamos la información. Los plazos de entrega de la tarjeta dependen
            de la Seguridad Social y pueden variar entre 7 y 15 días naturales.
          </p>
        </section>

        <section>
          <h2>5. Cancelaciones y reembolsos</h2>
          <p>
            Puedes cancelar sin coste antes de la presentación. Si la solicitud ya se ha presentado no será posible el reembolso salvo causa imputable a TramitesYA
            o negativa de la Seguridad Social por motivos ajenos a ti.
          </p>
        </section>

        <section>
          <h2>6. Limitación de responsabilidad</h2>
          <p>
            TramitesYA no responde de retrasos o incidencias atribuibles a la Seguridad Social ni a proveedores externos. Nos comprometemos a gestionar tu expediente
            con la diligencia profesional debida y a comunicar cualquier incidencia.
          </p>
        </section>

        <section>
          <h2>7. Soporte</h2>
          <p>
            Atendemos consultas a través de <a href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>. Intentamos responder en un máximo de 24 h laborables.
          </p>
        </section>

        <section>
          <h2>8. Legislación aplicable</h2>
          <p>
            Estas condiciones se rigen por la legislación española. Para resolver conflictos, las partes se someten a los juzgados y tribunales de Madrid capital,
            salvo que la normativa de consumo establezca otro fuero imperativo.
          </p>
        </section>

        <section>
          <h2>9. Contacto</h2>
          <p>
            Para cualquier consulta contractual escríbenos a <a href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
