import fs from "node:fs/promises";

const ORDERS_PATH = "/tmp/tse-orders.json";
const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE ?? "https://api-m.paypal.com";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID ?? "";
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET ?? "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { captureId, amount, reason } = req.body ?? {};
  if (!captureId) {
    return res.status(400).json({ error: "captureId requerido" });
  }

  let parsedAmount;
  if (amount !== undefined) {
    parsedAmount = Number(amount);
    if (Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({ error: "Importe de reembolso inválido" });
    }
  }

  try {
    const refund = await requestRefund(captureId, parsedAmount, reason);
    await markRefund(captureId, parsedAmount ?? Number(refund.amount?.value ?? 0), refund.status);
    console.log(`[TSE] Reembolso ${refund.id} emitido para ${captureId}`);
    return res.status(200).json({ ok: true, refund });
  } catch (error) {
    console.error("[TSE] Error en refund", error);
    return res.status(500).json({ error: "No se pudo procesar el reembolso" });
  }
}

async function requestRefund(captureId, amount, note) {
  const token = await getPayPalToken();
  const body = {};
  if (amount) {
    body.amount = { value: amount.toFixed(2), currency_code: "EUR" };
  }
  if (note) {
    body.note_to_payer = note;
  }

  const response = await fetch(`${PAYPAL_API_BASE}/v2/payments/captures/${captureId}/refund`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: Object.keys(body).length ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`PayPal refund error: ${response.status} ${text}`);
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

async function markRefund(captureId, amount, status) {
  try {
    const orders = await readOrders();
    const index = orders.findIndex((order) => order.captureId === captureId);
    if (index === -1) {
      return;
    }

    const previous = orders[index];
    const newStatus = amount >= previous.amount ? "REFUNDED" : "PARTIAL_REFUND";
    orders[index] = {
      ...previous,
      status: newStatus,
      refund: {
        amount,
        status,
        processedAt: new Date().toISOString(),
      },
    };

    await fs.writeFile(ORDERS_PATH, JSON.stringify(orders, null, 2));
  } catch (error) {
    console.warn("[TSE] No se pudo actualizar el registro tras el reembolso", error);
  }
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
