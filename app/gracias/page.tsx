import Link from "next/link";

export default function GraciasPage({ searchParams }: { searchParams?: { order?: string } }) {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">¡Gracias!</h1>
      <p className="mt-2 text-slate-600">Tu solicitud TSE ha sido registrada correctamente.</p>
      {searchParams?.order && (
        <p className="mt-3 text-sm text-slate-500">
          Nº pedido: <span className="font-semibold text-slate-900">{searchParams.order}</span>
        </p>
      )}
      <Link href="/" className="mt-6 inline-block rounded-xl bg-indigo-600 px-4 py-2 text-white">
        Volver al inicio
      </Link>
    </main>
  );
}
