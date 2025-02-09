import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importar imágenes correctamente
import vClass from "/images/vclass.webp";
import sClass from "/images/sclass.webp";
import eClass from "/images/eclass.webp";

const vehicles = [
  {
    name: "Mercedes V Class",
    passengers: 15,
    transmission: "Automatic",
    image: vClass,
  },
  {
    name: "Mercedes S-Class",
    passengers: 3,
    transmission: "Automatic",
    image: sClass,
  },
  {
    name: "Mercedes E-Class",
    passengers: 3,
    transmission: "Automatic",
    image: eClass,
  },
];

function Vehicles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1));
  };

  return (
    <section id="vehicles" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">VEHICLES</h2>

        <div className="relative max-w-lg mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={vehicles[currentIndex].name}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-black bg-opacity-70 p-4 rounded-lg shadow-lg relative overflow-hidden"
            >
              {/* Imagen del vehículo */}
              <img
                src={vehicles[currentIndex].image}
                alt={vehicles[currentIndex].name}
                className="w-full h-60 object-cover rounded-md"
              />

              {/* Información del vehículo */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded-md flex items-center gap-2">
                <i className="ri-user-line text-gold"></i>
                <span>{vehicles[currentIndex].passengers}</span>
              </div>
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 px-3 py-1 rounded-md flex items-center gap-2">
                <i className="ri-roadster-line text-gold"></i>
                <span>{vehicles[currentIndex].transmission}</span>
              </div>

              {/* Nombre del vehículo */}
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">{vehicles[currentIndex].name}</h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default Vehicles;