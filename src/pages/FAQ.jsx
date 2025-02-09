import React, { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const faqs = [
    {
      question: "¿Qué incluye el servicio de transporte?",
      answer:
        "Chofer profesional, vehículo premium, Wi-Fi, y la máxima discreción.",
    },
    {
      question: "¿Cómo puedo hacer una reserva?",
      answer:
        "Puedes reservar en línea en la sección “Reservas” o llamando a nuestro número de contacto.",
    },
    {
      question: "¿El servicio está disponible las 24 horas?",
      answer:
        "Sí, ofrecemos transporte VIP disponible 24/7 con previa reserva.",
    },
    {
      question: "¿Puedo elegir el modelo del vehículo?",
      answer:
        "Sí, puedes elegir entre nuestros modelos de Mercedes S-Class, V-Class y E-Class, según disponibilidad.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:max-w-2xl lg:max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-4 text-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-xl text-gold font-semibold"
              >
                {item.question}
                <span className="text-gray-400">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-300 mt-2">{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
