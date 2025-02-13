import React, { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const faqs = [
    {
      question: "¿Cómo puedo reservar un traslado con Jay’s Transfers, Comfort and Luxury?",
      answer:
        "Puede reservar fácilmente a través de nuestro sitio web, por teléfono o vía WhatsApp. Le recomendamos reservar con anticipación para garantizar disponibilidad.",
    },
    {
      question: "¿Qué tipos de vehículos ofrecen?",
      answer:
        "Disponemos de una flota de lujo que incluye Mercedes V-Class, BMW Serie 5, Mercedes Sprinters, Tesla y otros vehículos premium, garantizando confort y seguridad en cada viaje.",
    },
    {
      question: "¿Brindan servicios de transporte fuera de Suiza?",
      answer:
        "Sí, ofrecemos traslados a cualquier destino en Europa desde Suiza. Contáctenos para más detalles sobre su ruta específica.",
    },
    {
      question: "¿Pueden transportar grupos grandes?",
      answer:
        "Sí, contamos con vehículos adecuados para grupos pequeños y grandes, incluyendo Mercedes Sprinters y otros transportes ejecutivos de lujo.",
    },
    {
      question: "¿Ofrecen transporte para eventos especiales?",
      answer:
        "Sí, brindamos servicio para bodas, congresos, eventos empresariales y cualquier ocasión especial, asegurando puntualidad y elegancia.",
    },
    {
      question: "¿Cuánto cuesta un traslado desde el Aeropuerto de Zúrich a mi destino?",
      answer:
        "Las tarifas varían según la distancia y el tipo de vehículo. Puede solicitar una cotización personalizada en nuestro sitio web o contactándonos directamente.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos pagos con tarjeta de crédito/débito, transferencias bancarias y pagos en efectivo en algunos casos.",
    },
    {
      question: "¿Es necesario pagar por adelantado?",
      answer:
        "En la mayoría de los casos, sí. Para garantizar su reserva, solicitamos un pago anticipado total o parcial según el servicio solicitado.",
    },
    {
      question: "¿Qué pasa si mi vuelo se retrasa?",
      answer:
        "Monitoreamos su vuelo en tiempo real para ajustar la hora de recogida sin costo adicional.",
    },
    {
      question: "¿Puedo modificar o cancelar mi reserva?",
      answer:
        "Sí, puede modificar o cancelar su reserva según nuestras políticas de cancelación. Consulte los términos en nuestro sitio web o contáctenos para más información.",
    },
    {
      question: "¿Tienen sillas para bebés o asientos elevadores para niños?",
      answer:
        "Sí, ofrecemos sillas de seguridad para bebés y niños bajo solicitud previa y sin costo adicional.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-16 text-center">
      <div className="container mx-auto px-4 md:max-w-xl lg:max-w-2xl">
        <h2 className="text-3xl font-bold text-gold mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="text-center">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-lg font-semibold text-gold"
              >
                {item.question}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300 mt-2"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;