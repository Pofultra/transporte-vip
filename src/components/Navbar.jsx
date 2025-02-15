import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";

// Traducciones en cuatro idiomas
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    vehicles: "Vehicles",
    testimonials: "Testimonials",
    faq: "FAQ",
    contact: "Contact",
    bookNow: "Book Now",
    language: "Language",
  },
  es: {
    home: "Inicio",
    about: "Sobre Nosotros",
    services: "Servicios",
    vehicles: "Vehículos",
    testimonials: "Testimonios",
    faq: "FAQ",
    contact: "Contacto",
    bookNow: "Reserva Ahora",
    language: "Idioma",
  },
  fr: {
    home: "Accueil",
    about: "À Propos",
    services: "Services",
    vehicles: "Véhicules",
    testimonials: "Témoignages",
    faq: "FAQ",
    contact: "Contact",
    bookNow: "Réservez Maintenant",
    language: "Langue",
  },
  de: {
    home: "Startseite",
    about: "Über Uns",
    services: "Dienstleistungen",
    vehicles: "Fahrzeuge",
    testimonials: "Erfahrungsberichte",
    faq: "FAQ",
    contact: "Kontakt",
    bookNow: "Jetzt Buchen",
    language: "Sprache",
  },
};

function Navbar({ onOpenWizard }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language] || translations["en"]; // Usa inglés por defecto si no hay idioma definido

  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutPosition = aboutSection.offsetTop;
        setShowNavbar(window.scrollY >= aboutPosition - 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Metadatos SEO */}
      <Helmet>
        <title>VIPTransport - Transporte de Lujo en Zúrich</title>
        <meta
          name="description"
          content="Servicio de transporte de lujo en Zúrich con vehículos premium y chófer privado. Reserve ahora."
        />
        <meta
          name="keywords"
          content="transporte de lujo Zúrich, chófer privado Suiza, traslados ejecutivos Zúrich, alquiler de limusina"
        />
        <meta
          property="og:title"
          content="VIPTransport - Transporte de Lujo en Zúrich"
        />
        <meta
          property="og:description"
          content="Reserve su servicio de transporte de lujo en Zúrich con vehículos premium y chófer privado."
        />
        <meta
          property="og:image"
          content="https://www.ejemplo.com/images/viptransport.jpg"
        />
        <meta property="og:url" content="https://www.ejemplo.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Barra de navegación */}
      <nav
        className={`fixed top-0 left-0 w-full bg-black text-white p-4 flex items-center justify-between transition-all duration-500 ease-in-out z-50 shadow-lg ${
          showNavbar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        role="navigation"
        aria-label="Menú principal"
      >
        {/* Logo */}
        <div className="ml-2 text-xl font-bebas">VIPTransport</div>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-gold" aria-label="Ir a inicio">
            {t.home}
          </a>
          <a
            href="#about"
            className="hover:text-gold"
            aria-label="Sobre nosotros"
          >
            {t.about}
          </a>
          <a
            href="#services"
            className="hover:text-gold"
            aria-label="Nuestros servicios"
          >
            {t.services}
          </a>
          <a
            href="#vehicles"
            className="hover:text-gold"
            aria-label="Nuestros vehículos"
          >
            {t.vehicles}
          </a>
          <a
            href="#testimonials"
            className="hover:text-gold"
            aria-label="Reseñas de clientes"
          >
            {t.testimonials}
          </a>
          <a
            href="#faq"
            className="hover:text-gold"
            aria-label="Preguntas frecuentes"
          >
            {t.faq}
          </a>
          <a
            href="#contact"
            className="hover:text-gold"
            aria-label="Contáctanos"
          >
            {t.contact}
          </a>
        </div>

        {/* Bloque derecho (botón de reserva + menú móvil) */}
        <div className="mr-2 flex items-center gap-4">
          {/* Botón de Reserva */}
          <button
            onClick={onOpenWizard}
            className="bg-gold bg-opacity-80 text-white px-6 py-3 rounded-full text-base font-bebas hover:bg-yellow-600 transition whitespace-normal text-center leading-tight"
            aria-label="Reservar servicio de transporte de lujo"
          >
            {t.bookNow} <i className="ri-arrow-right-line" aria-hidden="true"></i>
          </button>

          {/* Ícono de menú para móviles */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú"
          >
            <i className={`ri-menu-line ${isMenuOpen ? "hidden" : "block"}`}></i>
            <i className={`ri-close-line ${isMenuOpen ? "block" : "hidden"}`}></i>
          </button>
        </div>
      </nav>

      {/* Menú desplegable para móviles */}
      <div
        className={`md:hidden fixed top-20 right-0 bg-black text-white w-64 h-screen p-4 z-50 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="menu"
        aria-label="Menú desplegable"
      >
        <a
          href="#home"
          className="block py-2 hover:text-gold"
          onClick={toggleMenu}
          aria-label="Ir a inicio"
        >
          {t.home}
        </a>
        <a
          href="#about"
          className="block py-2 hover:text-gold"
          onClick={toggleMenu}
          aria-label="Sobre nosotros"
        >
          {t.about}
        </a>
        <a
          href="#services"
          className="block py-2 hover:text-gold"
          onClick={toggleMenu}
          aria-label="Nuestros servicios"
        >
          {t.services}
        </a>
        <a
          href="#vehicles"
          className="block py-2 hover:text-gold"
          onClick={toggleMenu}
          aria-label="Nuestros vehículos"
        >
          {t.vehicles}
        </a>
        <a
          href="#testimonials"
          className="block py-2 hover:text-gold"
          onClick={toggleMenu}
          aria-label="Reseñas de clientes"
        >
          {t.testimonials}
        </a>
        <a
          href="#faq"
          className="block py-2 hover:text-gold"
          onClick={toggleMenu}
          aria-label="Preguntas frecuentes"
        >
          {t.faq}
        </a>
        <a
          href="#contact"
          className="block py-2 hover:text-gold"
          onClick={toggleMenu}
          aria-label="Contáctanos"
        >
          {t.contact}
        </a>
      </div>
    </>
  );
}

export default Navbar;