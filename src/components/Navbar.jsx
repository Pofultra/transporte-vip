import React, { useState, useEffect } from 'react';

function Navbar({ onOpenWizard }) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutPosition = aboutSection.offsetTop;
        setShowNavbar(window.scrollY >= aboutPosition - 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black text-white p-4 flex items-center justify-between transition-all duration-500 ease-in-out z-50 shadow-lg ${
        showNavbar ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
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
          className="bg-gold bg-opacity-80 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-yellow-600 transition whitespace-normal text-center leading-tight w-30"
        >
          Reserva Ahora <i className="ri-arrow-right-line"></i>
        </button>
    </nav>
  );
}

export default Navbar;
