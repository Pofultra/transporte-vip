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
  const t = translations[language] || translations["en"]; // Si el idioma no está definido, usa inglés por defecto.

  const vehicles = t.vehicles;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 5000); // Cambia la imagen cada 5 segundos
    return () => clearInterval(imageInterval);
  }, [currentIndex]);

  return (
    <section id="vehicles" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold text-gold mb-8">{t.title}</h2>
        
        <div className="relative flex justify-center items-center overflow-hidden h-96">
          {vehicles.map((vehicle, index) => {
            const isActive = index === currentIndex;
            const images = [vClass1, vClass2, sClass1, sClass2, eClass1, eClass2];

            return (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: isActive ? 0 : 1, scale: isActive ? 0.8 : 1 }}
                animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
                className={`absolute w-80 p-4 bg-black bg-opacity-70 rounded-lg shadow-lg transition-all duration-700 ease-in-out ${
                  isActive ? "z-10" : "z-0"
                }`}
              >
                {isActive && (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={images[index * 2 + imageIndex]}
                      src={images[index * 2 + imageIndex]}
                      alt={vehicle.name}
                      className="w-full h-60 object-cover rounded-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    />
                  </AnimatePresence>
                )}
                {isActive && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                    <p className="text-sm text-gray-300">
                      {t.passengers}: {vehicle.passengers}
                    </p>
                    <p className="text-sm text-gray-300">
                      {t.transmission}: {vehicle.transmission}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Botón Anterior */}
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1))}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gold bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition"
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>

        {/* Botón Siguiente */}
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
