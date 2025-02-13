import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

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
import sprinter1 from "/images/sprinter1.webp";
import sprinter2 from "/images/sprinter2.webp";


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
      { name: "Mercedes Sprinter ", passengers: 15, transmission: "Mechanical", images: [sprinter1, sprinter2] },
      { name: "Buss", passengers: 50, transmission: "Mechanical", images: [bus1] },
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
    <section id="vehicles" className="bg-black text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8 uppercase">{t.title}</h2>

        {/* Carrusel de Vehículos */}
        <div className="relative flex justify-center items-center h-[400px]">
          {vehicles.map((vehicle, index) => {
            const isActive = index === currentIndex;
            const prevIndex = (currentIndex - 1 + vehicles.length) % vehicles.length;
            const nextIndex = (currentIndex + 1) % vehicles.length;

            let positionClass = "opacity-40 scale-75"; // Tarjetas más alejadas
            if (index === prevIndex) positionClass = "opacity-70 scale-90 -translate-x-[100px]";
            if (index === nextIndex) positionClass = "opacity-70 scale-90 translate-x-[100px]";
            if (isActive) positionClass = "opacity-100 scale-100 w-[75%]"; // Tarjeta central más grande

            return (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0.5, scale: 0.9, x: (index - currentIndex) * 300 }}
                animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9, x: (index - currentIndex) * 300 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute h-[360px] bg-[#111] border border-gray-700 rounded-[8.22px] shadow-lg overflow-hidden relative transition-all duration-400 ease-in-out ${positionClass}`}
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <img
                    src={vehicle.images[imageIndex]} // Se toma la imagen del vehículo
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay para mejorar legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
                </div>

                {/* Contenedor con fondo semitransparente para mejorar el contraste */}
                <div className="absolute top-[15px] left-[15px] right-[15px] bg-black bg-opacity-50 p-3 rounded-md">
                  <h3 className="text-lg font-semibold text-white drop-shadow-lg w-[179px] h-[38px]">
                    {vehicle.name} →
                  </h3>
                  <div className="flex items-center space-x-3 mt-1 text-white">
                    <span className="text-sm flex items-center">
                      <i className="ri-user-line mr-1"></i> {vehicle.passengers}
                    </span>
                    <span className="text-sm flex items-center">
                      <i className="ri-settings-2-line mr-1"></i> {vehicle.transmission}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botones de navegación SIEMPRE visibles */}
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1))}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gold bg-opacity-80 p-3 rounded-full text-white hover:bg-opacity-100 transition z-20"
        >
          <i className="ri-arrow-left-s-line text-2xl"></i>
        </button>

        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length)}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gold bg-opacity-80 p-3 rounded-full text-white hover:bg-opacity-100 transition z-20"
        >
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </button>
      </div>
    </section>
  );
}

export default Vehicles;
