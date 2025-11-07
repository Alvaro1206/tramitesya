import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, Mail, Phone, ShieldCheck, Star } from "lucide-react";
import AvisoLegal from "./pages/AvisoLegal.jsx";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad.jsx";
import CookiesPage from "./pages/Cookies.jsx";
import TSEForm from "./components/TSEForm.jsx";
import { usePageMetadata } from "./hooks/usePageMetadata.js";

const FAQ_ITEMS = [
  {
    question: "¿Tiene coste oficial?",
    answer: "No. La TSE es gratuita; pagas solo nuestra gestión.",
  },
  {
    question: "¿Necesito certificado?",
    answer: "No. Usamos el canal sin certificado (domicilio coincidente).",
  },
  {
    question: "¿Cuándo llega?",
    answer: "Te damos referencia al presentar; la tarjeta llega por correo.",
  },
  {
    question: "¿Y si el domicilio no coincide?",
    answer:
      "Te indicamos cómo actualizarlo; si no se puede tramitar, reembolso 100%.",
  },
];

const BADGES = ["Pago seguro", "Documento oficial", "Sin Cl@ve"];

const PROCESS_CARDS = [
  {
    title: "Rellena el formulario (2 min).",
    description: "Solo pedimos los datos necesarios para solicitar tu TSE.",
  },
  {
    title: "Pagas con PayPal.",
    description: "Cobramos 9,90 € por titular + 5 € por beneficiario.",
  },
  {
    title: "Presentamos y te enviamos la referencia. La TSE llega por correo.",
    description: "Seguimos el expediente y te avisamos en cuanto tengamos la referencia.",
  },
];

const TIMELINE = [
  {
    title: "Validación de datos",
    detail: "Revisamos que el domicilio coincida con Seguridad Social para usar el canal sin certificado.",
  },
  {
    title: "Presentación en Sede",
    detail: "Enviamos la solicitud por ti y guardamos la referencia oficial.",
  },
  {
    title: "Seguimiento",
    detail: "Recibirás la referencia y cualquier instrucción adicional hasta que llegue la tarjeta.",
  },
];

