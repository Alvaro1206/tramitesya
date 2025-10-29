import { useState } from "react";
import { supabase } from "../supabaseClient.js";

const STRIPE_PAYMENT_URL = "https://www.paypal.com/ncp/payment/M2SJZ8KMCD2US";
const DEFAULT_FILE_LABEL = "Ningun archivo seleccionado";
const FILE_NAME_COLUMN = "archivo_nombre";

export function VidaLaboralForm() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [archivoNombre, setArchivoNombre] = useState(DEFAULT_FILE_LABEL);
  const [aceptaPolitica, setAceptaPolitica] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!nombreCompleto || !dni || !email) {
      setError("Completa nombre, DNI/NIE y email antes de continuar.");
      return;
    }

    if (!aceptaPolitica) {
      setError("Debes aceptar la Politica de Privacidad para continuar.");
      return;
    }

    setIsSubmitting(true);

    try {
      const solicitudData = {
        nombre: nombreCompleto,
        dni,
        email,
      };

      if (archivoNombre !== DEFAULT_FILE_LABEL) {
        solicitudData[FILE_NAME_COLUMN] = archivoNombre;
      }

      let { error: supabaseError } = await supabase
        .from("solicitudes_vida_laboral")
        .insert(solicitudData);

      if (supabaseError && solicitudData[FILE_NAME_COLUMN]) {
        console.warn(
          `El campo ${FILE_NAME_COLUMN} no existe en Supabase. Reintentando insercion sin nombre de archivo.`
        );
        delete solicitudData[FILE_NAME_COLUMN];
        ({ error: supabaseError } = await supabase
          .from("solicitudes_vida_laboral")
          .insert(solicitudData));
      }

      if (supabaseError) {
        console.error("Error al insertar solicitud de vida laboral:", supabaseError.message);
        setError("No pudimos enviar la solicitud. Intentalo de nuevo en unos minutos.");
        return;
      }

      window.location.assign(STRIPE_PAYMENT_URL);
    } catch (submissionError) {
      console.error("Error inesperado al enviar la solicitud de vida laboral:", submissionError);
      setError("Ocurrio un error inesperado. Intentalo de nuevo mas tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Nombre y apellidos
          <input
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Juan Perez"
            value={nombreCompleto}
            onChange={(event) => setNombreCompleto(event.target.value)}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          DNI/NIE
          <input
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="12345678Z"
            value={dni}
            onChange={(event) => setDni(event.target.value)}
          />
        </label>

        <label className="text-sm font-medium text-slate-700 md:col-span-2">
          Email
          <input
            type="email"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="tu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className="text-sm font-medium text-slate-700 md:col-span-2">
          Adjuntar DNI/NIE (PDF o JPG)
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            onChange={(event) => {
              const file = event.target.files?.[0];
              setArchivoNombre(file ? file.name : DEFAULT_FILE_LABEL);
            }}
          />
          <span className="mt-1 block text-xs text-slate-500">{archivoNombre}</span>
        </label>
      </div>

      <label className="mt-4 flex items-start gap-3 rounded-lg bg-white p-3 text-sm text-slate-700">
        <input
          type="checkbox"
          name="acepta_politica_privacidad"
          value="true"
          required
          checked={aceptaPolitica}
          onChange={(event) => setAceptaPolitica(event.target.checked)}
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
            : detallamos que datos recogemos (incluida la imagen del DNI), para que los usamos
            (gestion del tramite), con quien los compartimos (Seguridad Social u otros organismos
            competentes), como los protegemos y durante cuanto tiempo los conservamos. Puedes
            ejercer tus derechos de acceso, supresion y demas escribiendo a{" "}
            <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>
            .
          </span>
        </span>
      </label>

      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isSubmitting ? "Enviando..." : "Enviar solicitud y pagar (9,99 EUR)"}
      </button>
    </form>
  );
}

export default VidaLaboralForm;
