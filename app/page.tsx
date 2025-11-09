import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-16 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Trámites YA</p>
      <h1 className="text-4xl font-bold leading-tight text-slate-900">
        Tarjeta Sanitaria Europea sin certificado digital
      </h1>
      <p className="text-lg text-slate-600">
        Gestionamos tu solicitud TSE directamente en la Seguridad Social. Solo tienes que rellenar un formulario y
        pagar 9,90€ por la gestión.
      </p>
      <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/tse"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-500"
        >
          Solicitar TSE
        </Link>
        <Link href="/#faq" className="rounded-xl border border-slate-200 px-6 py-3 text-base font-semibold text-indigo-600">
          Preguntas frecuentes
        </Link>
      </div>
    </main>
  );
}
