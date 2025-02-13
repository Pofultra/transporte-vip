import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black text-white p-4 flex items-center justify-between transition-all duration-500 ease-in-out z-50 shadow-lg ${
        showNavbar ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Logo */}
      <div className="text-xl font-bold">VIPTransport</div>

      {/* Menú */}
      <div className="hidden md:flex gap-6">
        <a href="#home" className="hover:text-gold">{t.home}</a>
        <a href="#about" className="hover:text-gold">{t.about}</a>
        <a href="#services" className="hover:text-gold">{t.services}</a>
        <a href="#vehicles" className="hover:text-gold">{t.vehicles}</a>
        <a href="#testimonials" className="hover:text-gold">{t.testimonials}</a>
        <a href="#faq" className="hover:text-gold">{t.faq}</a>
        <a href="#contact" className="hover:text-gold">{t.contact}</a>
      </div>

      {/* Bloque derecho (botón de reserva ) */}
      <div className="flex items-center gap-4">
        

        {/* Botón de Reserva */}
        <button
          onClick={onOpenWizard}
          className="bg-gold bg-opacity-80 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-yellow-600 transition whitespace-normal text-center leading-tight w-30"
        >
          {t.bookNow} <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
