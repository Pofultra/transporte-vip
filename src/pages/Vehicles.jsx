import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importar imágenes correctamente
import vClass from "/images/vclass.webp";
import sClass from "/images/sclass.webp";
import eClass from "/images/eclass.webp";

function Vehicles() {
  const vehicles = [
    {
      name: "Mercedes S-Class",
      description:
        "Asientos de piel, Wi-Fi, seguridad avanzada. Perfecta para traslados ejecutivos.",
      image: sClass,
    },
    {
      name: "Mercedes V-Class",
      description:
        "Espacio amplio, ideal para grupos y eventos. Lujo y confort en cada viaje.",
      image: vClass,
    },
    {
      name: "Mercedes E-Class",
      description:
        "Elegancia y versatilidad para cualquier ocasión. Confort premium en cada trayecto.",
      image: eClass,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [vehicles.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="vehicles" className="relative w-full bg-black text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Contenedor de la imagen */}
        <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={vehicles[currentIndex].image}
              src={vehicles[currentIndex].image}
              alt={vehicles[currentIndex].name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            />
          </AnimatePresence>

          {/* Botones de navegación dentro del contenedor */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition"
            aria-label="Vehículo anterior"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition"
            aria-label="Vehículo siguiente"
          >
            ▶
          </button>
        </div>

        {/* Tarjeta superpuesta en la parte baja de la imagen */}
        <motion.div
          key={vehicles[currentIndex].name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="relative -mt-14 w-full max-w-2xl bg-blue bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg text-center border border-white/20"
        >
          <h2 className="text-3xl font-bold text-gold">{vehicles[currentIndex].name}</h2>
          <p className="text-lg text-gray-200 mt-2">{vehicles[currentIndex].description}</p>
        </motion.div>

        {/* Indicadores de navegación */}
        <div className="flex gap-2 mt-6">
          {vehicles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentIndex ? "bg-gold scale-110" : "bg-gray-400"
              }`}
              aria-label={`Seleccionar ${vehicles[index].name}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vehicles;
