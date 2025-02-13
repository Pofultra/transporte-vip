import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Traducciones
const translations = {
  en: {
    title: "FAQ",
    faqs: [
      {
        question:
          "How can I book a transfer with Jay’s Transfers, Comfort and Luxury?",
        answer:
          "You can easily book through our website, by phone, or via WhatsApp. We recommend booking in advance to ensure availability.",
      },
      {
        question: "What types of vehicles do you offer?",
        answer:
          "We have a luxury fleet that includes Mercedes V-Class, BMW Series 5, Mercedes Sprinters, Tesla, and other premium vehicles, ensuring comfort and safety on every trip.",
      },
      {
        question:
          "Do you provide transportation services outside of Switzerland?",
        answer:
          "Yes, we offer transfers to any destination in Europe from Switzerland. Contact us for more details about your specific route.",
      },
      {
        question: "Can you accommodate large groups?",
        answer:
          "Yes, we have vehicles suitable for both small and large groups, including Mercedes Sprinters and other luxury executive transports.",
      },
      {
        question: "Do you offer transportation for special events?",
        answer:
          "Yes, we provide service for weddings, conferences, corporate events, and any special occasion, ensuring punctuality and elegance.",
      },
      {
        question:
          "How much does a transfer from Zurich Airport to my destination cost?",
        answer:
          "Rates vary depending on distance and vehicle type. You can request a personalized quote on our website or by contacting us directly.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit/debit card payments, bank transfers, and cash payments in some cases.",
      },
      {
        question: "Is it necessary to pay in advance?",
        answer:
          "In most cases, yes. To guarantee your reservation, we require a full or partial advance payment depending on the requested service.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "We monitor your flight in real-time to adjust the pickup time at no additional cost.",
      },
      {
        question: "Can I modify or cancel my reservation?",
        answer:
          "Yes, you can modify or cancel your reservation according to our cancellation policies. Check the terms on our website or contact us for more information.",
      },
      {
        question: "Do you have baby seats or booster seats for children?",
        answer:
          "Yes, we offer baby and child safety seats upon request at no additional cost.",
      },
    ],
  },
  es: {
    title: "Preguntas Frecuentes",
    faqs: [
      {
        question:
          "¿Cómo puedo reservar un traslado con Jay’s Transfers, Comfort and Luxury?",
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
        question:
          "¿Cuánto cuesta un traslado desde el Aeropuerto de Zúrich a mi destino?",
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
    ],
  },
  fr: {
    title: "Questions Fréquemment Posées",
    faqs: [
      {
        question:
          "Comment puis-je réserver un transfert avec Jay’s Transfers, Comfort and Luxury?",
        answer:
          "Vous pouvez facilement réserver via notre site Web, par téléphone ou via WhatsApp. Nous vous recommandons de réserver à l'avance pour garantir la disponibilité.",
      },
      {
        question: "Quels types de véhicules proposez-vous?",
        answer:
          "Nous disposons d'une flotte de luxe comprenant Mercedes V-Class, BMW Série 5, Mercedes Sprinters, Tesla et d'autres véhicules haut de gamme, garantissant confort et sécurité à chaque voyage.",
      },
      {
        question:
          "Fournissez-vous des services de transport en dehors de la Suisse?",
        answer:
          "Oui, nous proposons des transferts vers toute destination en Europe depuis la Suisse. Contactez-nous pour plus de détails sur votre itinéraire spécifique.",
      },
    ],
  },
  de: {
    title: "Häufig Gestellte Fragen",
    faqs: [
      {
        question:
          "Wie kann ich einen Transfer mit Jay’s Transfers, Comfort and Luxury buchen?",
        answer:
          "Sie können ganz einfach über unsere Website, per Telefon oder über WhatsApp buchen. Wir empfehlen, im Voraus zu buchen, um die Verfügbarkeit sicherzustellen.",
      },
      {
        question: "Welche Fahrzeugtypen bieten Sie an?",
        answer:
          "Wir verfügen über eine Luxusflotte, darunter Mercedes V-Klasse, BMW 5er-Serie, Mercedes Sprinters, Tesla und andere Premium-Fahrzeuge, die Komfort und Sicherheit auf jeder Reise gewährleisten.",
      },
      {
        question: "Bieten Sie Transportdienste außerhalb der Schweiz an?",
        answer:
          "Ja, wir bieten Transfers zu jedem Ziel in Europa von der Schweiz aus an. Kontaktieren Sie uns für weitere Details zu Ihrer spezifischen Route.",
      },
      {
        question: "Können Sie große Gruppen befördern?",
        answer:
          "Ja, wir verfügen über Fahrzeuge für kleine und große Gruppen, darunter Mercedes Sprinters und andere luxuriöse Executive-Transporte.",
      },
    ],
  },
};

function FAQ() {
  const { language } = useLanguage();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-16 text-center">
      <div className="container mx-auto px-4 md:max-w-xl lg:max-w-2xl">
        <h2 className="text-3xl font-bold text-gold mb-8">{t.title}</h2>
        <div className="space-y-6">
          {t.faqs.map((item, index) => (
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
