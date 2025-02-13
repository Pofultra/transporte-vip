import React from "react";
import { useLanguage } from "../context/LanguageContext";
import about_img from "/images/about2.webp";

// Traducciones en cuatro idiomas
const translations = {
  en: {
    title: "About Us",
    description1:
      "We have extensive experience in transporting high-level political figures: vice presidents, secretaries of state, and leaders. Our commitment is to provide discretion, professionalism, and the best quality of service.",
    description2:
      "Our drivers are highly trained to ensure absolute security, punctuality, and an unparalleled VIP experience.",
    features: [
      { title: "Discretion", description: "Our clients are treated with maximum confidentiality and privacy.", icon: "ri-eye-off-line" },
      { title: "Professionalism", description: "Highly qualified drivers, punctuality, and the highest standards.", icon: "ri-briefcase-line" },
      { title: "Premium Quality", description: "Luxury vehicles and top-tier equipment for an unrivaled VIP experience.", icon: "ri-vip-crown-line" },
      { title: "International Coverage", description: "Experience in handling transfers for clients worldwide, with a global approach.", icon: "ri-global-line" },
    ],
  },
  es: {
    title: "Sobre Nosotros",
    description1:
      "Contamos con amplia experiencia en transporte de figuras políticas de alto nivel: vicepresidentes, secretarios de Estado y mandatarios. Nuestro compromiso es brindar discreción, profesionalismo y la mejor calidad de servicio.",
    description2:
      "Nuestros conductores están altamente capacitados para garantizar seguridad absoluta, puntualidad y una experiencia VIP inigualable.",
    features: [
      { title: "Discreción", description: "El trato a nuestros clientes se maneja con la máxima confidencialidad y privacidad.", icon: "ri-eye-off-line" },
      { title: "Profesionalismo", description: "Conductores altamente calificados, puntualidad y cumplimiento de los más altos estándares.", icon: "ri-briefcase-line" },
      { title: "Calidad Premium", description: "Vehículos de lujo y equipamiento de primera para una experiencia VIP inigualable.", icon: "ri-vip-crown-line" },
      { title: "Cobertura Internacional", description: "Experiencia en gestionar traslados para clientes de todo el mundo, con enfoque global.", icon: "ri-global-line" },
    ],
  },
  fr: {
    title: "À Propos de Nous",
    description1:
      "Nous avons une vaste expérience dans le transport de personnalités politiques de haut niveau : vice-présidents, secrétaires d'État et dirigeants. Notre engagement est d'offrir discrétion, professionnalisme et la meilleure qualité de service.",
    description2:
      "Nos chauffeurs sont hautement qualifiés pour garantir une sécurité absolue, la ponctualité et une expérience VIP inégalée.",
    features: [
      { title: "Discrétion", description: "Nos clients sont traités avec la plus grande confidentialité et discrétion.", icon: "ri-eye-off-line" },
      { title: "Professionnalisme", description: "Chauffeurs hautement qualifiés, ponctualité et respect des normes les plus élevées.", icon: "ri-briefcase-line" },
      { title: "Qualité Premium", description: "Véhicules de luxe et équipements haut de gamme pour une expérience VIP inégalée.", icon: "ri-vip-crown-line" },
      { title: "Couverture Internationale", description: "Expérience dans la gestion des transferts pour des clients du monde entier avec une approche globale.", icon: "ri-global-line" },
    ],
  },
  de: {
    title: "Über uns",
    description1:
      "Wir haben umfassende Erfahrung im Transport hochrangiger politischer Persönlichkeiten: Vizepräsidenten, Staatssekretäre und Staatsoberhäupter. Unser Engagement besteht darin, Diskretion, Professionalität und höchste Servicequalität zu bieten.",
    description2:
      "Unsere Fahrer sind hochqualifiziert, um absolute Sicherheit, Pünktlichkeit und ein unvergleichliches VIP-Erlebnis zu gewährleisten.",
    features: [
      { title: "Diskretion", description: "Unsere Kunden werden mit höchster Vertraulichkeit und Privatsphäre behandelt.", icon: "ri-eye-off-line" },
      { title: "Professionalität", description: "Hochqualifizierte Fahrer, Pünktlichkeit und Einhaltung höchster Standards.", icon: "ri-briefcase-line" },
      { title: "Premium-Qualität", description: "Luxusfahrzeuge und erstklassige Ausstattung für ein unvergleichliches VIP-Erlebnis.", icon: "ri-vip-crown-line" },
      { title: "Internationale Abdeckung", description: "Erfahrung in der Organisation von Transfers für Kunden weltweit mit globalem Fokus.", icon: "ri-global-line" },
    ],
  },
};

function About() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en"]; // Si el idioma no está definido, usa inglés por defecto.

  return (
    <section id="about" className="bg-black text-white py-16 mt-16">
      {/* Contenedor principal (imagen + texto) */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src={about_img}
            alt={t.title}
            className="rounded-2xl shadow-lg object-cover w-full h-full opacity-70 grayscale"
          />
        </div>

        {/* Texto principal */}
        <div className="md:w-1/2 text-center lg:text-left max-w-prose">
          <h2 className="text-3xl font-bold text-gold mb-4 text-center">{t.title}</h2>
          <p className="text-gray-300 mb-4">{t.description1}</p>
          <p className="text-gray-300">{t.description2}</p>
        </div>
      </div>

      {/* Sub-sección de características (iconos sin tarjetas) */}
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Ícono en dorado */}
              <i className={`${item.icon} text-gold text-4xl mb-3`} aria-hidden="true"></i>

              {/* Título */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              {/* Descripción */}
              <p className="text-gray-300 max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
