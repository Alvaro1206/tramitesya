"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PayPalLoader } from "./PayPalLoader";
import {
  PROVINCES,
  VIA_OPTIONS,
  buildPayload,
  defaultAddress,
  defaultOptionalAddress,
  formSchema,
  type FormValues,
} from "./schema";
import { focusFirstError } from "./helpers";

declare global {
  interface Window {
    paypal?: any;
  }
}

const PRICE = 9.9;

export default function TSEPage() {
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paypalReady, setPaypalReady] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const payRef = useRef<HTMLDivElement>(null);
  const paypalActionsRef = useRef<any>(null);
  const lastValidValuesRef = useRef<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState,
    setFocus,
    getValues,
    resetField,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      titular: {
        nombre: "",
        apellido1: "",
        apellido2: "",
        fecha_nacimiento: "",
        doc_tipo: "" as FormValues["titular"]["doc_tipo"],
        doc_num: "",
        naf: "",
      },
      domicilio: { ...defaultAddress },
      otraDireccion: defaultOptionalAddress,
      contacto: {
        telefono: "",
        email: "",
      },
      dom_coincide: false,
      otra_direccion: false,
      mandato: false,
      privacidad: false,
      firma: "",
    },
  });

  const watchOtraDireccion = watch("otra_direccion");
  const watchMandato = watch("mandato");
  const watchPrivacidad = watch("privacidad");
  const watchDomCoincide = watch("dom_coincide");

  useEffect(() => {
    if (!watchOtraDireccion) {
      resetField("otraDireccion", { defaultValue: defaultOptionalAddress });
    }
  }, [watchOtraDireccion, resetField]);

  const canSubmit = useMemo(() => {
    const hasDomicilioChoice = watchDomCoincide || watchOtraDireccion;
    return formState.isValid && hasDomicilioChoice && watchMandato && watchPrivacidad;
  }, [formState.isValid, watchDomCoincide, watchMandato, watchOtraDireccion, watchPrivacidad]);

  const runValidation = useCallback(async () => {
    let validData: FormValues | null = null;
    await handleSubmit(
      (values) => {
        setGlobalError(null);
        validData = values;
        lastValidValuesRef.current = values;
      },
      (errors) => {
        setGlobalError("Revisa los campos marcados en rojo.");
        focusFirstError(errors, setFocus);
      },
    )();
    return validData;
  }, [handleSubmit, setFocus]);

  const onCheckForm = useCallback(async () => {
    const valid = await runValidation();
    if (valid) {
      setShowPayPal(true);
      setPaymentError(null);
      requestAnimationFrame(() => {
        payRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }, [runValidation]);

  useEffect(() => {
    if (!showPayPal || !paypalReady || !payRef.current || !window.paypal) return;
    payRef.current.innerHTML = "";

    const buttons = window.paypal
      .Buttons({
        onInit: (_: unknown, actions: any) => {
          paypalActionsRef.current = actions;
          actions.disable();
        },
        onClick: async (_: unknown, actions: any) => {
          const validValues = await runValidation();
          if (!validValues) {
            return actions.reject();
          }
          return actions.resolve();
        },
        createOrder: (_: unknown, actions: any) =>
          actions.order.create({
            purchase_units: [
              {
                description: "Gestion solicitud TSE (0 EUR oficial)",
                amount: { value: PRICE.toFixed(2), currency_code: "EUR" },
              },
            ],
          }),
        onApprove: async (_: unknown, actions: any) => {
          try {
            setPaymentError(null);
            const details = await actions.order.capture();
            const formValues = lastValidValuesRef.current ?? getValues();
            const payload = buildPayload(formValues);
            const response = await fetch("/api/tse/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                form: payload,
                paypal: {
                  orderID: details.id,
                  captureID:
                    details.purchase_units?.[0]?.payments?.captures?.[0]?.id ??
                    details.id ??
                    null,
                  payer: details.payer,
                },
              }),
            });

            if (!response.ok) {
              setPaymentError(
                "Pago correcto, pero no pudimos registrar tu solicitud. Contacta con soporte.",
              );
              return;
            }

            const body = await response.json();
            window.location.href = `/gracias?order=${encodeURIComponent(body.orderId)}`;
          } catch (error) {
            console.error(error);
            setPaymentError("No se pudo completar el proceso con PayPal. Intentalo de nuevo.");
          }
        },
        onError: () => {
          setPaymentError("No se pudo cargar PayPal. Recarga la pagina e intentalo de nuevo.");
        },
      })
      .render(payRef.current);

    return () => {
      buttons?.close();
      paypalActionsRef.current = null;
    };
  }, [paypalReady, showPayPal, getValues, runValidation]);

  useEffect(() => {
    if (!paypalActionsRef.current) return;
    if (canSubmit) {
      paypalActionsRef.current.enable();
    } else {
      paypalActionsRef.current.disable();
    }
  }, [canSubmit]);

  useEffect(() => {
    if (canSubmit && globalError) {
      setGlobalError(null);
    }
  }, [canSubmit, globalError]);

  const handlePayPalReady = useCallback(() => setPaypalReady(true), []);

  const { errors } = formState;

  const inputClass = (hasError?: boolean) =>
    [
      "mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring-2",
      hasError ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:ring-indigo-500",
    ].join(" ");

  const checkboxClass = (hasError?: boolean) =>
    [
      "h-4 w-4 rounded border",
      hasError ? "border-red-500" : "border-slate-300",
    ].join(" ");

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <PayPalLoader onReady={handlePayPalReady} />
      <p className="text-sm text-indigo-500">Servicio sin beneficiarios</p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">
        Tarjeta Sanitaria Europea <span className="text-indigo-600">sin certificado</span>
      </h1>
      <p className="mt-2 text-slate-600">
        Presentamos tu solicitud ante la Seguridad Social y te enviamos la referencia oficial por correo electronico.
        El coste es de <strong>9,90 EUR</strong> de gestion.
      </p>

      <form
        id="tseForm"
        className="mt-8 space-y-8 rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200"
        onSubmit={(event) => event.preventDefault()}
      >
        {globalError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
            {globalError}
          </div>
        )}

        <section>
          <h2 className="text-xl font-semibold text-slate-900">1) Titular</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {renderInput({
              label: "Nombre",
              required: true,
              fieldError: errors.titular?.nombre,
              register: register("titular.nombre"),
              className: inputClass(!!errors.titular?.nombre),
            })}
            {renderInput({
              label: "1er apellido",
              required: true,
              fieldError: errors.titular?.apellido1,
              register: register("titular.apellido1"),
              className: inputClass(!!errors.titular?.apellido1),
            })}
            {renderInput({
              label: "2o apellido",
              fieldError: errors.titular?.apellido2,
              register: register("titular.apellido2"),
              className: inputClass(!!errors.titular?.apellido2),
            })}
            <div>
              <label className="text-sm text-slate-600">
                Fecha de nacimiento <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                {...register("titular.fecha_nacimiento")}
                className={inputClass(!!errors.titular?.fecha_nacimiento)}
                aria-invalid={errors.titular?.fecha_nacimiento ? "true" : "false"}
                required
              />
              {errors.titular?.fecha_nacimiento && (
                <p className="mt-1 text-sm text-red-600">{errors.titular.fecha_nacimiento.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm text-slate-600">
                Documento <span className="text-red-600">*</span>
              </label>
              <select
                {...register("titular.doc_tipo")}
                className={inputClass(!!errors.titular?.doc_tipo)}
                aria-invalid={errors.titular?.doc_tipo ? "true" : "false"}
                required
              >
                <option value="">Selecciona...</option>
                <option value="DNI">DNI</option>
                <option value="NIE">NIE</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
              {errors.titular?.doc_tipo && (
                <p className="mt-1 text-sm text-red-600">{errors.titular.doc_tipo.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm text-slate-600">
                Numero documento <span className="text-red-600">*</span>
              </label>
              <input
                {...register("titular.doc_num")}
                className={inputClass(!!errors.titular?.doc_num)}
                aria-invalid={errors.titular?.doc_num ? "true" : "false"}
                placeholder="12345678Z / X1234567L / PA12345"
                required
              />
              {errors.titular?.doc_num && (
                <p className="mt-1 text-sm text-red-600">{errors.titular.doc_num.message}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">Numero Seguridad Social (NAF, opcional)</label>
              <input
                {...register("titular.naf")}
                className={inputClass(!!errors.titular?.naf)}
                aria-invalid={errors.titular?.naf ? "true" : "false"}
                placeholder="12 digitos"
              />
              {errors.titular?.naf && (
                <p className="mt-1 text-sm text-red-600">{errors.titular.naf.message}</p>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2) Domicilio de envio</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {renderSelect({
              label: "Tipo de via",
              required: true,
              options: VIA_OPTIONS,
              fieldError: errors.domicilio?.via,
              register: register("domicilio.via"),
              className: inputClass(!!errors.domicilio?.via),
            })}
            {renderInput({
              label: "Via",
              required: true,
              fieldError: errors.domicilio?.direccion,
              register: register("domicilio.direccion"),
              className: inputClass(!!errors.domicilio?.direccion),
            })}
            {renderInput({
              label: "Numero",
              required: true,
              fieldError: errors.domicilio?.numero,
              register: register("domicilio.numero"),
              className: inputClass(!!errors.domicilio?.numero),
            })}
            {renderInput({
              label: "Piso / puerta",
              fieldError: errors.domicilio?.piso,
              register: register("domicilio.piso"),
              className: inputClass(!!errors.domicilio?.piso),
            })}
            {renderInput({
              label: "Codigo postal",
              required: true,
              placeholder: "08001",
              fieldError: errors.domicilio?.cp,
              register: register("domicilio.cp"),
              className: inputClass(!!errors.domicilio?.cp),
            })}
            {renderInput({
              label: "Municipio",
              required: true,
              fieldError: errors.domicilio?.municipio,
              register: register("domicilio.municipio"),
              className: inputClass(!!errors.domicilio?.municipio),
            })}
            <div>
              <label className="text-sm text-slate-600">
                Provincia <span className="text-red-600">*</span>
              </label>
              <select
                {...register("domicilio.provincia")}
                className={inputClass(!!errors.domicilio?.provincia)}
                aria-invalid={errors.domicilio?.provincia ? "true" : "false"}
                required
              >
                {PROVINCES.map((province) => (
                  <option key={province} value={province}>
                    {province || "Selecciona..."}
                  </option>
                ))}
              </select>
              {errors.domicilio?.provincia && (
                <p className="mt-1 text-sm text-red-600">{errors.domicilio.provincia.message}</p>
              )}
            </div>
          </div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <label className="flex gap-2">
              <input
                type="checkbox"
                {...register("dom_coincide")}
                className={checkboxClass(!!errors.dom_coincide)}
              />
              Declaro que este domicilio coincide con el registrado en la Seguridad Social.
            </label>
            <label className="flex gap-2">
              <input type="checkbox" {...register("otra_direccion")} className={checkboxClass()} />
              Quiero recibirla en otra direccion en Espana (requiere verificacion adicional).
            </label>
            {errors.dom_coincide && (
              <p className="text-sm text-red-600">{errors.dom_coincide.message}</p>
            )}
          </div>
        </section>

        {watchOtraDireccion && (
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Direccion alternativa</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {renderSelect({
                label: "Tipo de via",
                required: true,
                options: VIA_OPTIONS,
                fieldError: errors.otraDireccion?.via,
                register: register("otraDireccion.via"),
                className: inputClass(!!errors.otraDireccion?.via),
              })}
              {renderInput({
                label: "Via",
                required: true,
                fieldError: errors.otraDireccion?.direccion,
                register: register("otraDireccion.direccion"),
                className: inputClass(!!errors.otraDireccion?.direccion),
              })}
              {renderInput({
                label: "Numero",
                required: true,
                fieldError: errors.otraDireccion?.numero,
                register: register("otraDireccion.numero"),
                className: inputClass(!!errors.otraDireccion?.numero),
              })}
              {renderInput({
                label: "Piso / puerta",
                fieldError: errors.otraDireccion?.piso,
                register: register("otraDireccion.piso"),
                className: inputClass(!!errors.otraDireccion?.piso),
              })}
              {renderInput({
                label: "Codigo postal",
                required: true,
                fieldError: errors.otraDireccion?.cp,
                register: register("otraDireccion.cp"),
                className: inputClass(!!errors.otraDireccion?.cp),
              })}
              {renderInput({
                label: "Municipio",
                required: true,
                fieldError: errors.otraDireccion?.municipio,
                register: register("otraDireccion.municipio"),
                className: inputClass(!!errors.otraDireccion?.municipio),
              })}
              <div>
                <label className="text-sm text-slate-600">
                  Provincia <span className="text-red-600">*</span>
                </label>
                <select
                  {...register("otraDireccion.provincia")}
                  className={inputClass(!!errors.otraDireccion?.provincia)}
                  aria-invalid={errors.otraDireccion?.provincia ? "true" : "false"}
                  required
                >
                  {PROVINCES.map((province) => (
                    <option key={province} value={province}>
                      {province || "Selecciona..."}
                    </option>
                  ))}
                </select>
                {errors.otraDireccion?.provincia && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.otraDireccion.provincia.message}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3) Contacto y autorizacion</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {renderInput({
              label: "Telefono",
              required: true,
              placeholder: "+34 6XXXXXXXX",
              fieldError: errors.contacto?.telefono,
              register: register("contacto.telefono"),
              className: inputClass(!!errors.contacto?.telefono),
            })}
            {renderInput({
              label: "Email",
              required: true,
              placeholder: "tucorreo@dominio.com",
              fieldError: errors.contacto?.email,
              register: register("contacto.email"),
              className: inputClass(!!errors.contacto?.email),
              type: "email",
            })}
          </div>
          <div className="mt-3 space-y-3 text-sm text-slate-600">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                {...register("mandato")}
                className={checkboxClass(!!errors.mandato)}
              />
              <span>
                <strong>Autorizo</strong> a TramitesYA a presentar esta solicitud de TSE en mi nombre.
              </span>
            </label>
            {errors.mandato && <p className="text-sm text-red-600">{errors.mandato.message}</p>}
            <div className="grid gap-4 sm:grid-cols-2">
              {renderInput({
                label: "Firma (nombre completo)",
                required: true,
                fieldError: errors.firma,
                register: register("firma"),
                className: inputClass(!!errors.firma),
              })}
              <label className="flex items-end gap-2">
                <input
                  type="checkbox"
                  {...register("privacidad")}
                  className={checkboxClass(!!errors.privacidad)}
                />
                Acepto la Politica de Privacidad y Terminos.
              </label>
            </div>
            {errors.privacidad && (
              <p className="text-sm text-red-600">{errors.privacidad.message}</p>
            )}
          </div>
        </section>

        <p className="text-sm text-slate-500">
          Coste total: {PRICE.toFixed(2)} EUR de gestion. Si no presentamos tu solicitud, reembolso 100% automatico.
        </p>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={onCheckForm}
            disabled={!canSubmit}
            className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-center text-base font-semibold text-white transition enabled:hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-300"
            aria-disabled={!canSubmit}
          >
            Solicitar TSE
          </button>
          {paymentError && <p className="text-sm text-red-600">{paymentError}</p>}
          {!showPayPal && (
            <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">
              Completa el formulario y pulsa “Solicitar TSE” para mostrar el botón de pago.
            </div>
          )}
          <div ref={payRef} className={showPayPal ? "mt-2" : "mt-2"} />
        </div>
      </form>
    </main>
  );
}

type RenderProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  className: string;
  fieldError?: { message?: string };
  register: UseFormRegisterReturn;
};

function renderInput({
  label,
  required,
  placeholder,
  type = "text",
  className,
  fieldError,
  register,
}: RenderProps) {
  const errorId = fieldError ? `${register.name}-error` : undefined;
  return (
    <div>
      <label className="text-sm text-slate-600">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        {...register}
        type={type}
        className={className}
        placeholder={placeholder}
        aria-invalid={fieldError ? "true" : "false"}
        aria-describedby={errorId}
        required={required}
      />
      {fieldError && (
        <p id={errorId} className="mt-1 text-sm text-red-600">
          {fieldError.message}
        </p>
      )}
    </div>
  );
}

type SelectProps = RenderProps & { options: string[] };

function renderSelect({ label, required, options, className, fieldError, register }: SelectProps) {
  const errorId = fieldError ? `${register.name}-error` : undefined;
  return (
    <div>
      <label className="text-sm text-slate-600">
        {label} <span className="text-red-600">*</span>
      </label>
      <select
        {...register}
        className={className}
        aria-invalid={fieldError ? "true" : "false"}
        aria-describedby={errorId}
        required={required}
      >
        <option value="">Selecciona...</option>
        {options
          .filter((option) => option)
          .map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
      {fieldError && (
        <p id={errorId} className="mt-1 text-sm text-red-600">
          {fieldError.message}
        </p>
      )}
    </div>
  );
}
