import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

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
    <>
      <Helmet>
        <title>VIPTransport - Luxury Transportation Services</title>
        <meta
          name="description"
          content="Experience luxury transportation services with VIPTransport. Book now for your next trip to Switzerland."
        />
        <meta
          name="keywords"
          content="luxury transport, switzerland, vip transport, private tours"
        />
        <meta name="author" content="VIPTransport" />
      </Helmet>
      <footer className="bg-black text-gray-400 py-4 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Bloque izquierdo (texto y links) */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>{t.rights}</p>
          </div>

          {/* Bloque derecho (selector de idioma) */}
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>
      </footer>
    </>
  );
}

export default Footer;
