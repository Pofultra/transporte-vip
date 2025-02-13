// src/components/Footer.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { language, setLanguage } = useLanguage();
  return (
    <footer className="bg-black text-gray-400 py-4 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Bloque izquierdo (texto y links) */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© 2025 VIPTransport. Todos los derechos reservados.</p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#privacy" className="hover:text-gold">
              Política de Privacidad
            </a>
            <a href="#terms" className="hover:text-gold">
              Términos de Servicio
            </a>
          </div>
        </div>

        {/* Bloque derecho (selector de idioma con ícono) */}
        <div className="flex items-center gap-2">
          <i className="ri-earth-line text-gold text-xl"></i>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white px-3 py-1 rounded-md border border-gray-600"
          >
            <option value="de">Alemán</option>
            <option value="fr">Francés</option>
            <option value="en">Inglés</option>
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
