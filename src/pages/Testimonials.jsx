import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import preTestimonios from "/images/pretestimonio2.webp";

const translations = {
  en: {
    title: "Testimonials",
    trust: "TRUST US TO DELIVER",
    excellence: "EXCELLENCE ON EVERY JOURNEY",
    testimonials: [
      {
        quote: "I booked a transfer with Jay’s Transfers from Zurich Airport to my hotel in Interlaken, and the experience was flawless. The driver was punctual, the vehicle was luxurious, and the service was first-class. I will definitely book with them again on my next trip to Switzerland.",
        author: "— María G., Spain",
      },
      {
        quote: "From the first contact, Jay’s Transfers team showed a highly professional service. I was welcomed at the airport with a personalized sign, the Mercedes V-Class was incredibly comfortable, and the driver was very attentive. 100% recommended for those looking for a luxury service in Switzerland!",
        author: "— James L., United Kingdom",
      },
      {
        quote: "I used Jay’s Transfers for a business trip in Zurich and Geneva, and the service was exceptional. Punctuality, discretion, and comfort—everything I need when traveling for work. My company will definitely continue to trust them.",
        author: "— Stefan M., Germany",
      },
      {
        quote: "I traveled with my wife and two young children, and Jay’s Transfers provided child seats at no additional cost. The driver was very kind and helped us with all the luggage. An excellent experience for families looking for comfort and safety!",
        author: "— Laura P., Argentina",
      },
      {
        quote: "We booked a private tour to Mount Titlis with Jay’s Transfers, and the experience was amazing. They picked us up at the hotel in a spotless Tesla, the driver explained everything about the route, and took us to the best spots. A luxury service worth every penny.",
        author: "— Olivier D., France",
      },
    ],
  },
  es: {
    title: "Testimonios",
    trust: "CONFÍA EN NOSOTROS PARA BRINDAR",
    excellence: "EXCELENCIA EN CADA VIAJE",
    testimonials: [
      {
        quote: "Reservé un traslado con Jay’s Transfers desde el Aeropuerto de Zúrich hasta mi hotel en Interlaken, y la experiencia fue impecable. El chofer fue puntual, el vehículo de lujo y el servicio de primera clase. Sin duda, volveré a reservar con ellos en mi próximo viaje a Suiza.",
        author: "— María G., España",
      },
      {
        quote: "Desde el primer contacto, el equipo de Jay’s Transfers demostró un servicio altamente profesional. Me recibieron en el aeropuerto con un cartel personalizado, el Mercedes V-Class era increíblemente cómodo y el conductor muy atento. ¡100% recomendado para quienes buscan un servicio de lujo en Suiza!",
        author: "— James L., Reino Unido",
      },
      {
        quote: "Utilicé Jay’s Transfers para un viaje de negocios en Zúrich y Ginebra, y el servicio fue excepcional. Puntualidad, discreción y comodidad, todo lo que necesito cuando viajo por trabajo. Sin duda, mi empresa seguirá confiando en ellos.",
        author: "— Stefan M., Alemania",
      },
      {
        quote: "Viajé con mi esposa y dos hijos pequeños, y Jay’s Transfers nos proporcionó sillas de seguridad sin costo adicional. El conductor fue muy amable y nos ayudó con todo el equipaje. ¡Una experiencia excelente para familias que buscan comodidad y seguridad!",
        author: "— Laura P., Argentina",
      },
      {
        quote: "Reservamos un tour privado al Monte Titlis con Jay’s Transfers, y la experiencia fue increíble. Nos recogieron en el hotel en un Tesla impecable, el conductor nos explicó todo sobre la ruta y nos llevó a los mejores lugares. Un servicio de lujo que vale cada centavo.",
        author: "— Olivier D., Francia",
      },
    ],
  },
  fr: {
    title: "Témoignages",
    trust: "FAITES-NOUS CONFIANCE POUR FOURNIR",
    excellence: "L'EXCELLENCE À CHAQUE VOYAGE",
    testimonials: [
      {
        quote: "J’ai réservé un transfert avec Jay’s Transfers de l’aéroport de Zurich à mon hôtel à Interlaken, et l’expérience a été impeccable. Le chauffeur était ponctuel, le véhicule luxueux et le service de première classe. Je réserverai certainement avec eux lors de mon prochain voyage en Suisse.",
        author: "— María G., Espagne",
      },
      {
        quote: "Dès le premier contact, l'équipe de Jay’s Transfers a démontré un service très professionnel. J’ai été accueilli à l’aéroport avec une pancarte personnalisée, la Mercedes V-Class était incroyablement confortable et le chauffeur très attentif. 100% recommandé pour ceux qui recherchent un service de luxe en Suisse !",
        author: "— James L., Royaume-Uni",
      },
      {
        quote: "J’ai utilisé Jay’s Transfers pour un voyage d’affaires à Zurich et Genève, et le service était exceptionnel. Ponctualité, discrétion et confort, tout ce dont j’ai besoin lorsque je voyage pour le travail. Mon entreprise continuera certainement à leur faire confiance.",
        author: "— Stefan M., Allemagne",
      },
      {
        quote: "J’ai voyagé avec ma femme et mes deux jeunes enfants, et Jay’s Transfers nous a fourni des sièges pour enfants sans frais supplémentaires. Le chauffeur était très aimable et nous a aidés avec tous nos bagages. Une excellente expérience pour les familles recherchant confort et sécurité !",
        author: "— Laura P., Argentine",
      },
      {
        quote: "Nous avons réservé une visite privée au mont Titlis avec Jay’s Transfers, et l’expérience a été incroyable. Ils sont venus nous chercher à l’hôtel dans une Tesla impeccable, le chauffeur nous a tout expliqué sur la route et nous a emmenés aux meilleurs endroits. Un service de luxe qui en vaut chaque centime.",
        author: "— Olivier D., France",
      },
    ],
  },
  de: {
    title: "Erfahrungsberichte",
    trust: "VERTRAUEN SIE UNS, UM ZU LIEFERN",
    excellence: "EXZELLENZ AUF JEDER REISE",
    testimonials: [
      {
        quote: "Ich habe mit Jay’s Transfers einen Transfer vom Flughafen Zürich zu meinem Hotel in Interlaken gebucht, und die Erfahrung war makellos. Der Fahrer war pünktlich, das Fahrzeug luxuriös und der Service erstklassig. Ich werde auf meiner nächsten Reise in die Schweiz auf jeden Fall wieder buchen.",
        author: "— María G., Spanien",
      },
      {
        quote: "Von der ersten Kontaktaufnahme an zeigte das Team von Jay’s Transfers einen äußerst professionellen Service. Ich wurde am Flughafen mit einem personalisierten Schild empfangen, die Mercedes V-Klasse war unglaublich komfortabel und der Fahrer sehr aufmerksam. 100% empfehlenswert für alle, die einen luxuriösen Service in der Schweiz suchen!",
        author: "— James L., Vereinigtes Königreich",
      },
      {
        quote: "Ich habe Jay’s Transfers für eine Geschäftsreise nach Zürich und Genf genutzt, und der Service war außergewöhnlich. Pünktlichkeit, Diskretion und Komfort – alles, was ich brauche, wenn ich geschäftlich reise. Mein Unternehmen wird ihnen weiterhin vertrauen.",
        author: "— Stefan M., Deutschland",
      },
      {
        quote: "Ich reiste mit meiner Frau und zwei kleinen Kindern, und Jay’s Transfers stellte uns kostenlose Kindersitze zur Verfügung. Der Fahrer war sehr freundlich und half uns mit dem gesamten Gepäck. Eine hervorragende Erfahrung für Familien, die Komfort und Sicherheit suchen!",
        author: "— Laura P., Argentinien",
      },
      {
        quote: "Wir haben eine private Tour zum Titlis mit Jay’s Transfers gebucht, und die Erfahrung war unglaublich. Sie holten uns im Hotel mit einem makellosen Tesla ab, der Fahrer erklärte uns alles über die Route und brachte uns zu den besten Orten. Ein Luxus-Service, der jeden Cent wert ist.",
        author: "— Olivier D., Frankreich",
      },
    ],
  },
};

