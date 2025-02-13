import React from "react";
import { useLanguage } from "../context/LanguageContext";
import homeImage from "/images/home.webp";
import logoImage from "/images/logo_jay.png";
// Traducciones
const translations = {
  en: {
    title: "Luxury Transport",
    subtitle:
      "An exclusive, refined, and comfortable experience designed to elevate all your travels.",
    button: "Book Now",
    stats: {
      clients: "10K+",
      clientsText: "Satisfied Clients",
      experience: "20+",
      experienceText: "Years of Experience",
      drivers: "100",
      driversText: "Professional Drivers",
    },
  },
  de: {
    title: "Luxustransport",
    subtitle:
      "Ein exklusives, raffiniertes und komfortables Erlebnis, das all Ihre Reisen zu einem Erlebnis macht.",
    button: "Jetzt buchen",
    stats: {
      clients: "10K+",
      clientsText: "Zufriedene Kunden",
      experience: "20+",
      experienceText: "Jahrelange Erfahrung",
      drivers: "100",
      driversText: "Professionelle Fahrer",
    },
  },
  es: {
    title: "Transporte de Lujo",
    subtitle:
      "Una experiencia exclusiva, refinada y cómoda diseñada para elevar todos tus viajes.",
    button: "Reserva Ahora",
    stats: {
      clients: "10K+",
      clientsText: "Clientes Satisfechos",
      experience: "20+",
      experienceText: "Años de Experiencia",
      drivers: "100",
      driversText: "Conductores Profesionales",
    },
  },
  fr: {
    title: "Transport de Luxe",
    subtitle:
      "Une expérience exclusive, raffinée et confortable conçue pour sublimer tous vos voyages.",
    button: "Réservez Maintenant",
    stats: {
      clients: "10K+",
      clientsText: "Clients Satisfaits",
      experience: "20+",
      experienceText: "Des Années d'Expérience",
      drivers: "100",
      driversText: "Conducteurs Professionnels",
    },
  },
};
function Home({ onOpenWizard }) {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section
      id="home"
      className="relative w-full h-[955px] flex flex-col items-center justify-center bg-black text-girs overflow-hidden"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        opacity: 0.8,
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Logo en la parte superior */}
      <div className="absolute top-[87px] left-1/2 transform -translate-x-1/2 w-[174px] h-[95.20879364013672px]">
        <img
          src={logoImage}
          alt="Logo de la empresa de transporte VIP"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="absolute z-10 text-center px-6 max-w-[404px] w-[404px] h-[120px] top-[180px] ">
        <h1 className="font-bebas font-bold text-[39px]  tracking-normal ">
          {t.title}
        </h1>

        <span className="font-montserrat text-[19px]  tracking-normal block mb-6">
          {t.subtitle}
        </span>
      </div>
      <button
        onClick={onOpenWizard}
        className="absolute w-[146px] h-[55px] top-[393px] left-[20px] flex items-center justify-center gap-2.5 bg-gold text-white font-bold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
      >
        {t.button} <i className="ri-arrow-right-line"></i>
      </button>

      {/* Estadísticas en la parte inferior */}
      <div className="relative z-10 bottom-4 w-full flex justify-center gap-2 text-center text-lg text-xl font-semibebas text-opacity-70 pt-40 lg:pt-0  mt-40 lg:mt-0  ">
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            10K+
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">
            {t.stats.clientsText}
          </span>
        </div>
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            20+
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">
            {t.stats.experienceText}
          </span>
        </div>
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            100
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">
            {t.stats.driversText}
          </span>
        </div>
      </div>
      <div className="absolute w-[55px] h-[61px] top-[865px] left-[193px] flex flex-col items-center justify-center text-center text-white z-10">
        <span className="text-xs font-bold">SCROLL</span>
        <i className="ri-arrow-down-s-line animate-bounce mt-1"></i>
      </div>

      {/* Capa de difuminación */}
      <div className="absolute bottom-[0px] left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-0"></div>
    </section>
  );
}

export default Home;
