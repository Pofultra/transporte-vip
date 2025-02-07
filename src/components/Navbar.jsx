// src/components/Navbar.jsx
import React from 'react';

function Navbar({ onOpenWizard }) {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">VIPTransport</div>

      {/* Menú */}
      <div className="hidden md:flex gap-6">
        <a href="#home" className="hover:text-gold">Inicio</a>
        <a href="#about" className="hover:text-gold">Sobre Nosotros</a>
        <a href="#services" className="hover:text-gold">Servicios</a>
        <a href="#vehicles" className="hover:text-gold">Vehículos</a>
        <a href="#testimonials" className="hover:text-gold">Testimonios</a>
        <a href="#faq" className="hover:text-gold">FAQ</a>
        <a href="#contact" className="hover:text-gold">Contacto</a>
      </div>

      {/* Botón de Reserva */}
      <button
        onClick={onOpenWizard}
        className="bg-gold text-black px-4 py-2 rounded hover:bg-yellow-600"
      >
        Reserva Ahora
      </button>
    </nav>
  );
}

export default Navbar;