function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % t.testimonials.length);
    }, 30000); // Cambio cada 30 segundos
    return () => clearInterval(interval);
  }, [t.testimonials.length]);

  return (
    <section id="testimonials" className="bg-black text-white py-16 relative">
      {/* Imagen superior con bandas de difuminación */}
      <div className="relative w-full flex justify-center mb-8 overflow-hidden">
        <img
          src={preTestimonios}
          alt="Luxury Car"
          className="w-full max-w-3xl object-cover grayscale"
        />

        {/* Bandas de difuminación superior e inferior */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>

        {/* Texto sobre la imagen (siempre por encima) */}
        <div className="absolute top-10 w-[404px] h-[82px] text-center z-20">
          <h3 className="font-bebas text-[22px] leading-[32px] font-bold text-white uppercase">
            {t.trust}
          </h3>
          <p className="font-bebas text-[22px] leading-[33px] font-bold text-gris uppercase">
            {t.excellence}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">{t.title}</h2>

        {/* Contenedor de testimonios (animado) */}
        <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center overflow-hidden min-h-[180px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={t.testimonials[currentIndex].quote}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full text-center bg-transparent p-6 rounded-lg"
            >
              <p className="text-gray-100 italic text-lg">
                "{t.testimonials[currentIndex].quote}"
              </p>
              <p className="text-gold font-semibold mt-4">
                {t.testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;