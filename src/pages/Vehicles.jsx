import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";

// Importar imágenes correctamente
import vClass1 from "/images/vclass1.webp";
import vClass2 from "/images/vclass2.webp";
import sClass1 from "/images/sclass1.webp";
import sClass2 from "/images/sclass2.webp";
import eClass1 from "/images/eclass1.webp";
import eClass2 from "/images/eclass2.webp";
import bmw1 from "/images/bmw1.webp";
import bmw2 from "/images/bmw2.webp";
import bus1 from "/images/bus1.webp";
import bus2 from "/images/bus2.webp";
import sprinter1 from "/images/sprinter1.webp";
import sprinter2 from "/images/sprinter2.webp";
import tesla1 from "/images/tesla1.webp";
import tesla2 from "/images/tesla2.webp";


// Traducciones
const translations = {
  en: {
    title: "Vehicles",
    passengers: "Passengers",
    transmission: "Transmission",
    prev: "Previous",
    next: "Next",
    vehicles: [
      { name: "Mercedes V Class", passengers: 7, transmission: "Automatic", images: [vClass1, vClass2] },
      { name: "Mercedes S-Class", passengers: 3, transmission: "Automatic", images: [sClass1, sClass2] },
      { name: "Mercedes E-Class", passengers: 3, transmission: "Automatic", images: [eClass1, eClass2] },
      { name: "BMW 520 D M Paket", passengers: 3, transmission: "Automatic", images: [bmw1, bmw2] },
      { name: "Mercedes Sprinter", passengers: 15, transmission: "Mechanical", images: [sprinter1, sprinter2] },
      { name: "Bus", passengers: 50, transmission: "Mechanical", images: [bus1, bus2] },
      { name: "Tesla", passengers: 4, transmission: "Automatic", images: [tesla1, tesla2] },
    ],
  },
  es: {
    title: "Vehículos",
    passengers: "Pasajeros",
    transmission: "Transmisión",
    prev: "Anterior",
    next: "Siguiente",
    vehicles: [
      { name: "Mercedes V Class", passengers: 7, transmission: "Automática", images: [vClass1, vClass2] },
      { name: "Mercedes S-Class", passengers: 3, transmission: "Automática", images: [sClass1, sClass2] },
      { name: "Mercedes E-Class", passengers: 3, transmission: "Automática", images: [eClass1, eClass2] },
      { name: "BMW 520 D M Paket", passengers: 3, transmission: "Automática", images: [bmw1, bmw2] },
      { name: "Mercedes Sprinter", passengers: 15, transmission: "Mecánica", images: [sprinter1, sprinter2] },
      { name: "Autobús", passengers: 50, transmission: "Mecánica", images: [bus1, bus2] },
      { name: "Tesla", passengers: 4, transmission: "Automática", images: [tesla1, tesla2] },
    ],
  },
  de: {
    title: "Fahrzeuge",
    passengers: "Passagiere",
    transmission: "Getriebe",
    prev: "Zurück",
    next: "Weiter",
    vehicles: [
      { name: "Mercedes V-Klasse", passengers: 7, transmission: "Automatik", images: [vClass1, vClass2] },
      { name: "Mercedes S-Klasse", passengers: 3, transmission: "Automatik", images: [sClass1, sClass2] },
      { name: "Mercedes E-Klasse", passengers: 3, transmission: "Automatik", images: [eClass1, eClass2] },
      { name: "BMW 520 D M Paket", passengers: 3, transmission: "Automatik", images: [bmw1, bmw2] },
      { name: "Mercedes Sprinter", passengers: 15, transmission: "Manuell", images: [sprinter1, sprinter2] },
      { name: "Bus", passengers: 50, transmission: "Manuell", images: [bus1, bus2] },
      { name: "Tesla", passengers: 4, transmission: "Automatik", images: [tesla1, tesla2] },
    ],
  },
  fr: {
    title: "Véhicules",
    passengers: "Passagers",
    transmission: "Transmission",
    prev: "Précédent",
    next: "Suivant",
    vehicles: [
      { name: "Mercedes Classe V", passengers: 7, transmission: "Automatique", images: [vClass1, vClass2] },
      { name: "Mercedes Classe S", passengers: 3, transmission: "Automatique", images: [sClass1, sClass2] },
      { name: "Mercedes Classe E", passengers: 3, transmission: "Automatique", images: [eClass1, eClass2] },
      { name: "BMW 520 D M Paket", passengers: 3, transmission: "Automatique", images: [bmw1, bmw2] },
      { name: "Mercedes Sprinter", passengers: 15, transmission: "Manuelle", images: [sprinter1, sprinter2] },
      { name: "Bus", passengers: 50, transmission: "Manuelle", images: [bus1, bus2] },
      { name: "Tesla", passengers: 4, transmission: "Automatique", images: [tesla1, tesla2] },
    ],
  },
};

