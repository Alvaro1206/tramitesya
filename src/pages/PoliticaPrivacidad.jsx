import React from "react";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-bold">Politica de privacidad</h1>
          <p className="mt-2 text-sm text-blue-200">
            TramitesYA - Servicio privado de gestion y asistencia en tramites
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-10 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Responsable del tratamiento</h2>
          <p className="mt-3">
            Gestion Online TramitesYA es responsable de los datos
            personales facilitados a traves de este sitio web. Puedes contactar con nosotros enviando un correo a{" "}
            <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Datos que recopilamos</h2>
          <p className="mt-3">
            Recopilamos datos identificativos (nombre, DNI o NIE, email, telefono) y la informacion
            necesaria para tramitar tu solicitud, incluida la imagen escaneada del documento de
            identidad cuando la adjuntas, la direccion de la finca, la matricula del vehiculo u otros
            documentos de soporte. Tambien podemos registrar informacion tecnica basica para mejorar
            la experiencia de navegacion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Finalidad y base legal</h2>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              Gestionar tu solicitud de informe o nota simple (ejecucion de un contrato o
              medidas precontractuales).
            </li>
            <li>
              Atender consultas y prestar soporte (interes legitimo y consentimiento al enviar
              el formulario).
            </li>
            <li>
              Cumplir obligaciones legales de facturacion, contabilidad y prevencion de fraude.
            </li>
            <li>
              Enviar comunicaciones informativas cuando exista consentimiento expreso. Puedes
              revocarlo en cualquier momento.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Conservacion</h2>
          <p className="mt-3">
            Conservamos los datos de forma segura durante el tiempo imprescindible para completar el
            tramite y los plazos exigidos por la normativa fiscal o administrativa (habitualmente
            cinco anos). Los ficheros adjuntos, incluida la imagen del DNI, se eliminan una vez
            entregado el documento, salvo que la normativa requiera conservarlos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Destinatarios y encargados</h2>
          <p className="mt-3">
            Compartimos datos unicamente con proveedores necesarios para prestar el servicio:
            plataformas de almacenamiento seguro, sistemas de correo, pasarelas de pago y
            administraciones publicas implicadas en el tramite, incluida la Seguridad Social y otros
            organismos competentes cuando corresponde. Todos ellos actuan como encargados del
            tratamiento y garantizan medidas de seguridad adecuadas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. Derechos de las personas usuarias</h2>
          <p className="mt-3">
            Puedes ejercer tus derechos de acceso, rectificacion, supresion, limitacion y
            oposicion enviando un correo a{" "}
            <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>
            . Tambien puedes solicitar la portabilidad de tus datos o presentar una reclamacion
            ante la Agencia Espanola de Proteccion de Datos (
            <a className="underline text-blue-700" href="https://www.aepd.es">
              www.aepd.es
            </a>
            ) si consideras que no hemos atendido correctamente tu solicitud.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Seguridad</h2>
          <p className="mt-3">
            Implementamos controles tecnicos y organizativos para proteger la informacion: cifrado
            en reposo y en transito, accesos restringidos, registro de actividad y evaluacion
            periodica de proveedores. No obstante, ninguna transmision por internet es
            completamente segura; te recomendamos no compartir datos innecesarios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">8. Actualizaciones</h2>
          <p className="mt-3">
            Podemos actualizar esta politica para reflejar cambios legales o mejoras del servicio.
            Publicaremos la nueva version en esta pagina e indicaremos la fecha de ultima
            actualizacion.
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
