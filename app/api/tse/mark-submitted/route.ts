export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getPrisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { orderId, ref } = await req.json();

    if (!orderId || !ref) {
      return new Response(JSON.stringify({ ok: false, error: "Datos incompletos" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const prisma = getPrisma();
    await prisma.order.update({
      where: { id: orderId },
      data: { status: "SUBMITTED", sedeRef: ref },
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al marcar orden SUBMITTED", error);
    return new Response(JSON.stringify({ ok: false, error: "Error interno" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
