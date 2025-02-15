import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";

// Traducciones en cuatro idiomas
const translations = {
  en: {
    title: "Our Services",
    services: [
      {
        title: "Executive",
        description: "VIP transport specialized for politicians, business people, and high-profile clients.",
        icon: "ri-briefcase-4-line",
      },
      {
        title: "Special Needs Children",
        description: "Trained drivers, patience, and special assistance. Vehicles adapted to specific needs.",
        icon: "ri-emotion-happy-line",
      },
      {
        title: "Elderly Care",
        description: "Personalized assistance when getting in and out of the vehicle. Total comfort and security.",
        icon: "ri-user-heart-line",
      },
      {
        title: "Special Events",
        description: "Luxury transportation for weddings, anniversaries, and important celebrations. Premium vehicles for newlyweds and guests.",
        icon: "ri-calendar-event-line",
      },
    ],
  },
  es: {
    title: "Nuestros Servicios",
    services: [
      {
        title: "Ejecutivo",
        description: "Transporte VIP especializado para figuras políticas, empresarios y clientes de alto perfil.",
        icon: "ri-briefcase-4-line",
      },
      {
        title: "Niños Especiales",
        description: "Conductores capacitados, paciencia y asistencia especial. Vehículos adaptados según necesidades.",
        icon: "ri-emotion-happy-line",
      },
      {
        title: "Adultos Mayores",
        description: "Asistencia personalizada al subir y bajar del vehículo. Comodidad y seguridad total.",
        icon: "ri-user-heart-line",
      },
      {
        title: "Eventos Especiales",
        description: "Transporte de lujo para bodas, aniversarios y celebraciones importantes. Vehículos premium para novios e invitados.",
        icon: "ri-calendar-event-line",
      },
    ],
  },
  fr: {
    title: "Nos Services",
    services: [
      {
        title: "Exécutif",
        description: "Transport VIP spécialisé pour les politiciens, les entrepreneurs et les clients de haut niveau.",
        icon: "ri-briefcase-4-line",
      },
      {
        title: "Enfants à besoins spéciaux",
        description: "Chauffeurs formés, patience et assistance spéciale. Véhicules adaptés aux besoins spécifiques.",
        icon: "ri-emotion-happy-line",
      },
      {
        title: "Soins aux personnes âgées",
        description: "Assistance personnalisée pour monter et descendre du véhicule. Confort et sécurité totale.",
        icon: "ri-user-heart-line",
      },
      {
        title: "Événements Spéciaux",
        description: "Transport de luxe pour mariages, anniversaires et célébrations importantes. Véhicules premium pour les mariés et les invités.",
        icon: "ri-calendar-event-line",
      },
    ],
  },
  de: {
    title: "Unsere Dienstleistungen",
    services: [
      {
        title: "Exekutive",
        description: "VIP-Transport für Politiker, Geschäftsleute und hochkarätige Kunden.",
        icon: "ri-briefcase-4-line",
      },
      {
        title: "Kinder mit besonderen Bedürfnissen",
        description: "Ausgebildete Fahrer, Geduld und spezielle Unterstützung. Fahrzeuge an spezifische Bedürfnisse angepasst.",
        icon: "ri-emotion-happy-line",
      },
      {
        title: "Seniorenbetreuung",
        description: "Individuelle Unterstützung beim Ein- und Aussteigen. Höchster Komfort und Sicherheit.",
        icon: "ri-user-heart-line",
      },
      {
        title: "Besondere Ereignisse",
        description: "Luxus-Transport für Hochzeiten, Jubiläen und besondere Feiern. Premium-Fahrzeuge für Brautpaare und Gäste.",
        icon: "ri-calendar-event-line",
      },
    ],
  },
};

function Services() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en"]; // Si el idioma no está definido, usa inglés por defecto.

  return (
    <>
      {/* Metadatos SEO */}
      <Helmet>
        <title>{t.title} - VIPTransport</title>
        <meta name="description" content={`Discover our luxury services: ${t.services.map((s) => s.title).join(", ")}`} />
      </Helmet>

      {/* Contenido principal */}
      <section
        id="services"
        className="bg-black text-white py-16"
        role="region"
        aria-labelledby="services-title"
      >
        <div className="container mx-auto px-4 text-center">
          {/* Título */}
          <h2
            id="services-title"
            className="text-3xl md:text-4xl font-bold text-gold mb-8"
          >
            {t.title}
          </h2>

          {/* Lista de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition transform hover:scale-105 hover:bg-gray-800 duration-300 ease-in-out"
                role="article"
                aria-label={service.title}
              >
                {/* Ícono */}
                <i
                  className={`${service.icon} text-gold text-4xl mb-4`}
                  aria-hidden="true"
                  aria-label={`${service.title} icon`}
                ></i>

                {/* Título del servicio */}
                <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>

                {/* Descripción del servicio */}
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;