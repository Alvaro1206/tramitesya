
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { VidaLaboralForm } from "/src/components/VidaLaboralForm.jsx";
import { NotaSimpleForm } from "/src/components/NotaSimpleForm.jsx";
import { InformeDGTForm } from "/src/components/InformeDGTForm.jsx";
import AvisoLegal from "/src/pages/AvisoLegal.jsx";
import PoliticaPrivacidad from "/src/pages/PoliticaPrivacidad.jsx";
import CookiesPage from "/src/pages/Cookies.jsx";
import {
  ShieldCheck,
  FileText,
  Clock,
  Lock,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Mail,
  Car,
  BadgeCheck,
} from "lucide-react";

const PrimaryButton = ({ children, onClick, className = "", type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className={["inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400", className]
      .join(" ")
      .trim()}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={["inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-700 px-5 py-3 text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200", className]
      .join(" ")
      .trim()}
  >
    {children}
  </button>
);

const StatChip = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white">
    <Icon className="h-4 w-4" />
    <span className="text-sm">{label}</span>
  </div>
);
function Home({ goVida, goNota, goInforme }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
            <span className="text-xl font-semibold text-slate-900">
              Tramites<span className="text-blue-700">YA</span>
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#servicios" className="transition hover:text-slate-900">
              Servicios
            </a>
            <a href="#proceso" className="transition hover:text-slate-900">
              Proceso
            </a>
            <a href="#opiniones" className="transition hover:text-slate-900">
              Opiniones
            </a>
            <a href="#contacto" className="transition hover:text-slate-900">
              Contacto
            </a>
          </nav>
          <PrimaryButton onClick={goVida}>
            Iniciar tramite
            <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: 24 }}
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              Tus tramites oficiales online en 24-48 h
            </h1>
            <p className="mb-6 max-w-xl text-blue-100 md:text-lg">
              Gestionamos por ti el <strong>Informe de Vida Laboral</strong>, la <strong>Nota Simple Registral</strong> y el <strong>Informe DGT completo</strong> sin desplazamientos ni certificados.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              <StatChip icon={Lock} label="Pago seguro" />
              <StatChip icon={FileCheck2} label="Documento oficial" />
              <StatChip icon={Clock} label="Entrega 24-48 h" />
            </div>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton onClick={goVida}>
                Solicitar Vida Laboral
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton
                onClick={() =>
                  document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver servicios
              </SecondaryButton>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10"
          >
            <div className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur">
              <div className="mb-4 flex items-center gap-2 text-blue-100">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-sm">Equipo de gestion especializado</span>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Tramites destacados</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="rounded-xl border border-slate-200 p-3">
                    <div className="mb-1 font-semibold text-slate-900">Informe Vida Laboral</div>
                    <p className="text-xs">PDF oficial entregado por correo.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-3">
                    <div className="mb-1 font-semibold text-slate-900">Nota Simple Registral</div>
                    <p className="text-xs">Ideal para compraventas y herencias.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-3">
                    <div className="mb-1 font-semibold text-slate-900">Informe DGT completo</div>
                    <p className="text-xs">Comprueba cargas e ITV antes de comprar.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="proceso" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">Tramitar con TramitesYA es sencillo</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: FileText, title: "Completa el formulario", desc: "Recopilamos solo los datos imprescindibles para tu tramite." },
              { icon: ShieldCheck, title: "Gestionamos tu solicitud", desc: "Nuestros gestores la presentan en el organismo oficial." },
              { icon: FileCheck2, title: "Recibe el PDF oficial", desc: "Te enviamos el documento validado en 24-48 horas." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <item.icon className="mb-3 h-6 w-6 text-blue-700" />
                <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">Servicios disponibles</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-blue-700" />
                <h3 className="text-lg font-semibold text-slate-900">Informe Vida Laboral</h3>
              </div>
              <p className="mb-4 text-sm text-slate-600">Certificado oficial en PDF listo para presentar.</p>
              <div className="mb-4 text-2xl font-bold text-slate-900">9,99 EUR</div>
              <PrimaryButton className="w-full" onClick={goVida}>
                Solicitar
              </PrimaryButton>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-700" />
                <h3 className="text-lg font-semibold text-slate-900">Nota Simple Registral</h3>
              </div>
              <p className="mb-4 text-sm text-slate-600">Localizamos la finca, comprobamos cargas y enviamos la nota oficial.</p>
              <div className="mb-4 text-2xl font-bold text-slate-900">14,99 EUR</div>
              <SecondaryButton className="w-full" onClick={goNota}>
                Solicitar
              </SecondaryButton>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <Car className="h-5 w-5 text-blue-700" />
                <h3 className="text-lg font-semibold text-slate-900">Informe DGT completo</h3>
              </div>
              <p className="mb-4 text-sm text-slate-600">Conoce titularidad, cargas, multas e ITV antes de comprar.</p>
              <div className="mb-4 text-2xl font-bold text-slate-900">12,99 EUR</div>
              <SecondaryButton className="w-full" onClick={goInforme}>
                Solicitar
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">Gestion profesional sin salir de casa</h2>
            <p className="mb-6 text-slate-600">
              Trabajamos a diario con la Seguridad Social, los Registros de la Propiedad y la DGT. Tus datos se tratan con seguridad y solo se usan para completar tu solicitud.
            </p>
            <ul className="space-y-3 text-slate-700">
              {[
                "Atencion personalizada por email y WhatsApp",
                "Pago seguro con tarjeta o Bizum",
                "Cumplimos RGPD: cifrado y acceso restringido",
                "Experiencia real tramitando documentos oficiales",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-none text-blue-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Cifras que nos avalan</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2.000+", label: "documentos cada mes" },
                { value: "99%", label: "tasa de exito" },
                { value: "24-48 h", label: "entrega habitual" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opiniones" className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">Opiniones reales</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                quote: "Solicite mi informe de vida laboral y lo recibi en mi correo ese mismo dia. Gestion muy rapida.",
                name: "Maria L. - Madrid",
              },
              {
                quote: "Necesitaba una nota simple urgente y se encargaron de todo.",
                name: "Sergio T. - Barcelona",
              },
              {
                quote: "Antes de comprar un coche pedi el informe DGT y detectaron un embargo.",
                name: "Laura G. - Valencia",
              },
              {
                quote: "No tengo certificado digital y TramitesYA resuelve mis tramites cuando lo necesito.",
                name: "Juan M. - Sevilla",
              },
            ].map((opinion) => (
              <div key={opinion.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-slate-700">"{opinion.quote}"</p>
                <div className="mt-4 text-sm font-semibold text-slate-900">{opinion.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contacto" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">Tienes dudas?</h2>
              <p className="mb-6 text-slate-600">
                Escribenos antes de iniciar tu tramite. Respondemos la mayoria de consultas en menos de dos horas laborables.
              </p>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-700" />
                  <a className="underline transition hover:text-blue-700" href="mailto:tramitesyaweb@gmail.com">
                    tramitesyaweb@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">Enviar consulta rapida</h3>
              <form className="space-y-4" method="POST" action="https://formspree.io/f/xzzjojvp">
                <input type="hidden" name="_subject" value="Consulta TramitesYA" />
                <input type="hidden" name="_language" value="es" />
                <label className="text-sm">
                  Nombre
                  <input
                    name="nombre"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="text-sm">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="tu@email.com"
                  />
                </label>
                <label className="text-sm">
                  Mensaje
                  <textarea
                    name="mensaje"
                    rows={4}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Cuentanos en que podemos ayudarte"
                  />
                </label>
                <PrimaryButton type="submit" className="w-full">
                  Enviar consulta
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-6xl px-4 text-sm">
          <p>(c) 2025 TramitesYA.com - Servicio privado de gestion y asistencia. No somos un portal oficial del Gobierno.</p>
          <div className="mt-2 flex gap-4 underline">
            <Link to="/aviso-legal">Aviso legal</Link>
            <Link to="/politica-privacidad">Politica de privacidad</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
function VidaLaboralPage({ goHome }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
            <span className="text-xl font-semibold text-slate-900">
              Tramites<span className="text-blue-700">YA</span>
            </span>
          </div>
          <SecondaryButton onClick={goHome}>Volver al inicio</SecondaryButton>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Informe oficial de Vida Laboral</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Entregamos el PDF oficial emitido por la Seguridad Social en 24-48 horas laborables. Util para empleos, oposiciones o becas.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm text-slate-600">Precio del servicio</div>
                <div className="text-3xl font-bold text-slate-900">9,99 EUR</div>
              </div>
              <PrimaryButton
                onClick={() =>
                  document.getElementById("form-vida")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Solicitar ahora
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Que es?</h2>
            <p className="text-slate-700">
              El informe de vida laboral resume tus cotizaciones y periodos de alta en la Seguridad Social. Sirve para acreditar experiencia y derechos laborales.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Documentacion necesaria</h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                Nombre completo, DNI o NIE y correo de entrega.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                Copia del documento identificativo.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Proceso en 3 pasos</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: FileText, title: "Rellena tus datos", desc: "Adjunta el DNI y confirma el email de entrega." },
              { icon: ShieldCheck, title: "Tramitamos por ti", desc: "Solicitamos el documento en la Seguridad Social." },
              { icon: FileCheck2, title: "Recibe el PDF oficial", desc: "Te lo enviamos firmado y validado en tu correo." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <item.icon className="mb-3 h-6 w-6 text-blue-700" />
                <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form-vida" className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Solicitar informe</h2>
          <VidaLaboralForm />
          <p className="mt-4 text-center text-xs text-slate-500">Pago seguro - Encriptacion SSL</p>
          <div className="mt-6 text-center">
            <SecondaryButton onClick={goHome}>Volver al inicio</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm">(c) 2025 TramitesYA - Servicio privado de gestion y asistencia.</p>
        </div>
      </footer>
    </div>
  );
}
function NotaSimplePage({ goHome }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
            <span className="text-xl font-semibold text-slate-900">
              Tramites<span className="text-blue-700">YA</span>
            </span>
          </div>
          <SecondaryButton onClick={goHome}>Volver al inicio</SecondaryButton>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Nota Simple Registral</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Entregamos la nota simple oficial del Registro de la Propiedad para conocer titularidad, cargas e hipotecas de una finca.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm text-slate-600">Precio del servicio</div>
                <div className="text-3xl font-bold text-slate-900">14,99 EUR</div>
              </div>
              <PrimaryButton
                onClick={() =>
                  document.getElementById("form-nota")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Solicitar ahora
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Que incluye?</h2>
            <p className="text-slate-700">
              Titulares, descripcion de la finca, cargas vigentes, hipotecas, embargos e incidencias. Documento firmado digitalmente.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Datos necesarios</h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                Nombre completo y DNI/NIE del solicitante.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                Direccion de la finca o referencia catastral, municipio y provincia.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Proceso de gestion</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: FileText, title: "Recibimos tu solicitud", desc: "Verificamos la informacion y ubicamos la finca." },
              { icon: ShieldCheck, title: "Consultamos el Registro", desc: "Solicitamos la nota en el Registro de la Propiedad." },
              { icon: FileCheck2, title: "Te enviamos la nota", desc: "Recibes el PDF oficial por correo electronico." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <item.icon className="mb-3 h-6 w-6 text-blue-700" />
                <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form-nota" className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Solicitar nota simple</h2>
          <NotaSimpleForm />
          <p className="mt-4 text-center text-xs text-slate-500">Pago seguro - Encriptacion SSL</p>
          <div className="mt-6 text-center">
            <SecondaryButton onClick={goHome}>Volver al inicio</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm">(c) 2025 TramitesYA.com - Servicio privado de gestion y asistencia.</p>
        </div>
      </footer>
    </div>
  );
}
function InformeDGTPage({ goHome }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
            <span className="text-xl font-semibold text-slate-900">
              Tramites<span className="text-blue-700">YA</span>
            </span>
          </div>
          <SecondaryButton onClick={goHome}>Volver al inicio</SecondaryButton>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Informe DGT completo</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Conoce el historial del vehiculo antes de comprar o vender. El informe oficial incluye titularidad, cargas, incidencias, kilometraje e ITV.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm text-slate-600">Precio del servicio</div>
                <div className="text-3xl font-bold text-slate-900">12,99 EUR</div>
              </div>
              <PrimaryButton
                onClick={() =>
                  document.getElementById("form-informe")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Solicitar ahora
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Que incluye?</h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                Datos tecnicos, numero de bastidor y emisiones.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                Titular actual, cargas, embargos, precintos y leasing.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                Historial de ITV, kilometraje declarado y posibles incidencias.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Requisitos para solicitarlo</h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                Matricula del vehiculo o numero de bastidor.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                Nombre completo y DNI/NIE del solicitante.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Confianza antes de comprar o vender</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: FileText, title: "Solicita tu informe", desc: "Recopilamos los datos basicos y preparamos la tramitacion." },
              { icon: ShieldCheck, title: "Revisamos incidencias", desc: "Te avisamos si detectamos cargas, multas o bloqueos relevantes." },
              { icon: FileCheck2, title: "Recibe el PDF sellado", desc: "Documento oficial de la DGT listo para compartir." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <item.icon className="mb-3 h-6 w-6 text-blue-700" />
                <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form-informe" className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Solicitar informe DGT</h2>
          <InformeDGTForm />
          <p className="mt-4 text-center text-xs text-slate-500">Pago seguro - Encriptacion SSL</p>
          <div className="mt-6 text-center">
            <SecondaryButton onClick={goHome}>Volver al inicio</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm">(c) 2025 TramitesYAweb - Servicio privado de gestion y asistencia.</p>
        </div>
      </footer>
    </div>
  );
}
function HomeRoute() {
  const navigate = useNavigate();
  return (
    <Home
      goVida={() => navigate("/vida-laboral")}
      goNota={() => navigate("/nota-simple")}
      goInforme={() => navigate("/informe-dgt")}
    />
  );
}

function VidaLaboralRoute() {
  const navigate = useNavigate();
  return <VidaLaboralPage goHome={() => navigate("/")} />;
}

function NotaSimpleRoute() {
  const navigate = useNavigate();
  return <NotaSimplePage goHome={() => navigate("/")} />;
}

function InformeDGTRoute() {
  const navigate = useNavigate();
  return <InformeDGTPage goHome={() => navigate("/")} />;
}

export default function TramitesYA() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/vida-laboral" element={<VidaLaboralRoute />} />
        <Route path="/nota-simple" element={<NotaSimpleRoute />} />
        <Route path="/informe-dgt" element={<InformeDGTRoute />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
    </Router>
  );
}
