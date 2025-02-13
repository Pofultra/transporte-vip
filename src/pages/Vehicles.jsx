import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Importar imágenes correctamente
import vClass1 from "/images/vclass1.webp";
import vClass2 from "/images/vclass2.webp";
import sClass1 from "/images/sclass1.webp";
import sClass2 from "/images/sclass2.webp";
import eClass1 from "/images/eclass1.webp";
import eClass2 from "/images/eclass2.webp";

// Traducciones
const translations = {
  en: {
    title: "Vehicles",
    passengers: "Passengers",
    transmission: "Transmission",
    prev: "Previous",
    next: "Next",
    vehicles: [
      { name: "Mercedes V Class", passengers: 7, transmission: "Automatic" },
      { name: "Mercedes S-Class", passengers: 3, transmission: "Automatic" },
      { name: "Mercedes E-Class", passengers: 3, transmission: "Automatic" },
    ],
  },
  es: {
    title: "Vehículos",
    passengers: "Pasajeros",
    transmission: "Transmisión",
    prev: "Anterior",
    next: "Siguiente",
    vehicles: [
      { name: "Mercedes V Class", passengers: 7, transmission: "Automática" },
      { name: "Mercedes S-Class", passengers: 3, transmission: "Automática" },
      { name: "Mercedes E-Class", passengers: 3, transmission: "Automática" },
    ],
  },
  fr: {
    title: "Véhicules",
    passengers: "Passagers",
    transmission: "Transmission",
    prev: "Précédent",
    next: "Suivant",
    vehicles: [
      { name: "Mercedes V Class", passengers: 7, transmission: "Automatique" },
      { name: "Mercedes S-Class", passengers: 3, transmission: "Automatique" },
      { name: "Mercedes E-Class", passengers: 3, transmission: "Automatique" },
    ],
  },
  de: {
    title: "Fahrzeuge",
    passengers: "Passagiere",
    transmission: "Getriebe",
    prev: "Zurück",
    next: "Weiter",
    vehicles: [
      { name: "Mercedes V Class", passengers: 7, transmission: "Automatisch" },
      { name: "Mercedes S-Class", passengers: 3, transmission: "Automatisch" },
      { name: "Mercedes E-Class", passengers: 3, transmission: "Automatisch" },
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

  return (
    <section id="vehicles" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold text-gold mb-8 uppercase">{t.title}</h2>

        {/* Carrusel de Vehículos */}
        <div className="relative flex justify-center items-center overflow-hidden h-[400px]">
          {vehicles.map((vehicle, index) => {
            const isActive = index === currentIndex;
            const images = [vClass1, vClass2, sClass1, sClass2, eClass1, eClass2];

            return (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: isActive ? 0.5 : 1, scale: isActive ? 0.9 : 0.8 }}
                animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
                transition={{ duration: 0.5 }}
                className={`absolute w-[332px] h-[368px] bg-[#111] border border-gray-700 rounded-[8.22px] shadow-lg overflow-hidden relative transition-all duration-700 ease-in-out ${
                  isActive ? "z-10" : "z-0"
                }`}
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <img
                    src={images[index * 2 + imageIndex]}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay para mejorar legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
                </div>

                {/* Contenido en la parte superior */}
                <div className="absolute top-[22px] left-[18px] text-left">
                  <h3 className="text-lg font-semibold text-white w-[179px] h-[38px]">
                    {vehicle.name} →
                  </h3>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className="text-sm text-gray-300 flex items-center">
                      <i className="ri-user-line mr-1"></i> {vehicle.passengers}
                    </span>
                    <span className="text-sm text-gray-300 flex items-center">
                      <i className="ri-settings-2-line mr-1"></i> {vehicle.transmission}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1))}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gold bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition"
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>

        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gold bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition"
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </section>
  );
}

export default Vehicles;

