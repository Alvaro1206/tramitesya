import { buffer } from "micro";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2022-11-15",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET ?? "";

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const buf = await buffer(req);
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, signature, endpointSecret);
  } catch (err) {
    console.error("Error verifying webhook signature:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { email, name } = session.customer_details ?? {};
    const tramite = session.metadata?.tipo_tramite ?? "desconocido";

    const { error } = await supabase.from("pagos").insert([
      {
        email,
        nombre: name,
        tramite,
        fecha_pago: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Error al guardar en Supabase:", error);
      return res.status(500).json({ error: error.message });
    }

    console.log(`Pago recibido de ${name} (${email}) para ${tramite}`);
  }

  res.status(200).json({ received: true });
}
