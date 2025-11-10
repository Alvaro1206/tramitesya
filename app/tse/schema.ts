import { z } from "zod";

const LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";
const DNI_REGEX = /^\d{8}[A-Za-z]$/;
const NIE_REGEX = /^[XYZ]\d{7}[A-Za-z]$/;
const PASSPORT_REGEX = /^[A-Za-z0-9]{6,9}$/;
const CP_REGEX = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
const PHONE_REGEX = /^(?:\+34)?\s?(6|7|8|9)\d{8}$/;

export const VIA_OPTIONS = ["Calle", "Avenida", "Plaza", "Camino", "Carretera", "Travesia", "Otra"];

export const PROVINCES = [
  "",
  "A Coruna",
  "Alava",
  "Albacete",
  "Alicante",
  "Almeria",
  "Asturias",
  "Avila",
  "Badajoz",
  "Baleares",
  "Barcelona",
  "Burgos",
  "Caceres",
  "Cadiz",
  "Cantabria",
  "Castellon",
  "Ceuta",
  "Ciudad Real",
  "Cordoba",
  "Cuenca",
  "Girona",
  "Granada",
  "Guadalajara",
  "Guipuzcoa",
  "Huelva",
  "Huesca",
  "Jaen",
  "La Rioja",
  "Las Palmas",
  "Leon",
  "Lleida",
  "Lugo",
  "Madrid",
  "Malaga",
  "Melilla",
  "Murcia",
  "Navarra",
  "Ourense",
  "Palencia",
  "Pontevedra",
  "Salamanca",
  "Santa Cruz de Tenerife",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Vizcaya",
  "Zamora",
  "Zaragoza",
];

const addressSchema = z.object({
  via: z.string().min(1, "Selecciona el tipo de via."),
  direccion: z.string().trim().min(3, "Introduce la via."),
  numero: z
    .string()
    .trim()
    .regex(/^[1-9]\d{0,4}$/, "Numero de 1 a 99999."),
  piso: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .transform((value) => (value ? value : undefined)),
  cp: z.string().trim().regex(CP_REGEX, "Codigo postal espanol no valido."),
  municipio: z.string().trim().min(2, "Municipio obligatorio."),
  provincia: z.string().trim().min(2, "Selecciona la provincia."),
});

const optionalAddressSchema = addressSchema.partial();

const titularSchema = z
  .object({
    nombre: z.string().trim().min(2, "Nombre minimo de 2 letras."),
    apellido1: z.string().trim().min(2, "El primer apellido es obligatorio."),
    apellido2: z
      .string()
      .trim()
      .optional()
      .or(z.literal(""))
      .transform((value) => (value ? value : undefined)),
    fecha_nacimiento: z
      .string()
      .trim()
      .min(1, "La fecha de nacimiento es obligatoria.")
      .refine((value) => {
        const date = new Date(value);
        const today = new Date();
        return !Number.isNaN(date.getTime()) && date <= today;
      }, "Fecha de nacimiento no valida."),
    doc_tipo: z.enum(["DNI", "NIE", "Pasaporte"], {
      required_error: "Selecciona el tipo de documento.",
    }),
    doc_num: z.string().trim().min(1, "Indica el numero de documento."),
    naf: z
      .string()
      .trim()
      .optional()
      .or(z.literal(""))
      .transform((value) => (value ? value : undefined))
      .refine((value) => !value || /^\d{12}$/.test(value), {
        message: "El NAF debe tener 12 digitos.",
      }),
  })
  .superRefine((data, ctx) => {
    const value = data.doc_num.toUpperCase();
    if (data.doc_tipo === "DNI") {
      if (!DNI_REGEX.test(value) || !isValidDNI(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["doc_num"],
          message: "DNI no valido.",
        });
      }
    }
    if (data.doc_tipo === "NIE") {
      if (!NIE_REGEX.test(value) || !isValidNIE(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["doc_num"],
          message: "NIE no valido.",
        });
      }
    }
    if (data.doc_tipo === "Pasaporte") {
      if (!PASSPORT_REGEX.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["doc_num"],
          message: "Pasaporte no valido.",
        });
      }
    }
  });