function Vehicles() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];
  const vehicles = t.vehicles;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [currentIndex]);

  // Cambiar al vehículo seleccionado desde las miniaturas
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setImageIndex(0); // Reiniciar la imagen al cambiar de vehículo
  };

  // Navegación con botones
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1));
    setImageIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
    setImageIndex(0);
  };

  return (
    <>
      {/* Metadatos SEO */}
      <Helmet>
        <title>{t.title} - VIPTransport</title>
        <meta name="description" content={`Discover our luxury fleet: ${vehicles.map((v) => v.name).join(", ")}`} />
      </Helmet>

      {/* Contenido principal */}
      <section
        id="vehicles"
        className="bg-black text-white py-8 relative overflow-hidden"
        role="region"
        aria-labelledby="vehicles-title"
      >
        <div className="container mx-auto px-4 text-center">
          {/* Título */}
          <h2
            id="vehicles-title"
            className="text-2xl sm:text-3xl font-bold text-gold mb-6 uppercase"
          >
            {t.title}
          </h2>

          {/* Tarjeta Principal */}
          <motion.div
            key={vehicles[currentIndex].name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative h-[300px] sm:h-[400px] bg-[#111] border border-gray-700 rounded-[8.22px] shadow-lg overflow-hidden mx-auto w-[90%] sm:w-[80%]"
            role="article"
            aria-label={`Vehicle: ${vehicles[currentIndex].name}`}
          >
            {/* Imagen de fondo */}
            <img
              src={vehicles[currentIndex].images[imageIndex]}
              alt={vehicles[currentIndex].name}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Overlay para mejorar legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>

            {/* Contenedor con detalles */}
            <div className="absolute bottom-[15px] left-[15px] right-[15px] bg-black bg-opacity-50 p-3 rounded-md">
              <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-lg">
                {vehicles[currentIndex].name}
              </h3>
              <div className="flex items-center space-x-3 mt-1 text-white">
                <span className="text-sm flex items-center">
                  <i className="ri-user-line mr-1" aria-hidden="true"></i>{" "}
                  {vehicles[currentIndex].passengers} {t.passengers}
                </span>
                <span className="text-sm flex items-center">
                  <i className="ri-settings-2-line mr-1" aria-hidden="true"></i>{" "}
                  {vehicles[currentIndex].transmission}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Botones de Navegación */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              className="bg-gold bg-opacity-80 p-2 sm:p-3 rounded-full text-white hover:bg-opacity-100 transition"
              aria-label={t.prev}
            >
              <i className="ri-arrow-left-s-line text-xl sm:text-2xl" aria-hidden="true"></i>
            </button>
            <button
              onClick={handleNext}
              className="bg-gold bg-opacity-80 p-2 sm:p-3 rounded-full text-white hover:bg-opacity-100 transition"
              aria-label={t.next}
            >
              <i className="ri-arrow-right-s-line text-xl sm:text-2xl" aria-hidden="true"></i>
            </button>
          </div>

          {/* Lista de Miniaturas */}
          <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-4">
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.name}
                onClick={() => handleThumbnailClick(index)}
                className={`relative w-[80px] sm:w-[100px] h-[60px] sm:h-[70px] cursor-pointer rounded-md overflow-hidden border ${
                  currentIndex === index ? "border-gold" : "border-transparent"
                } transition-transform hover:scale-110`}
                role="button"
                aria-label={`Select vehicle: ${vehicle.name}`}
              >
                <img
                  src={vehicle.images[0]} // Mostrar siempre la primera imagen en miniatura
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <p className="absolute bottom-1 left-1 text-[10px] sm:text-xs text-white font-bold">
                  {vehicle.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Vehicles;
