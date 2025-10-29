import { useState } from "react";

export default function SolicitudForm({ tipoTramite }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/xzzjojvp", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("sent");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">Solicitar certificado</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input type="hidden" name="tipo_tramite" value={tipoTramite} />
        <input type="hidden" name="origen" value={window.location.href} />

        <label className="text-sm">
          Nombre y apellidos
          <input
            name="nombre"
            required
            placeholder="Tu nombre"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm">
          DNI/NIE
          <input
            name="dni"
            required
            placeholder="12345678Z"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm md:col-span-2">
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="tu@email.com"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm md:col-span-2">
          Telefono (opcional)
          <input
            name="telefono"
            placeholder="Tu movil"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm md:col-span-2">
          Mensaje (opcional)
          <textarea
            name="mensaje"
            rows={3}
            placeholder="Cuentanos el contexto de tu solicitud"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="md:col-span-2 flex items-start gap-3 rounded-lg bg-white p-3 text-sm text-slate-700">
          <input
            type="checkbox"
            name="acepta_politica_privacidad"
            value="true"
            required
            className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
          />
          <span>
            <span className="font-semibold">
              He leido y acepto la Politica de Privacidad y autorizo el tratamiento de mis datos
              personales para la tramitacion del informe solicitado.
            </span>
            <span className="mt-2 block text-xs text-slate-600">
              Consulta la{" "}
              <a
                className="underline text-blue-700"
                href="/politica-privacidad"
                target="_blank"
                rel="noreferrer"
              >
                Politica de Privacidad
              </a>
              : explicamos que datos recogemos (incluida la imagen del DNI), para que los utilizamos
              (gestion del tramite), con quien los compartimos (Seguridad Social u otros organismos
              competentes), como los protegemos y durante cuanto tiempo los conservamos. Puedes ejercer
              tus derechos de acceso, supresion y demas escribiendo a{" "}
              <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
                tramitesyaweb@gmail.com
              </a>
              .
            </span>
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 text-white shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-70"
        >
          {status === "sending" ? "Enviando..." : "Enviar solicitud"}
        </button>

        {status === "sent" && (
          <p className="md:col-span-2 text-green-700">Enviado. Te contactaremos en breve.</p>
        )}
        {status === "error" && (
          <p className="md:col-span-2 text-red-600">
            Hubo un problema al enviar el formulario. Intentalo de nuevo.
          </p>
        )}
      </form>
    </div>
  );
}