export const formSchema = z
  .object({
    titular: titularSchema,
    domicilio: addressSchema,
    otraDireccion: optionalAddressSchema,
    contacto: z.object({
      telefono: z
        .string()
        .trim()
        .regex(PHONE_REGEX, "Telefono espanol no valido."),
      email: z.string().trim().email("Email no valido."),
    }),
    dom_coincide: z.boolean(),
    otra_direccion: z.boolean(),
    mandato: z.boolean().refine((value) => value, "Debes autorizar la gestion."),
    privacidad: z
      .boolean()
      .refine((value) => value, "Debes aceptar la politica de privacidad."),
    firma: z.string().trim().min(3, "Firma con tu nombre completo."),
  })
  .superRefine((data, ctx) => {
    if (!data.dom_coincide && !data.otra_direccion) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["dom_coincide"],
        message: "Marca al menos una opcion de domicilio.",
      });
    }

    if (data.otra_direccion) {
      const result = addressSchema.safeParse(data.otraDireccion);
      if (!result.success) {
        result.error.issues.forEach((issue) => {
          ctx.addIssue({
            ...issue,
            path: ["otraDireccion", ...(issue.path as (string | number)[])],
          });
        });
      }
    }
  });

export type FormValues = z.infer<typeof formSchema>;
export type AddressValues = z.infer<typeof addressSchema>;
export type OptionalAddressValues = z.infer<typeof optionalAddressSchema>;

export const defaultAddress: AddressValues = {
  via: "",
  direccion: "",
  numero: "",
  piso: undefined,
  cp: "",
  municipio: "",
  provincia: "",
};

export type AddressPayload = {
  via: string;
  direccion: string;
  numero?: string;
  piso: string | null;
  cp: string;
  municipio: string;
  provincia: string;
};

export type FormPayload = {
  titular: {
    nombre: string;
    apellido1: string;
    apellido2: string | null;
    fecha_nacimiento: string;
    doc_tipo: string;
    doc_num: string;
    naf: string | null;
  };
  domicilio: AddressPayload;
  contacto: {
    telefono: string;
    email: string;
  };
  dom_coincide: boolean;
  otra_direccion: boolean;
  otra_direccion_detalle?: AddressPayload | null;
  mandato: boolean;
  firma: string;
  privacidad: boolean;
  version: string;
  submitted_at: string;
};

export function buildPayload(values: FormValues): FormPayload {
  return {
    titular: {
      nombre: values.titular.nombre.trim(),
      apellido1: values.titular.apellido1.trim(),
      apellido2: values.titular.apellido2?.trim() || null,
      fecha_nacimiento: values.titular.fecha_nacimiento,
      doc_tipo: values.titular.doc_tipo,
      doc_num: values.titular.doc_num.toUpperCase(),
      naf: values.titular.naf || null,
    },
    domicilio: formatAddress(values.domicilio),
    contacto: {
      telefono: values.contacto.telefono.trim(),
      email: values.contacto.email.trim(),
    },
    dom_coincide: values.dom_coincide,
    otra_direccion: values.otra_direccion,
    otra_direccion_detalle: values.otra_direccion ? formatAddress(values.otraDireccion) : null,
    mandato: values.mandato,
    firma: values.firma.trim(),
    privacidad: values.privacidad,
    version: "tse-paypal-1.1",
    submitted_at: new Date().toISOString(),
  };
}

export function formatAddress(address: AddressValues | OptionalAddressValues): AddressPayload {
  const via = address.via ?? "";
  const direccion = address.direccion ?? "";
  const numero = address.numero ?? "";
  return {
    via,
    direccion: [direccion, numero].filter(Boolean).join(" ").trim(),
    numero: numero || undefined,
    piso: address.piso ?? null,
    cp: address.cp ?? "",
    municipio: address.municipio ?? "",
    provincia: address.provincia ?? "",
  };
}

function isValidDNI(value: string) {
  const match = value.match(/^(\d{8})([A-Z])$/);
  if (!match) return false;
  const expected = LETTERS[parseInt(match[1], 10) % 23];
  return expected === match[2];
}

function isValidNIE(value: string) {
  const match = value.match(/^([XYZ])(\d{7})([A-Z])$/);
  if (!match) return false;
  const map: Record<string, string> = { X: "0", Y: "1", Z: "2" };
  const numeric = `${map[match[1]]}${match[2]}`;
  const expected = LETTERS[parseInt(numeric, 10) % 23];
  return expected === match[3];
}
