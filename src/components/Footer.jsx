// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-4 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Bloque izquierdo (texto y links) */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© 2025 VIPTransport. Todos los derechos reservados.</p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#privacy" className="hover:text-gold">Política de Privacidad</a>
            <a href="#terms" className="hover:text-gold">Términos de Servicio</a>
          </div>
        </div>

        {/* Bloque derecho (selector de idioma con ícono) */}
        <div className="flex items-center gap-2">
          <i className="ri-earth-line text-gold text-xl"></i>
          <select className="bg-black border border-gold text-white px-2 py-1 rounded hover:border-yellow-600">
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
