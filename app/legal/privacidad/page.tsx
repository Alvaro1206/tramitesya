import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | TramitesYA",
  description:
    "Información sobre cómo TramitesYA trata los datos necesarios para gestionar la Tarjeta Sanitaria Europea sin certificado.",
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  const updatedAt = "11/11/2025";
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
        <header>
          <h1>Política de Privacidad</h1>
          <p className="mt-2 text-sm text-slate-600">
            <strong>Última actualización:</strong> {updatedAt}
          </p>
          <p className="text-sm text-slate-600">
            <strong>Titular:</strong> TramitesYA (Tramitesyaweb.com) · <strong>Dominio:</strong> https://tramitesyaweb.com ·{" "}
            <strong>Contacto:</strong> <a href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>
          </p>
          <p>
            Esta política explica cómo tratamos los datos necesarios para ofrecer el servicio de gestión de la Tarjeta Sanitaria Europea (TSE) sin
            certificado digital.
          </p>
        </header>

        <section>
          <h2>1. Datos tratados</h2>
          <h3>Datos que nos facilitas</h3>
          <ul>
            <li>Identificación: nombre, apellidos, tipo y número de documento (DNI/NIE/Pasaporte) y, opcionalmente, NAF.</li>
            <li>Domicilio de envío y, si lo indicas, dirección alternativa.</li>
            <li>Contacto: teléfono móvil español y correo electrónico.</li>
            <li>Mandato/autorización y consentimientos marcados en el formulario.</li>
            <li>Pago: solo recibimos de PayPal el ID y estado del pedido.</li>
          </ul>
          <h3>Datos obtenidos automáticamente</h3>
          <ul>
            <li>Datos técnicos (IP, navegador, idioma y logs de seguridad).</li>
            <li>Cookies estrictamente necesarias; las opcionales requieren tu consentimiento. Consulta la <a href="/legal/cookies">Política de Cookies</a>.</li>
          </ul>
        </section>

        <section>
          <h2>2. Finalidades y bases legales</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-2 text-left">Finalidad</th>
                  <th className="px-4 py-2 text-left">Base legal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">
                    Gestionar tu solicitud TSE: validar datos, presentar ante la Seguridad Social y enviarte la referencia.
                  </td>
                  <td className="px-4 py-3">Ejecución del contrato (art. 6.1.b RGPD) y consentimiento para la representación.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Atención al cliente, soporte y comunicaciones sobre tu expediente.</td>
                  <td className="px-4 py-3">Ejecución del contrato / interés legítimo (art. 6.1.f).</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Cobro, facturación y prevención de fraude.</td>
                  <td className="px-4 py-3">Ejecución del contrato / obligación legal / interés legítimo.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Analítica esencial y marketing propio opcional.</td>
                  <td className="px-4 py-3">Interés legítimo o consentimiento (art. 6.1.a).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">No adoptamos decisiones automatizadas con efectos jurídicos.</p>
        </section>

        <section>
          <h2>3. Destinatarios</h2>
          <ul>
            <li>Seguridad Social: para presentar la TSE con tu autorización.</li>
            <li>PayPal (Europe) S.à r.l.: responsable independiente del cobro.</li>
            <li>Vercel Inc. (hosting/serverless) y Neon Tech (PostgreSQL, UE/Frankfurt) como encargados.</li>
            <li>Proveedores de correo/soporte y autoridades públicas cuando la ley lo requiera.</li>
          </ul>
          <p>Formalizamos acuerdos de encargo (DPA) y aplicamos Cláusulas Contractuales Tipo cuando proceden transferencias internacionales.</p>
        </section>

        <section>
          <h2>4. Plazos de conservación</h2>
          <ul>
            <li>Expedientes TSE: hasta 12 meses desde el cierre.</li>
            <li>Mandatos y consentimientos: 3 años.</li>
            <li>Facturación/contabilidad: 6 años (obligación legal).</li>
            <li>Logs técnicos: hasta 12 meses.</li>
            <li>Marketing opcional: hasta que retires el consentimiento.</li>
          </ul>
        </section>

        <section>
          <h2>5. Seguridad</h2>
          <ul>
            <li>Cifrado TLS en tránsito y cifrado en reposo.</li>
            <li>Cifrado AES-256-GCM para DNI/NIE y NAF.</li>
            <li>Control de accesos, 2FA, registros de actividad y entornos segregados.</li>
            <li>Backups y planes de contingencia.</li>
          </ul>
        </section>

        <section>
          <h2>6. Derechos</h2>
          <p>
            Puedes ejercer acceso, rectificación, supresión, oposición, limitación, portabilidad y retirada de consentimientos escribiendo a{" "}
            <a href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>. Respondemos en un mes (ampliable a dos).
          </p>
          <p>
            Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (
            <a href="https://www.aepd.es" rel="noreferrer" target="_blank">
              www.aepd.es
            </a>
            ).
          </p>
        </section>

        <section>
          <h2>7. Obligaciones del usuario</h2>
          <p>Debes proporcionar datos veraces y actualizados. Si aportas datos de terceros, garantizas legitimación y que los has informado.</p>
          <p>El servicio se dirige a mayores de 18 años.</p>
        </section>

        <section>
          <h2>8. Cookies</h2>
          <p>
            Usamos cookies técnicas imprescindibles. Las cookies de analítica o marketing solo se instalan si aceptas desde el banner de cookies. Puedes
            modificar tu elección en cualquier momento.
          </p>
        </section>

        <section>
          <h2>9. Cambios en la política</h2>
          <p>Publicaremos cualquier actualización en esta página indicando la fecha de vigencia y, si procede, te avisaremos por medios razonables.</p>
        </section>

        <section>
          <h2>10. Contacto</h2>
          <p>
            Para dudas de privacidad o ejercicio de derechos, escribe a <a href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
