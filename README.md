# Trámites YA – Tarjeta Sanitaria Europea (TSE)

Aplicación Next.js (App Router + TypeScript + Tailwind) desplegable en Vercel. Gestiona solicitudes de la Tarjeta Sanitaria Europea sin beneficiarios, cobra la gestión con PayPal Business y guarda los datos cifrados en Postgres mediante Prisma.

## Stack

- Next.js 14 (App Router) + React 18
- Tailwind CSS
- Prisma ORM sobre Postgres (Neon / Vercel Postgres)
- Pasarela PayPal (captura directa)
- Cifrado AES-256-GCM para DNI/NIE/NAF

---

## 1. Crear la base de datos (Neon o Vercel Postgres)

1. **Neon**: crea un nuevo proyecto PostgreSQL → copia la `postgresql://` connection string con `sslmode=require`.  
   **Vercel Postgres**: desde el dashboard crea la base y pulsa “Copy Connection String”.
2. Ajusta los parámetros regionales deseados.
3. Si usas Neon, crea al menos un branch `main` y habilita autosuspend (opcional).
4. Guarda la cadena completa porque se utilizará en Prisma (`POSTGRES_URL`).

---

## 2. Variables de entorno

1. Duplica el archivo `.env.local.example` → `.env.local`.
2. Rellena:
   - `POSTGRES_URL`: cadena copiada de Neon/Vercel Postgres.
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: Client ID del PayPal app (Sandbox o Prod) visible en el dashboard para poder cargar el SDK en el navegador.
   - `PAYPAL_CLIENT_ID` y `PAYPAL_SECRET`: credenciales Server-to-Server de la misma app de PayPal.
   - `PAYPAL_API_BASE`: `https://api-m.sandbox.paypal.com` en pruebas, cambia a `https://api-m.paypal.com` en producción.
   - `DATA_ENC_SECRET`: secreto hexadecimal (>32 bytes) usado para derivar la clave AES-256-GCM.
3. En Vercel replica exactamente las mismas variables (usa `.env.local` como referencia).

---

## 3. Prisma y base de datos

```bash
npm install                  # instala dependencias
npm run prisma:generate      # genera el cliente Prisma
npm run prisma:migrate       # ejecuta `prisma migrate dev` (crea/actualiza el esquema)
npm run prisma:studio        # (opcional) abre Prisma Studio para ver Orders/Customers/Addresses
```

Cada registro de `Customer` almacena `docEnc` y `nafEnc` cifrados (IV|TAG|DATA) usando AES-256-GCM.

---

## 4. Arrancar y compilar

```bash
npm run dev      # entorno local, http://localhost:3000
npm run build    # comprueba que el proyecto compila antes de desplegar en Vercel
npm start        # sirve la build generada
```

El endpoint `GET /api/health` responde `{ ok: true }` cuando las variables sensibles están configuradas correctamente.

---

## 5. Probar `/tse` con PayPal Sandbox

1. En PayPal Developer crea una **REST App** (Business) y copia tanto el **Client ID** (frontend) como el **Secret** (backend).
2. Introduce esas credenciales Sandbox en `.env.local`.
3. Arranca la app (`npm run dev`) y abre `http://localhost:3000/tse`.
4. Rellena el formulario con un DNI/NIE/NAF válido, marca las casillas obligatorias y pulsa el botón PayPal.
5. Autentica con una cuenta **Buyer Sandbox** y finaliza la compra.  
   - El SDK ejecutará `onApprove` → `actions.order.capture()` → POST `/api/tse/submit`.
   - Recibirás una redirección automática a `/gracias?order=...`.
6. Verifica el registro en Prisma Studio (`npm run prisma:studio`) para confirmar que se creó la orden (`status = PAID`, `amountEur = 9.90`).

Para marcar la referencia de Sede utiliza `POST /api/tse/mark-submitted` con `{ "orderId": "...", "ref": "..." }`, lo cual actualiza el estado a `SUBMITTED`.

---

## 6. Despliegue en Vercel

1. Conecta el repositorio a Vercel.
2. Configura las mismas variables de entorno (`POSTGRES_URL`, `NEXT_PUBLIC_PAYPAL_CLIENT_ID`, etc.).
3. Ejecuta `npm run build` en CI (Vercel lo hace automáticamente) y despliega.
4. Añade las rutas `/tse`, `/gracias` y los redirects definidos en `next.config.js` ya estarán disponibles.

Listo. Con esto puedes gestionar todas las solicitudes TSE desde un único servicio.
