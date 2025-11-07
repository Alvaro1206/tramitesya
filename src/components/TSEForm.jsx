import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const DOC_TYPES = ["DNI", "NIE", "Pasaporte"];
const VIA_TYPES = ["Calle", "Avenida", "Plaza", "Camino", "Carretera", "Urbanización", "Paseo", "Travesía"];
const PROVINCES = [
  "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria",
  "Castellón", "Ciudad Real", "Córdoba", "Cuenca", "Girona", "Granada", "Guadalajara", "Gipuzkoa", "Huelva", "Huesca", "Illes Balears",
  "Jaén", "La Coruña", "La Rioja", "Las Palmas", "León", "Lleida", "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Ourense", "Palencia",
  "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid",
  "Bizkaia", "Zamora", "Zaragoza", "Ceuta", "Melilla",
];
const PARENTESCOS = ["Hijo/a", "Cónyuge", "Pareja registrada", "Otro beneficiario"];

const BASE_PRICE = 9.9;
const BENEFICIARY_PRICE = 5;

const DNI_REGEX = /^\d{8}[A-HJ-NP-TV-Z]$/i;
const NIE_REGEX = /^[XYZ]\d{7}[A-HJ-NP-TV-Z]$/i;
const PASSPORT_REGEX = /^[A-Z0-9]{5,15}$/i;
const NAF_REGEX = /^\d{12}$/;
const POSTAL_REGEX = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
const PHONE_REGEX = /^(\+34|0034)?\s?[6-9]\d{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialBeneficiario = {
  nombre: "",
  documento: "",
  fechaNacimiento: "",
  parentesco: "Hijo/a",
};

const initialFormState = {
  nombre: "",
  primerApellido: "",
  segundoApellido: "",
  fechaNacimiento: "",
  tipoDocumento: "DNI",
  numeroDocumento: "",
  numeroSeguridadSocial: "",
  tipoVia: "",
  via: "",
  numero: "",
  piso: "",
  codigoPostal: "",
  municipio: "",
  provincia: "",
  declaroDomicilio: false,
  direccionAlternativa: false,
  telefono: "",
  email: "",
  beneficiarios: [],
  autorizacion: false,
  aceptaPrivacidad: false,
  firma: "",
};

export default function TSEForm() {
  const [form, setForm] = React.useState(initialFormState);
  const [errors, setErrors] = React.useState({});
  const [formValidated, setFormValidated] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();

  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID ?? "";

  const total = React.useMemo(() => BASE_PRICE + form.beneficiarios.length * BENEFICIARY_PRICE, [form.beneficiarios.length]);

  const handleFieldChange = (field) => (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm((prev) => ({ ...prev, [field]: field === "numeroDocumento" ? value.toUpperCase() : value }));
    setFormValidated(false);
  };

  const handleBeneficiarioChange = (index, field, value) => {
    setForm((prev) => {
      const updated = prev.beneficiarios.map((benef, idx) => (idx === index ? { ...benef, [field]: field === "documento" ? value.toUpperCase() : value } : benef));
      return { ...prev, beneficiarios: updated };
    });
    setFormValidated(false);
  };

  const addBeneficiario = () => {
    setForm((prev) => ({ ...prev, beneficiarios: [...prev.beneficiarios, { ...initialBeneficiario }] }));
    setFormValidated(false);
  };

  const removeBeneficiario = (index) => {
    setForm((prev) => ({ ...prev, beneficiarios: prev.beneficiarios.filter((_, idx) => idx !== index) }));
    setFormValidated(false);
  };

  const handleValidate = () => {
    const validation = validateForm(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setFormValidated(true);
      setStatusMessage("Datos validados. Ya puedes pagar con PayPal.");
      trackEvent("tse_preview_ok", { total: total.toFixed(2), beneficiarios: form.beneficiarios.length });
    } else {
      setFormValidated(false);
      setStatusMessage("Revisa los campos marcados antes de continuar.");
    }
  };

  const handleApprove = async (data, actions) => {
    setIsSubmitting(true);
    setStatusMessage("Procesando pago...");
    try {
      const capture = await actions.order.capture();
      const captureId = capture?.purchase_units?.[0]?.payments?.captures?.[0]?.id ?? capture?.id;
      trackEvent("tse_paypal_approved", { orderId: data.orderID, total: total.toFixed(2) });

      const response = await fetch("/api/tse/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: data.orderID,
          captureId,
          amount: Number(total.toFixed(2)),
          form,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo guardar la solicitud");
      }

      const payload = await response.json();
      trackEvent("tse_submitted", { orderId: payload.orderId ?? data.orderID });
      navigate(`/gracias?order=${encodeURIComponent(payload.orderId ?? data.orderID)}`);
    } catch (error) {
      console.error(error);
      setStatusMessage("No hemos podido registrar el pago. Inténtalo de nuevo o escríbenos a tramitesyaweb@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const paypalOptions = React.useMemo(
    () => ({
      "client-id": paypalClientId || "test",
      currency: "EUR",
    }),
    [paypalClientId]
  );

  return (
    <PayPalScriptProvider options={paypalOptions} deferLoading={!paypalClientId}>
      <form className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" onSubmit={(e) => e.preventDefault()}>
        <Section title="Titular">
          <div className="grid gap-4 md:grid-cols-2">
            <InputField label="Nombre" id="nombre" value={form.nombre} onChange={handleFieldChange("nombre")} error={errors.nombre} required />
            <InputField label="1º apellido" id="primerApellido" value={form.primerApellido} onChange={handleFieldChange("primerApellido")} error={errors.primerApellido} required />
            <InputField label="2º apellido (opcional)" id="segundoApellido" value={form.segundoApellido} onChange={handleFieldChange("segundoApellido")} />
            <InputField label="Fecha de nacimiento" type="date" id="fechaNacimiento" value={form.fechaNacimiento} onChange={handleFieldChange("fechaNacimiento")} error={errors.fechaNacimiento} required />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <FieldWrapper label="Tipo documento" htmlFor="tipoDocumento" error={errors.tipoDocumento}>
              <select id="tipoDocumento" value={form.tipoDocumento} onChange={handleFieldChange("tipoDocumento")} className="w-full rounded-2xl border border-slate-300 px-3 py-2">
                {DOC_TYPES.map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
            </FieldWrapper>
            <InputField label="Nº documento" id="numeroDocumento" value={form.numeroDocumento} onChange={handleFieldChange("numeroDocumento")} error={errors.numeroDocumento} required />
            <InputField label="Nº Seguridad Social (NAF) (opcional)" id="numeroSeguridadSocial" value={form.numeroSeguridadSocial} onChange={handleFieldChange("numeroSeguridadSocial")} error={errors.numeroSeguridadSocial} placeholder="12 dígitos" />
          </div>
        </Section>

        <Section title="Domicilio de envío (España)">
          <div className="grid gap-4 md:grid-cols-3">
            <FieldWrapper label="Tipo de vía" htmlFor="tipoVia" error={errors.tipoVia}>
              <select id="tipoVia" value={form.tipoVia} onChange={handleFieldChange("tipoVia")} className="w-full rounded-2xl border border-slate-300 px-3 py-2">
                <option value="">Selecciona</option>
                {VIA_TYPES.map((via) => (
                  <option key={via} value={via}>
                    {via}
                  </option>
                ))}
              </select>
            </FieldWrapper>
            <InputField label="Vía" id="via" value={form.via} onChange={handleFieldChange("via")} error={errors.via} required />
            <InputField label="Nº" id="numero" value={form.numero} onChange={handleFieldChange("numero")} error={errors.numero} required />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <InputField label="Piso / puerta (opcional)" id="piso" value={form.piso} onChange={handleFieldChange("piso")} />
            <InputField label="Código postal" id="codigoPostal" value={form.codigoPostal} onChange={handleFieldChange("codigoPostal")} error={errors.codigoPostal} required />
            <InputField label="Municipio" id="municipio" value={form.municipio} onChange={handleFieldChange("municipio")} error={errors.municipio} required />
          </div>
          <FieldWrapper label="Provincia" htmlFor="provincia" error={errors.provincia}>
            <select id="provincia" value={form.provincia} onChange={handleFieldChange("provincia")} className="w-full rounded-2xl border border-slate-300 px-3 py-2">
              <option value="">Selecciona provincia</option>
              {PROVINCES.map((provincia) => (
                <option key={provincia} value={provincia}>
                  {provincia}
                </option>
              ))}
            </select>
          </FieldWrapper>
          <div className="space-y-3">
            <CheckboxField id="declaroDomicilio" checked={form.declaroDomicilio} onChange={handleFieldChange("declaroDomicilio")} label="Declaro que este domicilio coincide con el registrado en la Seguridad Social (requerido para el canal sin certificado)." error={errors.declaroDomicilio} required />
            <CheckboxField id="direccionAlternativa" checked={form.direccionAlternativa} onChange={handleFieldChange("direccionAlternativa")} label="Quiero recibirla en otra dirección en España (requiere validación por SMS al móvil registrado)." />
          </div>
        </Section>

        <Section title="Contacto">
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Teléfono España"
              id="telefono"
              type="tel"
              value={form.telefono}
              onChange={handleFieldChange("telefono")}
              error={errors.telefono}
              placeholder="Ej. +34 612345678"
              required
            />
            <InputField label="Email" type="email" id="email" value={form.email} onChange={handleFieldChange("email")} error={errors.email} required />
          </div>
        </Section>

        <Section title="Beneficiarios (opcional)">
          <p className="text-sm text-slate-500">Añade beneficiarios que dependen del titular. Cada uno suma 5,00 € al total.</p>
          {form.beneficiarios.map((beneficiario, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Beneficiario #{index + 1}</p>
                <button type="button" onClick={() => removeBeneficiario(index)} className="text-sm text-red-600">
                  Eliminar
                </button>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <InputField label="Nombre y apellidos" id={`benef-nombre-${index}`} value={beneficiario.nombre} onChange={(e) => handleBeneficiarioChange(index, "nombre", e.target.value)} error={errors[`beneficiarios.${index}.nombre`]} required />
                <FieldWrapper label="Parentesco" htmlFor={`benef-parentesco-${index}`} error={errors[`beneficiarios.${index}.parentesco`]}>
                  <select
                    id={`benef-parentesco-${index}`}
                    value={beneficiario.parentesco}
                    onChange={(e) => handleBeneficiarioChange(index, "parentesco", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-3 py-2"
                  >
                    {PARENTESCOS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FieldWrapper>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <InputField label="Documento (si tiene)" id={`benef-doc-${index}`} value={beneficiario.documento} onChange={(e) => handleBeneficiarioChange(index, "documento", e.target.value)} error={errors[`beneficiarios.${index}.documento`]} />
                <InputField label="Fecha de nacimiento" type="date" id={`benef-fecha-${index}`} value={beneficiario.fechaNacimiento} onChange={(e) => handleBeneficiarioChange(index, "fechaNacimiento", e.target.value)} error={errors[`beneficiarios.${index}.fechaNacimiento`]} />
              </div>
            </div>
          ))}
          <button type="button" onClick={addBeneficiario} className="text-sm font-semibold text-blue-700">
            + Añadir beneficiario
          </button>
        </Section>

        <Section title="Consentimientos">
          <CheckboxField id="autorizacion" checked={form.autorizacion} onChange={handleFieldChange("autorizacion")} label="Autorizo a TramitesYA a presentar esta solicitud/renovación de TSE en mi nombre (y de mis beneficiarios)." error={errors.autorizacion} required />
          <CheckboxField id="aceptaPrivacidad" checked={form.aceptaPrivacidad} onChange={handleFieldChange("aceptaPrivacidad")} label="Acepto la Política de Privacidad y Términos" error={errors.aceptaPrivacidad} required />
          <InputField label="Firma (nombre completo)" id="firma" value={form.firma} onChange={handleFieldChange("firma")} error={errors.firma} required />
        </Section>

        <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
          <p>
            Total: <span className="font-semibold">{total.toFixed(2)} €</span> (9,90 € titular + {form.beneficiarios.length} beneficiarios × 5,00 €)
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button type="button" onClick={handleValidate} className="inline-flex items-center justify-center rounded-2xl bg-blue-700 px-5 py-3 font-semibold text-white shadow-lg" disabled={isSubmitting}>
            Validar datos
          </button>
          <p className="text-sm text-slate-500" aria-live="polite">
            {statusMessage}
          </p>
        </div>

        {paypalClientId ? (
          formValidated ? (
            <div className="space-y-3">
              <PayPalButtons
                style={{ layout: "vertical" }}
                disabled={isSubmitting}
                createOrder={(_, actions) =>
                  actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: total.toFixed(2),
                          currency_code: "EUR",
                        },
                      },
                    ],
                  })
                }
                onApprove={handleApprove}
                onError={(error) => {
                  console.error(error);
                  setStatusMessage("No se pudo iniciar el pago. Revisa la conexión e inténtalo de nuevo.");
                }}
              />
              <p className="text-xs text-slate-500">El cobro se captura en el momento. Recibirás el justificante por email.</p>
            </div>
          ) : (
            <p className="text-sm text-slate-500">Valida el formulario para activar el pago.</p>
          )
        ) : (
          <p className="text-sm text-red-600">
            No se ha configurado el PAYPAL_CLIENT_ID. Añádelo como VITE_PAYPAL_CLIENT_ID para habilitar el pago.
          </p>
        )}
      </form>
    </PayPalScriptProvider>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      {children}
    </section>
  );
}

function InputField({ label, id, type = "text", value, onChange, error, required, placeholder }) {
  return (
    <FieldWrapper label={label} htmlFor={id} error={error} required={required}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-300 px-3 py-2"
        required={required}
      />
    </FieldWrapper>
  );
}

function FieldWrapper({ label, htmlFor, children, error, required }) {
  return (
    <label className="block text-sm text-slate-600" htmlFor={htmlFor}>
      <span className="mb-1 block font-semibold text-slate-800">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-600">{error}</span>}
    </label>
  );
}

function CheckboxField({ id, checked, onChange, label, error, required }) {
  return (
    <div className="space-y-1">
      <label className="flex items-start gap-3 text-sm text-slate-700" htmlFor={id}>
        <input id={id} type="checkbox" checked={checked} onChange={onChange} required={required} className="mt-1 h-4 w-4 rounded border-slate-300" />
        <span>{label}</span>
      </label>
      {error && <span className="block text-sm text-red-600">{error}</span>}
    </div>
  );
}

function validateForm(form) {
  const newErrors = {};

  if (!form.nombre.trim()) newErrors.nombre = "Indica el nombre del titular";
  if (!form.primerApellido.trim()) newErrors.primerApellido = "Indica el primer apellido";
  if (!form.fechaNacimiento) newErrors.fechaNacimiento = "Selecciona la fecha";

  if (!form.tipoDocumento) newErrors.tipoDocumento = "Selecciona el tipo de documento";
  if (!form.numeroDocumento.trim()) newErrors.numeroDocumento = "Introduce el documento";
  else if (!isDocumentoValido(form.tipoDocumento, form.numeroDocumento.trim())) {
    newErrors.numeroDocumento = "Documento no válido";
  }

  if (form.numeroSeguridadSocial && !NAF_REGEX.test(form.numeroSeguridadSocial.trim())) {
    newErrors.numeroSeguridadSocial = "El NAF debe tener 12 dígitos";
  }

  if (!form.tipoVia) newErrors.tipoVia = "Selecciona el tipo de vía";
  if (!form.via.trim()) newErrors.via = "Completa la vía";
  if (!form.numero.trim()) newErrors.numero = "Indica el número";
  if (!form.codigoPostal.trim() || !POSTAL_REGEX.test(form.codigoPostal.trim())) newErrors.codigoPostal = "Código postal inválido";
  if (!form.municipio.trim()) newErrors.municipio = "Indica el municipio";
  if (!form.provincia) newErrors.provincia = "Selecciona una provincia";

  if (!form.declaroDomicilio) newErrors.declaroDomicilio = "Es necesario confirmar el domicilio registrado";

  if (!form.telefono.trim() || !PHONE_REGEX.test(form.telefono.trim())) newErrors.telefono = "Teléfono español inválido";
  if (!form.email.trim() || !EMAIL_REGEX.test(form.email.trim())) newErrors.email = "Email inválido";

  form.beneficiarios.forEach((beneficiario, index) => {
    if (!beneficiario.nombre.trim()) newErrors[`beneficiarios.${index}.nombre`] = "Nombre requerido";
    if (!beneficiario.parentesco) newErrors[`beneficiarios.${index}.parentesco`] = "Selecciona parentesco";
    if (!beneficiario.documento.trim() && !beneficiario.fechaNacimiento) {
      newErrors[`beneficiarios.${index}.documento`] = "Documento o fecha de nacimiento obligatoria";
    }
    if (beneficiario.documento.trim() && !isBeneficiarioDocumentoValido(beneficiario.documento.trim())) {
      newErrors[`beneficiarios.${index}.documento`] = "Documento no válido";
    }
  });

  if (!form.autorizacion) newErrors.autorizacion = "Necesitamos tu autorización";
  if (!form.aceptaPrivacidad) newErrors.aceptaPrivacidad = "Debes aceptar la política";
  if (!form.firma.trim()) newErrors.firma = "Introduce tu firma";

  return newErrors;
}

function isDocumentoValido(tipo, valor) {
  const normalized = valor.toUpperCase();
  if (tipo === "DNI") {
    if (!DNI_REGEX.test(normalized)) return false;
    return getDNILetter(normalized.slice(0, 8)) === normalized.slice(-1);
  }

  if (tipo === "NIE") {
    if (!NIE_REGEX.test(normalized)) return false;
    const map = { X: "0", Y: "1", Z: "2" };
    const numero = map[normalized[0]] + normalized.slice(1, 8);
    return getDNILetter(numero) === normalized.slice(-1);
  }

  if (tipo === "Pasaporte") {
    return PASSPORT_REGEX.test(normalized);
  }

  return false;
}

function isBeneficiarioDocumentoValido(valor) {
  const normalized = valor.toUpperCase();
  return (
    isDocumentoValido("DNI", normalized) ||
    isDocumentoValido("NIE", normalized) ||
    isDocumentoValido("Pasaporte", normalized)
  );
}

function getDNILetter(numero) {
  const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
  const index = parseInt(numero, 10) % 23;
  return letters[index];
}

function trackEvent(event, detail = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...detail });
}
