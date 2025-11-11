"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tramitesya-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const choice = window.localStorage.getItem(STORAGE_KEY);
    if (!choice) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: "accepted" | "rejected") => () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white/95 p-4 text-sm text-slate-700 shadow-2xl ring-1 ring-slate-100/80 backdrop-blur">
        <p className="text-sm">
          Usamos cookies necesarias para que el sitio funcione y, con tu permiso, analítica básica para mejorar la experiencia. Puedes aceptar o
          rechazar las cookies opcionales en cualquier momento.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            onClick={handleChoice("rejected")}
            className="rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Rechazar
          </button>
          <button
            onClick={handleChoice("accepted")}
            className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-500"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
