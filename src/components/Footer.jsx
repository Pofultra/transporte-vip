import React from "react";
import { useLanguage } from "../context/LanguageContext";

// Traducciones en cuatro idiomas
const translations = {
  en: {
    rights: "© 2025 VIPTransport. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    language: "Language",
  },
  es: {
    rights: "© 2025 VIPTransport. Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    language: "Idioma",
  },
  fr: {
    rights: "© 2025 VIPTransport. Tous droits réservés.",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'utilisation",
    language: "Langue",
  },
  de: {
    rights: "© 2025 VIPTransport. Alle Rechte vorbehalten.",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    language: "Sprache",
  },
};

function Footer() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language] || translations["en"]; // Usa inglés por defecto si no hay idioma definido

  return (
    <footer className="bg-black text-gray-400 py-4 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Bloque izquierdo (texto y links) */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>{t.rights}</p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#privacy" className="hover:text-gold">
              {t.privacy}
            </a>
            <a href="#terms" className="hover:text-gold">
              {t.terms}
            </a>
          </div>
        </div>

        {/* Bloque derecho (selector de idioma con ícono) */}
        <div className="flex items-center gap-2">
          <i className="ri-earth-line text-gold text-xl"></i>
          <label htmlFor="language-select" className="sr-only">
            {t.language}
          </label>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white px-3 py-1 rounded-md border border-gray-600"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
