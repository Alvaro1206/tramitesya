"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    paypal?: any;
  }
}

type Props = {
  onReady?: () => void;
};

export function PayPalLoader({ onReady }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
    if (!clientId) {
      console.warn("NEXT_PUBLIC_PAYPAL_CLIENT_ID is not defined");
      return;
    }

    const existing = document.getElementById("paypal-sdk") as HTMLScriptElement | null;
    const notifyReady = () => onReady?.();

    if (existing) {
      if (window.paypal) {
        notifyReady();
      } else {
        existing.addEventListener("load", notifyReady, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR&intent=capture`;
    script.async = true;
    script.onload = notifyReady;
    document.body.appendChild(script);
  }, [onReady]);

  return null;
}
