import React from "react";
import { useLanguage } from "../context/LanguageContext";
import homeImage from "/images/home.webp";
import logoImage from "/images/logo_jay.png";
import { Helmet } from "react-helmet-async";

// Traducciones
const translations = {
  en: {
    title: "Luxury Transport in Zurich",
    subtitle:
      "An exclusive, refined, and comfortable experience designed to elevate all your travels in Zurich.",
    button: "Book Now",
    stats: {
      clients: "10K+",
      clientsText: "Satisfied Clients",
      experience: "20+",
      experienceText: "Years of Experience",
      drivers: "100",
      driversText: "Professional Drivers",
    },
    metaDescription:
      "Experience luxury transport in Zurich with our exclusive service. Enjoy comfort, professionalism, and elegance for all your travels.",
    keywords: "luxury transport Zurich, premium travel Zurich, chauffeur service Zurich",
  },
  de: {
    title: "Luxustransport in Zürich",
    subtitle:
      "Ein exklusives, raffiniertes und komfortables Erlebnis, das all Ihre Reisen in Zürich zu einem Erlebnis macht.",
    button: "Jetzt buchen",
    stats: {
      clients: "10K+",
      clientsText: "Zufriedene Kunden",
      experience: "20+",
      experienceText: "Jahrelange Erfahrung",
      drivers: "100",
      driversText: "Professionelle Fahrer",
    },
    metaDescription:
      "Erleben Sie Luxustransport in Zürich mit unserem exklusiven Service. Genießen Sie Komfort, Professionalität und Eleganz für all Ihre Reisen.",
    keywords: "Luxustransport Zürich, Premium-Reisen Zürich, Chauffeur-Service Zürich",
  },
  es: {
    title: "Transporte de Lujo en Zúrich",
    subtitle:
      "Una experiencia exclusiva, refinada y cómoda diseñada para elevar todos tus viajes en Zúrich.",
    button: "Reserva Ahora",
    stats: {
      clients: "10K+",
      clientsText: "Clientes Satisfechos",
      experience: "20+",
      experienceText: "Años de Experiencia",
      drivers: "100",
      driversText: "Conductores Profesionales",
    },
    metaDescription:
      "Experimente el transporte de lujo en Zúrich con nuestro servicio exclusivo. Disfrute de comodidad, profesionalismo y elegancia en todos sus viajes.",
    keywords: "transporte de lujo Zúrich, viajes premium Zúrich, servicio de chófer Zúrich",
  },
  fr: {
    title: "Transport de Luxe à Zurich",
    subtitle:
      "Une expérience exclusive, raffinée et confortable conçue pour sublimer tous vos voyages à Zurich.",
    button: "Réservez Maintenant",
    stats: {
      clients: "10K+",
      clientsText: "Clients Satisfaits",
      experience: "20+",
      experienceText: "Des Années d'Expérience",
      drivers: "100",
      driversText: "Conducteurs Professionnels",
    },
    metaDescription:
      "Découvrez le transport de luxe à Zurich avec notre service exclusif. Profitez de confort, professionnalisme et élégance pour tous vos voyages.",
    keywords: "transport de luxe Zurich, voyages premium Zurich, service de chauffeur Zurich",
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
      loading="lazy"
    >
      {/* Metadatos SEO */}
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href={`https://yourwebsite.com/${language}/home`} />
        {/* Datos estructurados (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: t.title,
            description: t.metaDescription,
            provider: {
              "@type": "Organization",
              name: "VIP Transport Zurich",
              logo: logoImage,
            },
            areaServed: "Zurich",
            serviceType: "Luxury Transport",
          })}
        </script>
      </Helmet>

      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Logo en la parte superior */}
      <div className="absolute top-[87px] left-1/2 transform -translate-x-1/2 w-[174px] h-[95.20879364013672px]">
        <img
          src={logoImage}
          alt={`${t.title} - Luxury Transport in Zurich`}
          className="w-full h-full object-cover"
          loading="lazy"
          width="174"
          height="95"
        />
      </div>

      {/* Contenido principal */}
      <div className="absolute z-10 text-center px-6 max-w-[404px] w-[404px] h-[120px] top-[180px]">
        <h1 className="font-bebas font-bold text-[39px] tracking-normal">
          {t.title}
        </h1>
        <span className="font-montserrat text-[19px] tracking-normal block mb-6">
          {t.subtitle}
        </span>
      </div>

      {/* Botón de reserva */}
      <button
        onClick={onOpenWizard}
        className="absolute w-[146px] h-[55px] top-[393px] left-[20px] z-20 flex items-center justify-center gap-2.5 bg-gold text-white font-bebas rounded-full shadow-md hover:bg-yellow-600 transition duration-300 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
        aria-label={`Reservar ${t.title}`}
      >
        {t.button} <i className="ri-arrow-right-line" aria-hidden="true"></i>
      </button>

      {/* Estadísticas en la parte inferior */}
      <div className="relative z-10 bottom-4 w-full flex justify-center gap-2 text-center text-lg text-xl font-semibebas text-opacity-70 pt-40 mt-40">
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            {t.stats.clients}
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">
            {t.stats.clientsText}
          </span>
        </div>
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            {t.stats.experience}
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">
            {t.stats.experienceText}
          </span>
        </div>
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            {t.stats.drivers}
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">
            {t.stats.driversText}
          </span>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-10">
        <span className="text-xs font-bold">SCROLL</span>
        <i className="ri-arrow-down-s-line animate-bounce mt-1"></i>
      </div>

      {/* Capa de difuminación */}
      <div className="absolute bottom-[0px] left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-0"></div>
    </section>
  );
}

export default Home;