import Link from "next/link";

const highlights = [
  { title: "Pago seguro", desc: "Con PayPal Business y comprobantes automáticos." },
  { title: "Entrega oficial", desc: "Presentamos en la Seguridad Social y te enviamos la referencia." },
  { title: "Sin certificado", desc: "Solo necesitas rellenar el formulario online." },
];

const steps = [
  {
    title: "Envía tu formulario",
    desc: "Tardas menos de 5 minutos. Validamos DNI/NIE y domicilio al instante.",
  },
  {
    title: "Pago y confirmación",
    desc: "Capturamos el pago (9,90 EUR) con PayPal y te mandamos el número de pedido.",
  },
  {
    title: "Presentación TSE",
    desc: "Nuestro equipo gestiona la solicitud ante la Seguridad Social y te envía la referencia.",
  },
  {
    title: "Recibe la tarjeta",
    desc: "La TSE llega por correo ordinario a la dirección declarada en tu expediente.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda la Tarjeta Sanitaria Europea?",
    a: "La presentación se realiza en menos de 24 h laborables. El envío de la tarjeta depende de la Seguridad Social (aprox. 7‑10 días).",
  },
  {
    q: "¿Puedo pedirla sin certificado digital?",
    a: "Sí. Nos autorizas a presentar en tu nombre marcando el mandato del formulario y adjuntando la firma en texto.",
  },
  {
    q: "¿Qué pasa si la Seguridad Social rechaza la solicitud?",
    a: "Te avisamos por correo, corregimos la incidencia y, si no es posible presentarla, te devolvemos el 100% del pago.",
  },
  {
    q: "¿Es seguro pagar con PayPal?",
    a: "Sí. Usamos PayPal Business con captura directa y notificaciones automáticas. No almacenamos datos de tu tarjeta.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 text-center text-white sm:px-10">
          <p className="text-xs uppercase tracking-[0.5em] text-indigo-100">Tramites YA</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Tarjeta Sanitaria Europea sin certificado ni desplazamientos
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-100 sm:text-lg">
            Rellena un único formulario, paga 9,90 EUR de gestión y nosotros presentamos la TSE en la Seguridad Social.
            Recibirás el número de referencia oficial y la tarjeta llegará por correo postal.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tse"
              className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-lg shadow-indigo-900/20 transition hover:-translate-y-0.5"
            >
              Solicitar TSE ahora
            </Link>
            <Link
              href="#faq"
              className="rounded-xl border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Preguntas frecuentes
            </Link>
          </div>
          <div className="grid gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-xl bg-white/5 p-4 text-left">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-indigo-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-6 sm:px-10">
        <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
          <p className="text-sm font-medium text-indigo-600">Cómo actuamos</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Proceso completo gestionado por especialistas</h2>
          <p className="mt-3 text-base text-slate-600">
            Nos especializamos exclusivamente en la Tarjeta Sanitaria Europea sin beneficiarios. Validamos la
            información, presentamos por ti y hacemos seguimiento hasta que tengas número de referencia.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-slate-100 p-5 shadow-sm hover:border-indigo-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-600">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
            <p className="text-sm font-semibold text-indigo-600">Garantía total</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Si no presentamos tu solicitud, reembolso 100%</h3>
            <p className="mt-3 text-sm text-slate-600">
              Trabajamos con un equipo dedicado a la TSE. Revisamos cada expediente manualmente antes de presentar,
              resolvemos incidencias por email/WhatsApp y te enviamos la referencia oficial de la Seguridad Social.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Acceso a tu número de pedido y actualizaciones por correo.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Referencia de la Sede Electrónica tras la presentación.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Atención humana (sin chatbots) de lunes a sábado.
              </li>
            </ul>
            <Link
              href="/tse"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Comenzar solicitud
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-500 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">Beneficios</p>
            <h3 className="mt-3 text-2xl font-bold">Todo lo que incluye la gestión TSE</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
                  1
                </span>
                Validación del titular, domicilio y teléfono según las reglas de la Seguridad Social.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
                  2
                </span>
                Cifrado de DNI/NIE y NAF (AES-256-GCM) antes de guardarlos en la base de datos.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
                  3
                </span>
                Seguimiento del expediente y comunicación si la Seguridad Social requiere información adicional.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
                  4
                </span>
                Reembolso total si no podemos presentar tu solicitud o si decides cancelarla antes de la presentación.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto mt-20 max-w-5xl px-6 sm:px-10">
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
          <p className="text-sm font-semibold text-indigo-600">FAQ TSE</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">Preguntas frecuentes</h3>
          <div className="mt-8 space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-100 p-5">
                <p className="text-base font-semibold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-6 text-center sm:px-10">
        <div className="rounded-3xl bg-indigo-600 px-8 py-10 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Último paso</p>
          <h3 className="mt-3 text-3xl font-bold">Tu Tarjeta Sanitaria Europea empieza aquí</h3>
          <p className="mt-3 text-sm text-indigo-100">
            Coste único de 9,90 EUR. Sin permanencia, sin suscripciones y con soporte directo para cualquier duda.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tse"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
            >
              Rellenar formulario
            </Link>
            <a
              href="mailto:hola@tramitesyaweb.com"
              className="rounded-2xl border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Escribir al soporte
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
