// src/pages/Vehicles.jsx
import React, { useState, useEffect } from 'react';

function Vehicles() {
  // Array de vehículos (puedes personalizar las imágenes, nombres y descripciones)
  const vehicles = [
    {
      name: 'Mercedes S-Class',
      description: 'Asientos de piel, Wi-Fi, seguridad avanzada. Perfecta para traslados ejecutivos.',
      image: '/src/assets/mercedes-s.jpg',
    },
    {
      name: 'Mercedes V-Class',
      description: 'Espacio amplio, ideal para grupos y eventos. Lujo y confort en cada viaje.',
      image: '/src/assets/mercedes-v.jpg',
    },
    {
      name: 'Bentley Flying Spur',
      description: 'Diseño sofisticado, máxima potencia y exclusividad para ocasiones especiales.',
      image: '/src/assets/bentley-flying-spur.jpg',
    },
  ];

  // Estado para controlar el índice del slide actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia de imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [vehicles.length]);

  // Vehículo actual
  const currentVehicle = vehicles[currentIndex];

  return (
    <section id="vehicles" className="relative w-full h-[70vh] bg-black text-white overflow-hidden">
      {/* Contenedor de la imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ 
          backgroundImage: `url(${currentVehicle.image})`
        }}
      >
        {/* Overlay para mejorar lectura */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
          {currentVehicle.name}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-100">
          {currentVehicle.description}
        </p>

        {/* Indicadores o botones (opcional) */}
        <div className="flex gap-2 mt-4">
          {vehicles.map((_, index) => (
            <span
              key={index}
              className={`block w-3 h-3 rounded-full transition-colors
                ${index === currentIndex ? 'bg-gold' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vehicles;
