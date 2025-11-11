import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | TramitesYA",
  description:
    "Política de Privacidad de TramitesYA para la gestión de la Tarjeta Sanitaria Europea (TSE) sin certificado. Información RGPD y derechos.",
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
            <strong>Titular:</strong> TramitesYA (Tramitesyaweb.com)
            <br />
            <strong>Dominio:</strong> https://tramitesyaweb.com
            <br />
            <strong>Contacto / Ejercicio de derechos:</strong> <a href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>
          </p>
          <p>Esta política describe cómo tratamos los datos necesarios para ofrecer el servicio de gestión de la Tarjeta Sanitaria Europea (TSE) sin certificado.</p>
        </header>

        <section id="datos">
          <h2>1. ¿Qué datos tratamos?</h2>
          <h3>Datos que nos facilitas</h3>
          <ul>
            <li>Identificación: nombre, apellidos, tipo y número de documento (DNI/NIE/Pasaporte) y, opcionalmente, NAF.</li>
            <li>Domicilio de envío y, si procede, dirección alternativa.</li>
            <li>Contacto: teléfono móvil español y correo electrónico.</li>
            <li>Mandato/autorización y consentimientos marcados en el formulario.</li>
            <li>Datos de pago: solo recibimos de PayPal el identificador y estado del pedido.</li>
          </ul>
          <h3>Datos obtenidos automáticamente</h3>
          <ul>
            <li>Datos técnicos (IP, navegador, idioma, logs de seguridad).</li>
            <li>Cookies estrictamente necesarias; las opcionales requieren tu consentimiento. Consulta la <a href="/legal/cookies">Política de Cookies</a>.</li>
          </ul>
        </section>

        <section id="finalidades">
          <h2>2. Finalidades y bases legitimadoras</h2>
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
                  <td className="px-4 py-3">Gestionar tu solicitud TSE, presentar en tu nombre y comunicarte la referencia.</td>
                  <td className="px-4 py-3">Ejecución del contrato (art. 6.1.b RGPD) y consentimiento para la representación.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Atención al cliente, soporte y postventa.</td>
                  <td className="px-4 py-3">Ejecución del contrato / interés legítimo.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Cobro y facturación, prevención de fraude y seguridad.</td>
                  <td className="px-4 py-3">Ejecución del contrato / obligación legal / interés legítimo.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Comunicaciones sobre tu expediente (email/SMS/WhatsApp).</td>
                  <td className="px-4 py-3">Ejecución del contrato / interés legítimo.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Analítica esencial y marketing propio opcional.</td>
                  <td className="px-4 py-3">Interés legítimo o consentimiento (art. 6.1.a).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">No tomamos decisiones automatizadas con efectos jurídicos.</p>
        </section>

        <section id="destinatarios">
          <h2>3. Destinatarios y encargados</h2>
          <ul>
            <li>Seguridad Social (presentación de la TSE con tu autorización).</li>
            <li>PayPal (Europe) S.à r.l. – responsable independiente del cobro.</li>
            <li>Vercel Inc. (hosting y funciones serverless) y Neon Tech (PostgreSQL, UE/Frankfurt) como encargados.</li>
            <li>Proveedores de correo/soporte que utilicemos y obligaciones legales (AAPP, jueces, FCSE).
            </li>
          </ul>
          <p>Formalizamos acuerdos de encargo y aplicamos Cláusulas Contractuales Tipo cuando existen transferencias internacionales.</p>
        </section>

        <section id="conservacion">
          <h2>4. Plazos de conservación</h2>
          <ul>
            <li>Expedientes TSE y soporte: hasta 12 meses desde el cierre.</li>
            <li>Mandatos y consentimientos: 3 años como prueba.</li>
            <li>Facturación y contabilidad: 6 años (obligación legal española).</li>
            <li>Logs de seguridad: hasta 12 meses.</li>
            <li>Marketing opcional: hasta que retires tu consentimiento.</li>
          </ul>
        </section>

        <section id="seguridad">
          <h2>5. Medidas de seguridad</h2>
          <ul>
            <li>Cifrado TLS y cifrado en reposo.</li>
            <li>Cifrado de DNI/NIE y NAF mediante AES-256-GCM.</li>
            <li>Control de accesos, 2FA, registros de actividad y despliegues segregados.</li>
            <li>Backups y planes de contingencia.</li>
          </ul>
        </section>

        <section id="derechos">
          <h2>6. Derechos</h2>
          <p>Puedes ejercer acceso, rectificación, supresión, oposición, limitación, portabilidad y retirada de consentimientos escribiendo a <a href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>. Respondemos en un mes (ampliable a dos).</p>
          <p>Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
        </section>

        <section id="obligaciones">
          <h2>7. Obligaciones del usuario</h2>
          <p>Debes proporcionar datos veraces y actualizados. Si facilitas datos de terceros (p. ej., dirección alternativa), garantizas legitimación y que has informado a dicha persona. El servicio se dirige a mayores de 18 años.</p>
        </section>

        <section id="cookies">
          <h2>8. Cookies y analítica</h2>
          <p>Utilizamos cookies técnicas imprescindibles. Las cookies de analítica o marketing solo se instalan con tu consentimiento y puedes gestionarlas desde el banner de cookies.</p>
        </section>

        <section id="cambios">
          <h2>9. Cambios en la política</h2>
          <p>Publicaremos cualquier actualización en esta página indicando la fecha vigente y te avisaremos si los cambios son significativos.</p>
        </section>

        <section id="contacto">
          <h2>10. Contacto</h2>
          <p>Para dudas de privacidad o ejercicio de derechos, escribe a <a href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>.</p>
        </section>
      </article>
    </main>
  );
}