const TESTIMONIALS = [
  {
    name: "Marta",
    text: "En la misma tarde tenía la referencia y pude viajar tranquila. Todo claro y rápido.",
  },
  {
    name: "Javier",
    text: "No tenía certificado y necesitaba la TSE urgente. Pagas la gestión y ellos lo hacen todo.",
  },
  {
    name: "Lucía",
    text: "Buen soporte y me avisaron cuando la Seguridad Social actualizó mi domicilio.",
  },
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <StandardLayout>
              <HomePage />
            </StandardLayout>
          }
        />
        <Route
          path="/tse"
          element={
            <StandardLayout>
              <TSEPage />
            </StandardLayout>
          }
        />
        <Route
          path="/gracias"
          element={
            <StandardLayout>
              <GraciasPage />
            </StandardLayout>
          }
        />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function StandardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <ShieldCheck className="h-6 w-6 text-blue-700" aria-hidden="true" />
          Tramites<span className="text-blue-700">YA</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <Link className="transition hover:text-blue-700" to="/">
            Home
          </Link>
          <Link className="transition hover:text-blue-700" to="/tse">
            TSE
          </Link>
          <a className="transition hover:text-blue-700" href="/#proceso">
            Proceso
          </a>
          <a className="transition hover:text-blue-700" href="/#opiniones">
            Opiniones
          </a>
          <a className="transition hover:text-blue-700" href="/#contacto">
            Contacto
          </a>
        </nav>
        <Link
          to="/tse"
          className="inline-flex items-center gap-2 rounded-2xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800"
        >
          Solicitar TSE
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-slate-600 md:grid-cols-2">
        <div className="space-y-3">
          <p>No somos la Seguridad Social. Actuamos como gestoría digital en tu nombre.</p>
          <p>TSE: 0 € oficial; pagas nuestra gestión.</p>
          <p>Si no podemos presentar la solicitud (p. ej., domicilio no coincide y no se corrige), reembolso 100%.</p>
          <p>Borramos adjuntos a los 30 días salvo obligación legal.</p>
        </div>
        <div className="space-y-2 text-right">
          <p className="font-semibold text-slate-800">Legal</p>
          <Link className="block text-blue-700 hover:underline" to="/aviso-legal">
            Aviso legal
          </Link>
          <Link className="block text-blue-700 hover:underline" to="/politica-privacidad">
            Política de privacidad
          </Link>
          <Link className="block text-blue-700 hover:underline" to="/cookies">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-wide text-white/80">
            Tarjeta Sanitaria Europea online
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Tus trámites online, sin certificados</h1>
          <p className="mb-6 text-lg text-blue-100">
            Tramitamos por ti la Tarjeta Sanitaria Europea (TSE) con un simple formulario. Te enviamos la referencia de la Sede y la tarjeta llega a tu domicilio.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            {BADGES.map((badge) => (
              <span key={badge} className="rounded-full bg-white/10 px-4 py-1 text-sm text-white">
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/tse"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-900 shadow-xl transition hover:bg-blue-50"
            >
              Solicitar TSE ahora
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a className="text-white/80 underline" href="#proceso">
              Ver cómo funciona
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">¿Qué recibes?</h3>
            <p className="text-blue-100">
              Presentamos la solicitud oficial, te compartimos la referencia y hacemos seguimiento hasta que recibas la tarjeta.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                Presentación sin Cl@ve
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                Soporte por email y WhatsApp
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                Reembolso 100% si no se presenta
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  usePageMetadata({
    title: "TramitesYA | Tarjeta Sanitaria Europea sin certificado",
    description:
      "Solicita tu Tarjeta Sanitaria Europea online. Validamos tu domicilio, presentamos por ti y te enviamos la referencia oficial.",
  });
  return (
    <>
      <HeroSection />
      <section id="servicio" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {PROCESS_CARDS.map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="proceso" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Proceso</p>
              <h2 className="text-3xl font-bold text-slate-900">Cómo trabajamos tu TSE</h2>
              <p className="mt-3 text-slate-600">
                Seguimos todo el canal sin certificado para que no tengas que usar Cl@ve ni pedir cita en la Seguridad Social.
              </p>
            </div>
            <Link
              to="/tse"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 text-white shadow-lg"
            >
              Solicitar TSE
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-6">
            {TIMELINE.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner md:flex-row md:items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-xl font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="opiniones" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 flex items-center gap-3">
            <Star className="h-6 w-6 text-amber-300" />
            <div>
              <p className="text-sm uppercase tracking-wide text-white/70">Opiniones</p>
              <h2 className="text-3xl font-bold">Lo que dicen nuestros clientes</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimony) => (
              <div key={testimony.name} className="rounded-3xl bg-white/10 p-6">
                <p className="text-lg">“{testimony.text}”</p>
                <p className="mt-4 text-sm text-white/70">{testimony.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection />
      <ContactSection />
      <FAQSchema />
    </>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">FAQ</p>
          <h2 className="text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
                {faq.question}
                <span className="text-blue-700">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSchema() {
  const schema = React.useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }),
    []
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ContactSection() {
  return (
    <section id="contacto" className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-white/70">Contacto</p>
          <h2 className="text-3xl font-bold">¿Necesitas ayuda antes de solicitar?</h2>
          <p className="mt-3 text-white/80">
            Escríbenos y te indicamos si podemos tramitar tu TSE por el canal sin certificado.
          </p>
        </div>
        <div className="space-y-4 text-white/90">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5" />
            <a className="hover:underline" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5" />
            <a className="hover:underline" href="https://wa.me/34600000000" target="_blank" rel="noreferrer">
              WhatsApp disponible 09:00-19:00h
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TSEPage() {
  usePageMetadata({
    title: "TSE sin certificado | Tarjeta Sanitaria Europea online | TramitesYA",
    description:
      "Pide tu TSE sin certificado. Presentamos por ti y te enviamos la referencia. 0 € oficial; pagas solo nuestra gestión.",
  });

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold text-slate-900">Tus trámites online, sin certificados</h1>
          <p className="mt-4 text-lg text-slate-600">
            Tramitamos por ti la Tarjeta Sanitaria Europea (TSE) con un simple formulario. Te enviamos la referencia de la Sede y la tarjeta llega a tu domicilio.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {BADGES.map((badge) => (
              <span key={badge} className="rounded-full bg-slate-100 px-4 py-1 text-sm text-slate-700">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <TSEForm />
          <div className="mt-6 space-y-2 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            <p>Este servicio tiene un coste de gestión (0 € oficial). Se cobra ahora con PayPal.</p>
            <p>Garantía: si no presentamos tu solicitud, reembolso 100%.</p>
          </div>
        </div>
      </section>
      <FAQSection />
      <FAQSchema />
    </>
  );
}

function GraciasPage() {
  const [orderId, setOrderId] = React.useState("");
  const location = useLocation();

  usePageMetadata({
    title: "Gracias por tu solicitud TSE | TramitesYA",
    description: "Confirmación de pedido registrado para la Tarjeta Sanitaria Europea.",
  });

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    setOrderId(params.get("order") ?? "");
  }, [location.search]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-20">
      <div className="max-w-2xl rounded-3xl border border-slate-100 bg-slate-50 p-10 text-center shadow-sm">
        <ShieldCheck className="mx-auto h-12 w-12 text-blue-700" />
        <h1 className="mt-4 text-3xl font-bold text-slate-900">Gracias. Tu solicitud TSE ha sido registrada.</h1>
        <p className="mt-4 text-slate-700">Nº pedido: {orderId || "-"}. Te escribiremos con la referencia de la Sede.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-blue-700 px-6 py-3 text-white shadow-lg"
        >
          Volver al inicio
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default App;
