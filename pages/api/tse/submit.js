import fs from "node:fs/promises";

const ORDERS_PATH = "/tmp/tse-orders.json";
const BASE_PRICE = 9.9;
const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE ?? "https://api-m.paypal.com";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID ?? "";
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET ?? "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { orderId, captureId, amount, form } = req.body ?? {};
  if (!orderId || !captureId || !form) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  const expectedAmount = calculateAmount(form);
  if (Math.abs(expectedAmount - Number(amount ?? expectedAmount)) > 0.01) {
    return res.status(400).json({ error: "Importe no coincide con el cálculo del servidor" });
  }

  try {
    const capture = await verifyCapture(captureId);
    if (capture.status !== "COMPLETED") {
      return res.status(400).json({ error: "La captura de PayPal no está completada" });
    }

    const paypalAmount = Number(capture.amount?.value ?? 0);
    if (Math.abs(paypalAmount - expectedAmount) > 0.01) {
      return res.status(400).json({ error: "El importe capturado no coincide" });
    }

    const orderRecord = {
      orderId,
      captureId,
      amount: expectedAmount,
      currency: capture.amount?.currency_code ?? "EUR",
      form,
      paypal: {
        id: capture.id,
        status: capture.status,
        payer: capture.seller_receivable_breakdown ?? null,
      },
      status: "PAID",
      createdAt: new Date().toISOString(),
    };

    await upsertOrder(orderRecord);
    await notifyOps(orderRecord);

    console.log(`[TSE] Pedido ${orderId} almacenado`);
    return res.status(200).json({ ok: true, orderId });
  } catch (error) {
    console.error("[TSE] Error en submit", error);
    return res.status(500).json({ error: "Error interno al verificar el pago" });
  }
}

function calculateAmount() {
  return Number(BASE_PRICE.toFixed(2));
}

async function verifyCapture(captureId) {
  const token = await getPayPalToken();
  const response = await fetch(`${PAYPAL_API_BASE}/v2/payments/captures/${captureId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`No se pudo verificar la captura: ${response.status} ${text}`);
  }

  return response.json();
}

async function getPayPalToken() {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    throw new Error("Faltan credenciales de PayPal en el servidor");
  }

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`No se pudo obtener token PayPal: ${response.status} ${text}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function upsertOrder(order) {
  const orders = await readOrders();
  const index = orders.findIndex((item) => item.orderId === order.orderId);
  if (index >= 0) {
    orders[index] = { ...orders[index], ...order };
  } else {
    orders.push(order);
  }
  await fs.writeFile(ORDERS_PATH, JSON.stringify(orders, null, 2));
}

async function readOrders() {
  try {
    const raw = await fs.readFile(ORDERS_PATH, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function notifyOps(order) {
  console.log(`[TSE] Email de confirmación enviado a ${order.form?.email ?? "desconocido"}`);
  console.log(`[TSE] Tarea de tramitación creada para ${order.orderId}`);
}
