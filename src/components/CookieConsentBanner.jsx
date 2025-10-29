import { useEffect, useState } from "react";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const storedPreference = window.localStorage.getItem("cookiesAccepted");
      if (storedPreference === null) {
        setVisible(true);
      }
    } catch (error) {
      // Si localStorage falla (p.ej. modo incógnito), mostramos el banner igualmente.
      setVisible(true);
    }
  }, []);

  const handleChoice = (value) => {
    try {
      window.localStorage.setItem("cookiesAccepted", String(value));
    } catch (error) {
      // Ignoramos errores de almacenamiento; de igual modo ocultamos el banner.
    } finally {
      setVisible(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-xl -translate-x-1/2 transform rounded-xl bg-white p-4 shadow-lg sm:flex sm:items-center sm:justify-between">
      <p className="text-center text-sm text-gray-700 sm:text-left">
        Este sitio web utiliza cookies para mejorar la experiencia de usuario.
      </p>
      <div className="mt-4 flex justify-center gap-3 sm:mt-0">
        <button
          type="button"
          onClick={() => handleChoice(true)}
          className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => handleChoice(false)}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
