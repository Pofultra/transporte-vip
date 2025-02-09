import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import preTestimonios from "/images/pretestimonio.webp";

function Testimonials() {
  const testimonials = [
    {
      quote: "Un servicio impecable. Puntualidad y discreción en todo momento.",
      author: "— Cliente VIP",
    },
    {
      quote: "Hicieron mi boda inolvidable. El chofer estuvo atento a cada detalle.",
      author: "— Pareja recién casada",
    },
    {
      quote: "El mejor transporte ejecutivo que he usado. Lujo y profesionalismo total.",
      author: "— CEO Corporativo",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="bg-black text-white py-16 relative">
      {/* Imagen superior con efecto de foco */}
      <div className="relative w-full flex justify-center mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src={preTestimonios} 
          alt="Luxury Car" 
          className="w-full max-w-3xl object-cover opacity-80" 
        />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-white">TRUST US TO DELIVER</h3>
          <p className="text-lg md:text-xl text-gray-300">EXCELLENCE ON EVERY JOURNEY</p>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">TESTIMONIALS</h2>

        {/* Contenedor de testimonios con cambio automático */}
        <div className="relative w-full max-w-3xl overflow-hidden h-32 flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonials[currentIndex].quote}
              variants={variants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute w-full text-center bg-white bg-opacity-10 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/10"
            >
              <p className="text-gray-100 italic text-lg">"{testimonials[currentIndex].quote}"</p>
              <p className="text-gold font-semibold mt-4">{testimonials[currentIndex].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores de testimonio */}
        <div className="flex gap-2 mt-6 justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-gold scale-110" : "bg-gray-400"
              }`}
              aria-label={`Seleccionar testimonio ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;