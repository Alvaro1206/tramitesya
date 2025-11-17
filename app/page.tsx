import Link from "next/link";

const highlights = [
  { title: "Entrega oficial", desc: "Presentamos tu solicitud y te damos la referencia." },
  { title: "Sin certificado", desc: "Solo necesitas completar el formulario online." },
  { title: "Pago único 9,90 EUR", desc: "Todo incluido, sin suscripciones." },
];

const steps = [
  { title: "1. Formulario", desc: "Validamos tu DNI/NIE y domicilio en minutos." },
  { title: "2. Pago y confirmación", desc: "Recibes número de pedido y soporte humano." },
  { title: "3. Presentación oficial", desc: "Tramitamos la TSE en la Seguridad Social por ti." },
  { title: "4. Referencia y entrega", desc: "Te enviamos la referencia; la tarjeta llega por correo." },
];

const faqs = [
  {
    q: "¿Cuánto tarda la TSE?",
    a: "La solicitud se presenta el mismo día laboral. La tarjeta la envía la Seguridad Social por correo en aprox. 7-10 días.",
  },
  {
    q: "¿Necesito certificado digital?",
    a: "No. Durante el formulario nos autorizas y firmas con tu nombre completo.",
  },
  {
    q: "¿Qué ocurre si falta información?",
    a: "Te contactamos para corregirla. Si no podemos presentar el expediente, devolvemos el 100 % del pago.",
  },
  {
    q: "¿Es seguro el pago?",
    a: "Pago 100 % seguro a través de plataformas reconocidas. Solo se captura cuando el formulario es válido.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-sky-600 text-white">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
          <div className="absolute inset-y-0 left-1/2 w-1/2 rounded-full bg-white blur-[120px]" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 text-center sm:px-10">
          <p className="text-xs uppercase tracking-[0.45em] text-indigo-100">Tramites YA</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Tarjeta Sanitaria Europea sin desplazarte</h1>
          <p className="mx-auto max-w-3xl text-base text-indigo-100 sm:text-lg">
            Gestión completa por 9,90 EUR. Validamos tus datos, presentamos la solicitud en la Seguridad Social y te
            entregamos la referencia oficial con soporte humano durante todo el proceso.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tse"
              className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-lg shadow-indigo-900/25 transition hover:-translate-y-0.5"
            >
              Solicitar TSE ahora
            </Link>
            <Link
              href="#faq"
              className="rounded-2xl border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Ver preguntas frecuentes
            </Link>
          </div>
          <TrustBadge />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white/80 p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-semibold text-indigo-600">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14 sm:px-10">
        <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
          <header className="mb-8">
            <p className="text-sm font-medium text-indigo-600">Proceso</p>
            <h2 className="mt-1 text-3xl font-semibold">Acompañamiento claro en cuatro pasos</h2>
            <p className="mt-2 text-sm text-slate-600">Sin trámites duplicados ni formularios adicionales.</p>
          </header>
          <div className="grid gap-5 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-100/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg"
              >
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
            <p className="text-sm font-medium text-indigo-600">Confianza</p>
            <h2 className="mt-2 text-2xl font-semibold">Reembolso total si no presentamos la TSE</h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Seguimiento por email o WhatsApp hasta confirmar la referencia oficial.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Cifrado AES-256-GCM para DNI/NIE y NAF antes de almacenarlos.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Equipo especializado exclusivamente en Tarjeta Sanitaria Europea.
              </li>
            </ul>
            <Link
              href="/tse"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Iniciar solicitud
              <span aria-hidden="true">?</span>
            </Link>
          </article>

          <article className="rounded-3xl bg-gradient-to-br from-indigo-700 to-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">Incluye</p>
            <h2 className="mt-2 text-2xl font-semibold">Gestión integral de la TSE</h2>
            <ul className="mt-6 space-y-4 text-sm text-indigo-50">
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
                  01
                </span>
                Revisión documental y contacto inmediato si falta información.
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
                  02
                </span>
                Presentación telemática en la Sede Electrónica de la Seguridad Social.
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
                  03
                </span>
                Entrega de la referencia y guía para consultar el envío de la tarjeta.
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
                  04
                </span>
                Reembolso del 100 % si la solicitud no puede presentarse.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 pb-14 sm:px-10">
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
          <p className="text-sm font-medium text-indigo-600">Preguntas frecuentes</p>
          <h2 className="mt-2 text-3xl font-semibold">Resolvemos tus dudas antes de pagar</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-2xl border border-slate-100/80 p-5">
                <p className="text-base font-semibold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 text-center sm:px-10">
        <div className="rounded-3xl bg-indigo-700 px-8 py-10 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Último paso</p>
          <h2 className="mt-3 text-3xl font-semibold">Tu TSE por 9,90 EUR, sin sorpresas</h2>
          <p className="mt-3 text-sm text-indigo-100">
            Atención humana, referencia oficial y acompañamiento hasta recibir la tarjeta.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tse"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
            >
              Rellenar formulario
            </Link>
            <a
              href="mailto:hola@tramitesyaweb.com"
              className="rounded-2xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Escribir a soporte
            </a>
          </div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}

function TrustBadge() {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-medium text-indigo-100">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 11V7a4 4 0 0 1 8 0v4m-9 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
        />
      </svg>
      Pago 100 % seguro · a través de plataformas de pago reconocidas
    </div>
  );
}

function HomeFooter() {
  const year = new Date().getFullYear();
  const links = [
    { label: "Politica de privacidad", href: "/legal/privacidad" },
    { label: "Aviso legal", href: "/legal/aviso-legal" },
    { label: "Terminos y condiciones", href: "/legal/terminos" },
    { label: "Politica de cookies", href: "/legal/cookies" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© Tramitesyaweb.com, {year}</p>
        <nav className="flex flex-wrap gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-500 transition hover:text-indigo-600">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
