import { useState } from "react";
import { supabase } from "../supabaseClient.js";

const STRIPE_PAYMENT_URL = "https://www.paypal.com/ncp/payment/SNTNGN3ADDY44";
const COLUMN_ALIASES = {
  nombreCompleto: ["nombre_solicitante", "nombre", "nombre_completo", "nombre_y_apellidos"],
  dni: ["dni", "dni_nie", "documento_identidad"],
  email: ["email_solicitante", "email", "correo", "correo_electronico"],
  matricula: ["matricula", "matricula_vehiculo", "numero_matricula"],
};

export function InformeDGTForm() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [aceptaPolitica, setAceptaPolitica] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!nombreCompleto || !dni || !email || !matricula) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!aceptaPolitica) {
      setError("Debes aceptar la Politica de Privacidad para continuar.");
      return;
    }

    setIsSubmitting(true);

    const aliasIndices = {};
    const skippedFields = new Set();
    const buildPayload = () => {
      const baseFields = {
        nombreCompleto,
        dni,
        email,
        matricula,
      };

      return Object.entries(baseFields).reduce((payload, [fieldKey, fieldValue]) => {
        if (skippedFields.has(fieldKey)) {
          return payload;
        }
        const aliases = COLUMN_ALIASES[fieldKey];
        if (!aliases || !aliases.length) {
          skippedFields.add(fieldKey);
          return payload;
        }
        const aliasIndex = aliasIndices[fieldKey] ?? 0;
        const columnName = aliases[aliasIndex];
        if (!columnName) {
          skippedFields.add(fieldKey);
          return payload;
        }
        payload[columnName] = fieldValue;
        return payload;
      }, {});
    };

    const findFieldKeyForColumn = (columnName) => {
      return Object.entries(COLUMN_ALIASES).find(([, aliases]) => aliases.includes(columnName))?.[0];
    };

    const maxAttempts =
      Object.values(COLUMN_ALIASES).reduce((total, aliases) => total + aliases.length, 0) + 1;
    let attempt = 0;
    let lastError = null;

    try {
      while (attempt < maxAttempts) {
        const payload = buildPayload();
        if (!Object.keys(payload).length) {
          break;
        }

        const { error: supabaseError } = await supabase
          .from("solicitudes_informe_dgt")
          .insert(payload);

        if (!supabaseError) {
          window.location.assign(STRIPE_PAYMENT_URL);
          return;
        }

        lastError = supabaseError;

        const missingColumnMatch = supabaseError.message.match(
          /Could not find the '([^']+)' column/
        );
        if (!missingColumnMatch) {
          break;
        }

        const missingColumn = missingColumnMatch[1];
        const fieldKey = findFieldKeyForColumn(missingColumn);
        if (!fieldKey) {
          break;
        }

        const nextIndex = (aliasIndices[fieldKey] ?? 0) + 1;
        if (nextIndex >= COLUMN_ALIASES[fieldKey].length) {
          skippedFields.add(fieldKey);
          delete aliasIndices[fieldKey];
          console.warn(
            `Columna ${missingColumn} inexistente para informe DGT. Omitiendo el campo ${fieldKey}.`
          );
        } else {
          aliasIndices[fieldKey] = nextIndex;
          console.warn(
            `Columna ${missingColumn} inexistente. Probando con ${COLUMN_ALIASES[fieldKey][nextIndex]}.`
          );
        }

        attempt += 1;
      }

      if (lastError) {
        console.error("Error al insertar solicitud de informe DGT:", lastError.message);
        setError("No pudimos enviar la solicitud. Intentalo de nuevo en unos minutos.");
        return;
      }
    } catch (submissionError) {
      console.error("Error inesperado al enviar la solicitud de informe DGT:", submissionError);
      setError("Ocurrio un error inesperado. Intentalo de nuevo mas tarde.");
      return;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md rounded bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">Solicitud Informe DGT</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Nombre completo:</label>
        <input
          type="text"
          className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm"
          value={nombreCompleto}
          onChange={(event) => setNombreCompleto(event.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">DNI:</label>
        <input
          type="text"
          className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm"
          value={dni}
          onChange={(event) => setDni(event.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Correo electronico:</label>
        <input
          type="email"
          className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Matricula:</label>
        <input
          type="text"
          className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm"
          value={matricula}
          onChange={(event) => setMatricula(event.target.value)}
        />
      </div>

      <label className="mb-2 flex items-start gap-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
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
            escribir a{" "}
            <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>{" "}
            para ejercer tus derechos de acceso, supresion y demas.
          </span>
        </span>
      </label>

      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isSubmitting ? "Enviando..." : "Enviar solicitud y pagar (12,99 EUR)"}
      </button>
    </form>
  );
}

export default InformeDGTForm;
