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
    title: "FAQ",
    faqs: [
      {
        question:
          "Comment puis-je réserver un transfert avec Jay’s Transfers, Confort et Luxe ?",
        answer:
          "Vous pouvez facilement réserver via notre site web, par téléphone ou via WhatsApp. Nous recommandons de réserver à l'avance pour assurer la disponibilité.",
      },
      {
        question: "Quels types de véhicules proposez-vous ?",
        answer:
          "Nous disposons d'une flotte de luxe qui inclut des Mercedes V-Class, BMW Série 5, Mercedes Sprinters, Tesla et d'autres véhicules premium, garantissant confort et sécurité à chaque trajet.",
      },
      {
        question:
          "Proposez-vous des services de transport en dehors de la Suisse ?",
        answer:
          "Oui, nous offrons des transferts vers n'importe quelle destination en Europe depuis la Suisse. Contactez-nous pour plus de détails sur votre itinéraire spécifique.",
      },
      {
        question: "Pouvez-vous accueillir de grands groupes ?",
        answer:
          "Oui, nous avons des véhicules adaptés aux petits et grands groupes, y compris des Mercedes Sprinters et d'autres transports exécutifs de luxe.",
      },
      {
        question: "Proposez-vous des transports pour des événements spéciaux ?",
        answer:
          "Oui, nous fournissons des services pour les mariages, conférences, événements d'entreprise et toute occasion spéciale, en assurant ponctualité et élégance.",
      },
      {
        question:
          "Combien coûte un transfert de l'aéroport de Zurich à ma destination ?",
        answer:
          "Les tarifs varient en fonction de la distance et du type de véhicule. Vous pouvez demander un devis personnalisé sur notre site web ou en nous contactant directement.",
      },
      {
        question: "Quels modes de paiement acceptez-vous ?",
        answer:
          "Nous acceptons les paiements par carte de crédit/débit, virement bancaire et, dans certains cas, en espèces.",
      },
      {
        question: "Est-il nécessaire de payer à l'avance ?",
        answer:
          "Dans la plupart des cas, oui. Pour garantir votre réservation, nous demandons un paiement intégral ou partiel à l'avance selon le service demandé.",
      },
      {
        question: "Que se passe-t-il si mon vol est retardé ?",
        answer:
          "Nous suivons votre vol en temps réel pour ajuster l'heure de prise en charge sans frais supplémentaires.",
      },
      {
        question: "Puis-je modifier ou annuler ma réservation ?",
        answer:
          "Oui, vous pouvez modifier ou annuler votre réservation conformément à nos politiques d'annulation. Consultez les conditions sur notre site web ou contactez-nous pour plus d'informations.",
      },
      {
        question:
          "Disposez-vous de sièges bébé ou rehausseurs pour enfants ?",
        answer:
          "Oui, nous proposons des sièges de sécurité pour bébés et enfants sur demande, sans coût supplémentaire.",
      },
    ],
  },
de: {
    title: "FAQ",
    faqs: [
      {
        question:
          "Wie kann ich einen Transfer bei Jay’s Transfers, Komfort und Luxus, buchen?",
        answer:
          "Sie können ganz einfach über unsere Website, per Telefon oder über WhatsApp buchen. Wir empfehlen eine frühzeitige Buchung, um die Verfügbarkeit zu gewährleisten.",
      },
      {
        question: "Welche Fahrzeugtypen bieten Sie an?",
        answer:
          "Wir verfügen über eine Luxusflotte, die Mercedes V-Klasse, BMW 5er Serie, Mercedes Sprinter, Tesla und andere Premiumfahrzeuge umfasst, um Komfort und Sicherheit bei jeder Fahrt zu gewährleisten.",
      },
      {
        question:
          "Bieten Sie Transportdienstleistungen außerhalb der Schweiz an?",
        answer:
          "Ja, wir bieten Transfers zu jedem Ziel in Europa ab der Schweiz an. Kontaktieren Sie uns für weitere Details zu Ihrer spezifischen Route.",
      },
      {
        question: "Können Sie große Gruppen befördern?",
        answer:
          "Ja, wir haben Fahrzeuge, die sowohl für kleine als auch für große Gruppen geeignet sind, einschließlich Mercedes Sprinter und anderer luxuriöser Business-Transportmittel.",
      },
      {
        question: "Bieten Sie Transport für besondere Anlässe an?",
        answer:
          "Ja, wir bieten Service für Hochzeiten, Konferenzen, Firmenveranstaltungen und besondere Anlässe an und stellen dabei Pünktlichkeit und Eleganz sicher.",
      },
      {
        question:
          "Was kostet ein Transfer vom Flughafen Zürich zu meinem Ziel?",
        answer:
          "Die Preise variieren je nach Entfernung und Fahrzeugtyp. Sie können ein personalisiertes Angebot auf unserer Website anfordern oder uns direkt kontaktieren.",
      },
      {
        question: "Welche Zahlungsmethoden akzeptieren Sie?",
        answer:
          "Wir akzeptieren Kredit-/Debitkartenzahlungen, Banküberweisungen und in einigen Fällen Barzahlungen.",
      },
      {
        question: "Ist eine Vorauszahlung erforderlich?",
        answer:
          "In den meisten Fällen ja. Um Ihre Reservierung zu garantieren, verlangen wir eine vollständige oder teilweise Vorauszahlung, abhängig von dem angeforderten Service.",
      },
      {
        question: "Was passiert, wenn mein Flug Verspätung hat?",
        answer:
          "Wir verfolgen Ihren Flug in Echtzeit, um die Abholzeit anzupassen, ohne zusätzliche Kosten.",
      },
      {
        question: "Kann ich meine Reservierung ändern oder stornieren?",
        answer:
          "Ja, Sie können Ihre Reservierung gemäß unseren Stornierungsrichtlinien ändern oder stornieren. Überprüfen Sie die Bedingungen auf unserer Website oder kontaktieren Sie uns für weitere Informationen.",
      },
      {
        question:
          "Haben Sie Babysitze oder Kindersitzerhöhungen?",
        answer:
          "Ja, wir bieten auf Anfrage Babysitze und Kindersicherheitssitze kostenlos an.",
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
