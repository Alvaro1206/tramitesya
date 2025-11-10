import crypto from "crypto";
import { ENV } from "./env";

let cachedKey: Buffer | null = null;

function getKey() {
  if (cachedKey) {
    return cachedKey;
  }

  cachedKey = crypto.createHash("sha256").update(ENV.DATA_ENC_SECRET).digest();
  return cachedKey;
}

export function encryptText(plain: string) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", getKey(), iv);
  const enc = Buffer.concat([cipher.update(Buffer.from(plain, "utf8")), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, enc]);
}
