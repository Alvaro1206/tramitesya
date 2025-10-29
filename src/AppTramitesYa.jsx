import React, { useState } from "react";
import { motion } from "framer-motion";
import SolicitudForm from '/src/components/SolicitudForm.jsx';
import CookieConsentBanner from '/src/components/CookieConsentBanner.jsx';
import {
  ShieldCheck,
  FileText,
  Clock,
  Lock,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  BadgeCheck,
  FileCheck2,
} from "lucide-react";


// Simple button component
const PrimaryButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 text-white shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-2xl border border-blue-700 px-5 py-3 text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 ${className}`}
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

function Home({ goPenales, goDelitos, goVida }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
            <span className="text-xl font-semibold text-slate-900">Trámites<span className="text-blue-700">YA</span></span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#como-funciona" className="text-sm text-slate-700 hover:text-slate-900">Cómo funciona</a>
            <a href="#tramites" className="text-sm text-slate-700 hover:text-slate-900">Trámites</a>
            <a href="#opiniones" className="text-sm text-slate-700 hover:text-slate-900">Opiniones</a>
            <a href="#contacto" className="text-sm text-slate-700 hover:text-slate-900">Contacto</a>
          </nav>
          <PrimaryButton onClick={goPenales}>
            Iniciar trámite
            <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: 24}}/>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="relative z-10">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              Solicita tus <span className="text-blue-200">certificados oficiales</span> online, sin colas ni errores
            </h1>
            <p className="mb-6 max-w-xl text-blue-100 md:text-lg">
              Tramitamos por ti certificados como <strong>Antecedentes Penales</strong>, <strong>Delitos Sexuales</strong> o <strong>Vida Laboral</strong> directamente en las plataformas oficiales.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              <StatChip icon={Lock} label="Pago seguro" />
              <StatChip icon={FileCheck2} label="Documento oficial" />
              <StatChip icon={Clock} label="Entrega 24–48 h" />
            </div>
            <div className="flex gap-3">
              <PrimaryButton onClick={goPenales}>
                Iniciar trámite ahora
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton onClick={() => document.getElementById('tramites')?.scrollIntoView({behavior:'smooth'})}>
                Ver trámites
              </SecondaryButton>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} className="relative z-10">
            <div className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur">
              <div className="mb-4 flex items-center gap-2 text-blue-100">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-sm">Estilo oficial y confiable</span>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Panel de solicitud</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="text-sm">Nombre<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Juan Pérez"/></label>
                  <label className="text-sm">DNI/NIE<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="12345678Z"/></label>
                </div>
                <label className="mt-3 block text-sm">Email<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="tu@email.com"/></label>
                <PrimaryButton className="mt-4 w-full" onClick={goPenales}>Solicitar Antecedentes Penales</PrimaryButton>
                <p className="mt-2 text-center text-xs text-slate-500">No somos un portal oficial. Servicio privado de gestión.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">Tramitar tus certificados nunca fue tan fácil</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[{
            icon: FileText,
            title: "Rellena el formulario",
            desc: "Completa tus datos y adjunta los documentos necesarios.",
          },{
            icon: ShieldCheck,
            title: "Nos encargamos del trámite",
            desc: "Gestionamos tu solicitud ante el organismo correspondiente.",
          },{
            icon: FileCheck2,
            title: "Recibe tu documento",
            desc: "Entrega por email en 24–48 h, firmado y validado.",
          }].map((it, i) => (
            <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <it.icon className="mb-3 h-7 w-7 text-blue-700" />
              <h3 className="mb-1 text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

{/* TRÁMITES */}
<section id="tramites" className="bg-white py-16">
<div className="mx-auto max-w-6xl px-4">
<h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">Trámites disponibles</h2>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
{/* Penales */}
<div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
<div className="mb-3 flex items-center gap-2">
<ShieldCheck className="h-5 w-5 text-blue-700" />
<h3 className="text-lg font-semibold">Certificado de Antecedentes Penales</h3>
</div>
<p className="mb-4 text-sm text-slate-600">Entrega en 24–48 h · Documento oficial</p>
<div className="mb-4 text-2xl font-bold text-slate-900">9,99 €</div>
<PrimaryButton onClick={goPenales} className="w-full">Solicitar ahora</PrimaryButton>
</div>
{/* Delitos sexuales */}
<div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
<div className="mb-3 flex items-center gap-2">
<FileText className="h-5 w-5 text-blue-700" />
<h3 className="text-lg font-semibold">Certificado de Delitos Sexuales</h3>
</div>
<p className="mb-4 text-sm text-slate-600">Entrega en 24–48 h · Documento oficial</p>
<div className="mb-4 text-2xl font-bold text-slate-900">9,99 €</div>
<SecondaryButton className="w-full" onClick={goDelitos}>Solicitar ahora</SecondaryButton>
</div>
{/* Vida laboral */}
<div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
<div className="mb-3 flex items-center gap-2">
<BadgeCheck className="h-5 w-5 text-blue-700" />
<h3 className="text-lg font-semibold">Informe de Vida Laboral</h3>
</div>
<p className="mb-4 text-sm text-slate-600">Entrega en 24 h · PDF</p>
<div className="mb-4 text-2xl font-bold text-slate-900">9,99 €</div>
<SecondaryButton className="w-full" onClick={goVida}>Solicitar ahora</SecondaryButton>
</div>
</div>
</div>
</section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">Tu tiempo vale más que una mañana haciendo trámites</h2>
            <p className="mb-6 text-slate-600">Atención personalizada, pagos seguros y cumplimiento del RGPD. Nos encargamos de todo para que recibas tu documento oficial sin complicaciones.</p>
            <ul className="space-y-3">
              {[
                "Atención por email y WhatsApp",
                "Pago seguro con tarjeta o Bizum",
                "RGPD: datos cifrados y acceso controlado",
                "Experiencia real en documentación oficial",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-700" />
                  <span className="text-slate-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Cifras de confianza</h3>
            <div className="grid grid-cols-3 gap-4">
              {[{n:"2.000+", l:"certificados al mes"},{n:"99%", l:"tasa de éxito"},{n:"24–48 h", l:"entrega estándar"}].map((s, i) => (
                <div key={i} className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200">
                  <div className="text-2xl font-bold text-slate-900">{s.n}</div>
                  <div className="text-xs text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="opiniones" className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">Opiniones reales</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[{
              quote: "Pedí mi certificado de penales y lo recibí en menos de un día. Rápido y sin complicaciones.",
              name: "María L., Madrid",
            },{
              quote: "No tenía certificado digital y me lo resolvieron enseguida. Muy recomendable.",
              name: "Sergio T., Barcelona",
            }].map((op, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-2 flex gap-1 text-yellow-500">{'★★★★★'}</div>
                <p className="text-slate-700">“{op.quote}”</p>
                <div className="mt-3 text-sm text-slate-500">— {op.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

<form
  action="https://formspree.io/f/xzzjojvp"
  method="POST"
  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4"
>
  {/* meta opcional */}
  <input type="hidden" name="_subject" value="Consulta web - TramitesYA" />
  <input type="hidden" name="_language" value="es" />
  {/* tras enviar, redirige para mostrar gracias */}
  <input type="hidden" name="_next" value="http://localhost:5173/?consulta=ok" />

  <label className="text-sm block">
    Nombre
    <input
      name="nombre"
      required
      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
      placeholder="Tu nombre"
    />
  </label>

  <label className="text-sm block">
    Email
    <input
      type="email"
      name="email"
      required
      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
      placeholder="tu@email.com"
    />
  </label>

  <label className="text-sm block">
    Mensaje
    <textarea
      name="mensaje"
      rows="4"
      required
      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
      placeholder="Cuentanos en que podemos ayudarte"
    />
  </label>

  <label className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
    <input
      type="checkbox"
      name="acepta_politica_privacidad"
      value="true"
      required
      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
    />
    <span>
      <span className="font-semibold">
        He leido y acepto la Politica de Privacidad y autorizo el tratamiento de mis datos personales para la tramitacion del informe solicitado.
      </span>
      <span className="mt-2 block text-xs text-slate-600">
        Consulta la <a className="underline text-blue-700" href="/politica-privacidad" target="_blank" rel="noreferrer">Politica de Privacidad</a>: explicamos que datos recogemos (incluida la imagen del DNI), para que los utilizamos (gestion del tramite), con quien los compartimos (Seguridad Social u otros organismos competentes), como los protegemos y durante cuanto tiempo los conservamos. Puedes ejercer tus derechos de acceso, supresion y demas escribiendo a <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">tramitesyaweb@gmail.com</a>.
      </span>
    </span>
  </label>

  {/* IMPORTANTE: submit */}
  <PrimaryButton type="submit" className="w-full">Enviar consulta</PrimaryButton>
</form>


      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm">
            © 2025 TramitesYA.com · No somos un portal oficial del Gobierno. Ofrecemos un servicio privado de gestión y asistencia en trámites administrativos.
          </p>
          <div className="mt-2 flex gap-4 text-sm underline">
            <a href="#" onClick={(e)=>e.preventDefault()}>Aviso Legal</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Política de Privacidad</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );

  function newFunction() {
    return <SolicitudForm tipoTramite="general" />;
  }
}

function PenalesPage({ goHome }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
            <span className="text-xl font-semibold text-slate-900">Trámites<span className="text-blue-700">YA</span></span>
          </div>
          <SecondaryButton onClick={goHome}>Volver a inicio</SecondaryButton>
        </div>
      </header>

      {/* Encabezado */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Certificado de Antecedentes Penales online</h1>
          <p className="mt-2 max-w-3xl text-slate-600">Evita errores y esperas. Gestionamos tu solicitud ante el Ministerio de Justicia y te entregamos el documento oficial en 24–48 horas.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">Entrega 24–48 h</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Documento oficial</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Pago seguro</span>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-600">Precio del servicio</div>
                <div className="text-3xl font-bold text-slate-900">9,99 €</div>
              </div>
              <PrimaryButton onClick={() => document.getElementById('form-penales')?.scrollIntoView({behavior:'smooth'})}>
                Solicitar certificado ahora
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es y para qué sirve */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">¿Qué es?</h2>
            <p className="text-slate-700">El <strong>certificado de antecedentes penales</strong> acredita si una persona tiene o no antecedentes inscritos en el Registro Central de Penados. Es habitual para oposiciones, visados, adopciones, empleos con menores y otros procesos oficiales.</p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Documentación necesaria</h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700"/> DNI o NIE escaneado (anverso y reverso).</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700"/> Autorización firmada digitalmente (te la enviamos al solicitarlo).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Cómo funciona</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[{
              icon: FileText, t: "Completa el formulario", d:"Indícanos tus datos y adjunta tu DNI/NIE."},
              {icon: ShieldCheck, t: "Tramitamos por ti", d:"Solicitamos el certificado en la sede oficial."},
              {icon: FileCheck2, t: "Recibe el documento", d:"Te lo enviamos firmado y validado en PDF."},
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <s.icon className="mb-3 h-6 w-6 text-blue-700"/>
                <div className="text-lg font-semibold text-slate-900">{s.t}</div>
                <div className="text-slate-600">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="font-semibold text-slate-900">¿Este servicio es oficial?</div>
            <div className="mt-2 text-slate-700">No pertenecemos al Ministerio de Justicia. Somos una gestoría online que tramita tu solicitud por ti.</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="font-semibold text-slate-900">¿El certificado es válido?</div>
            <div className="mt-2 text-slate-700">Sí, se emite desde la sede electrónica oficial y tiene plena validez jurídica.</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="font-semibold text-slate-900">¿Qué ocurre si no puede emitirse?</div>
            <div className="mt-2 text-slate-700">Si el trámite no puede realizarse por causa imputable a nosotros, te devolvemos el importe íntegro.</div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="form-penales" className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Solicitar certificado</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm">Nombre y apellidos<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Juan Pérez"/></label>
              <label className="text-sm">DNI/NIE<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="12345678Z"/></label>
              <label className="text-sm md:col-span-2">Email<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="tu@email.com"/></label>
              <label className="text-sm md:col-span-2">Adjuntar DNI/NIE (PDF/JPG)<br/><input type="file" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"/></label>
            </div>
            <div className="mt-4 text-xs text-slate-600">
              Al enviar aceptas la <a className="underline" href="#" onClick={(e)=>e.preventDefault()}>Política de Privacidad</a> y autorizas a TrámitesYA a gestionar tu solicitud en tu nombre.
            </div>
            <PrimaryButton className="mt-4 w-full">Pagar y tramitar (9,99 €)</PrimaryButton>
            <p className="mt-2 text-center text-xs text-slate-500">Pago seguro · Encriptación SSL</p>
          </div>
          <div className="mt-6 text-center">
            <SecondaryButton onClick={goHome}>Volver al inicio</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm">
            © 2025 TramitesYA.com · No somos un portal oficial del Gobierno. Ofrecemos un servicio privado de gestión y asistencia en trámites administrativos.
          </p>
          <div className="mt-2 flex gap-4 text-sm underline">
            <a href="#" onClick={(e)=>e.preventDefault()}>Aviso Legal</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Política de Privacidad</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DelitosPage({ goHome }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
            <span className="text-xl font-semibold text-slate-900">Trámites<span className="text-blue-700">YA</span></span>
          </div>
          <SecondaryButton onClick={goHome}>Volver a inicio</SecondaryButton>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Certificado de Delitos Sexuales online</h1>
          <p className="mt-2 max-w-3xl text-slate-600">Tramitamos tu solicitud ante el Registro Central de Delincuentes Sexuales. Documento oficial válido para trabajar con menores y otros procedimientos.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">Entrega 24–48 h</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Documento oficial</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Pago seguro</span>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-600">Precio del servicio</div>
                <div className="text-3xl font-bold text-slate-900">9,99 €</div>
              </div>
              <PrimaryButton onClick={() => document.getElementById('form-delitos')?.scrollIntoView({behavior:'smooth'})}>
                Solicitar certificado ahora
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">¿Qué es?</h2>
            <p className="text-slate-700">El <strong>certificado de delitos de naturaleza sexual</strong> acredita que no constan antecedentes por este tipo de delitos. Se solicita para empleos con menores, oposiciones y otros trámites.</p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Documentación necesaria</h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700"/> DNI o NIE escaneado.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700"/> Autorización firmada digitalmente (te la enviamos al solicitarlo).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Cómo funciona</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[{icon: FileText, t: "Completa el formulario", d:"Indícanos tus datos y adjunta tu DNI/NIE."}, {icon: ShieldCheck, t: "Tramitamos por ti", d:"Solicitamos el certificado en la sede oficial."}, {icon: FileCheck2, t: "Recibe el documento", d:"Te lo enviamos firmado y validado en PDF."}].map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <s.icon className="mb-3 h-6 w-6 text-blue-700"/>
                <div className="text-lg font-semibold text-slate-900">{s.t}</div>
                <div className="text-slate-600">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form-delitos" className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Solicitar certificado</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm">Nombre y apellidos<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Tu nombre"/></label>
              <label className="text-sm">DNI/NIE<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="12345678Z"/></label>
              <label className="text-sm md:col-span-2">Email<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="tu@email.com"/></label>
              <label className="text-sm md:col-span-2">Adjuntar DNI/NIE (PDF/JPG)<br/><input type="file" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"/></label>
            </div>
            <div className="mt-4 text-xs text-slate-600">Al enviar aceptas la <a className="underline" href="#" onClick={(e)=>e.preventDefault()}>Política de Privacidad</a> y autorizas a TrámitesYA a gestionar tu solicitud en tu nombre.</div>
            <PrimaryButton className="mt-4 w-full">Pagar y tramitar (9,99 €)</PrimaryButton>
            <p className="mt-2 text-center text-xs text-slate-500">Pago seguro · Encriptación SSL</p>
          </div>
          <div className="mt-6 text-center">
            <SecondaryButton onClick={goHome}>Volver al inicio</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm">© 2025 TramitesYA.com · No somos un portal oficial del Gobierno. Servicio privado de gestión y asistencia.</p>
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
            <span className="text-xl font-semibold text-slate-900">Trámites<span className="text-blue-700">YA</span></span>
          </div>
          <SecondaryButton onClick={goHome}>Volver a inicio</SecondaryButton>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Informe de Vida Laboral</h1>
          <p className="mt-2 max-w-3xl text-slate-600">Si no tienes certificado digital o no sabes cómo pedirla, la conseguimos por ti y te la enviamos en PDF.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">Entrega 24 h</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">PDF oficial</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Pago seguro</span>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-600">Precio del servicio</div>
                <div className="text-3xl font-bold text-slate-900">9,99 €</div>
              </div>
              <PrimaryButton onClick={() => document.getElementById('form-vida')?.scrollIntoView({behavior:'smooth'})}>
                Solicitar informe ahora
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">¿Qué es?</h2>
            <p className="text-slate-700">El <strong>informe de vida laboral</strong> refleja tus cotizaciones a la Seguridad Social. Suele pedirse para empleos, becas y trámites administrativos.</p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Datos necesarios</h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700"/> Nombre y apellidos, DNI/NIE.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700"/> Teléfono y email de contacto.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Cómo funciona</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[{icon: FileText, t: "Completa el formulario", d:"Indícanos tus datos básicos."}, {icon: ShieldCheck, t: "Tramitamos por ti", d:"Solicitamos el informe en la S.S."}, {icon: FileCheck2, t: "Recibe el documento", d:"Te lo enviamos en PDF a tu email."}].map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <s.icon className="mb-3 h-6 w-6 text-blue-700"/>
                <div className="text-lg font-semibold text-slate-900">{s.t}</div>
                <div className="text-slate-600">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form-vida" className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Solicitar informe</h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm">Nombre y apellidos<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Tu nombre"/></label>
              <label className="text-sm">DNI/NIE<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="12345678Z"/></label>
              <label className="text-sm md:col-span-2">Email<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="tu@email.com"/></label>
              <label className="text-sm md:col-span-2">Teléfono<br/><input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Tu móvil"/></label>
            </div>
            <div className="mt-4 text-xs text-slate-600">Al enviar aceptas la <a className="underline" href="#" onClick={(e)=>e.preventDefault()}>Política de Privacidad</a> y autorizas a TrámitesYA a gestionar tu solicitud.</div>
            <PrimaryButton className="mt-4 w-full">Pagar y tramitar (9,99 €)</PrimaryButton>
            <p className="mt-2 text-center text-xs text-slate-500">Pago seguro · Encriptación SSL</p>
          </div>
          <div className="mt-6 text-center">
            <SecondaryButton onClick={goHome}>Volver a inicio</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm">© 2025 TramitesYA.com · No somos un portal oficial del Gobierno. Servicio privado de gestión y asistencia.</p>
        </div>
      </footer>
    </div>
  );
}

export default function TramitesYA() {
  const [view, setView] = useState("home");
  let content = null;

  if (view === "home") {
    content = (
      <Home
        goPenales={() => setView("penales")}
        goDelitos={() => setView("delitos")}
        goVida={() => setView("vida")}
      />
    );
  } else if (view === "penales") {
    content = <PenalesPage goHome={() => setView("home")} />;
  } else if (view === "delitos") {
    content = <DelitosPage goHome={() => setView("home")} />;
  } else if (view === "vida") {
    content = <VidaLaboralPage goHome={() => setView("home")} />;
  }

  return (
    <>
      {content}
      <CookieConsentBanner />
    </>
  );
}


