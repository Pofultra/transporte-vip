import React, { useState } from "react";

function App() {
  const [language, setLanguage] = useState("es"); // Estado para el selector de idiomas
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa
  const [currentTestimonial, setCurrentTestimonial] = useState(0); // Estado para el carrusel

  const faqs = [
    {
      question: "¿Qué incluye el servicio de transporte?",
      answer:
        "Incluye chofer profesional, vehículo premium, Wi-Fi a bordo, y máxima discreción.",
    },
    {
      question: "¿Cómo puedo hacer una reserva?",
      answer:
        "Puedes hacerla en línea en la sección de “Reservas” o llamando a nuestro número de contacto.",
    },
    // Más FAQs...
  ];
  const vehicles = [
    {
      name: "Mercedes S-Class",
      specs: "Asientos de piel, Wi-Fi, seguridad avanzada",
      imgUrl: "/path/to/mercedes-s.jpg",
    },
    {
      name: "Mercedes V-Class",
      specs: "Espacio amplio, ideal para grupos y eventos",
      imgUrl: "/path/to/mercedes-v.jpg",
    },
    // Agregar más vehículos
  ];
  const services = [
    {
      title: "Ejecutivo",
      description:
        "Transporte VIP para figuras políticas, empresarios y clientes de alto perfil.",
      imgUrl: "/path/to/ejecutivo.jpg",
    },
    {
      title: "Niños Especiales",
      description:
        "Conductores capacitados, vehículos adaptados y asistencia especial.",
      imgUrl: "/path/to/ninos.jpg",
    },
    {
      title: "Adultos Mayores",
      description:
        "Ayuda personalizada, seguridad y comodidad para traslados especializados.",
      imgUrl: "/path/to/adultos.jpg",
    },
    {
      title: "Eventos Especiales",
      description:
        "Transporte de lujo para bodas, aniversarios y celebraciones premium.",
      imgUrl: "/path/to/eventos.jpg",
    },
  ];
  // Traducciones básicas
  const translations = {
    es: {
      inicio: "Inicio",
      sobreNosotros: "Sobre Nosotros",
      servicios: "Servicios",
      contacto: "Contacto",
      vehiculos: "Vehículos",
      faq: "FAQ",
      testimonios: "Testimonios",
      slogan: "Transporte de Lujo",
      subtitulo: "Experiencia exclusiva para tus viajes más importantes.",
      reservar: "Reservar Ahora",
      derechosReservados: "Todos los derechos reservados.",
    },
    en: {
      inicio: "Home",
      sobreNosotros: "About Us",
      servicios: "Services",
      contacto: "Contact",
      vehiculos: "Vehicles",
      faq: "FAQ",
      testimonios: "Testimonials",
      slogan: "Luxury Transport",
      subtitulo: "Exclusive experience for your most important trips.",
      reservar: "Book Now",
      derechosReservados: "All rights reserved.",
    },
    fr: {
      inicio: "Accueil",
      sobreNosotros: "À Propos",
      servicios: "Services",
      contacto: "Contact",
      vehiculos: "Véhicules",
      faq: "FAQ",
      testimonios: "Témoignages",
      slogan: "Transport de Luxe",
      subtitulo: "Expérience exclusive pour vos voyages les plus importants.",
      reservar: "Réserver Maintenant",
      derechosReservados: "Tous droits réservés.",
    },
    de: {
      inicio: "Startseite",
      sobreNosotros: "Über Uns",
      servicios: "Dienstleistungen",
      contacto: "Kontakt",
      vehiculos: "Fahrzeuge",
      faq: "FAQ",
      testimonios: "Bewertungen",
      slogan: "Luxus-Transport",
      subtitulo: "Exklusive Erfahrung für Ihre wichtigsten Reisen.",
      reservar: "Jetzt Buchen",
      derechosReservados: "Alle Rechte vorbehalten.",
    },
  };

  const t = translations[language];

  // Datos de los testimonios
  const testimonials = [
    {
      quote: "El servicio fue excepcional. ¡Recomiendo Luxury Transport!",
      author: "- Juan Pérez",
    },
    {
      quote:
        "Una experiencia inolvidable. Los conductores son muy profesionales.",
      author: "- María López",
    },
    {
      quote: "El lujo redefinido. ¡Sin duda volveré a usar este servicio!",
      author: "- Carlos Ramírez",
    },
  ];

  // Función para cambiar automáticamente los testimonios
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 bg-gray-900 md:px-8">
        <div className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="h-12 w-auto mr-4"
          />
          <h1 className="text-xl font-bold">Luxury Transport</h1>
        </div>
        {/* Menú Hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-4">
          <a href="#inicio" className="hover:text-gray-400">
            {t.inicio}
          </a>
          <a href="#sobre-nosotros" className="hover:text-gray-400">
            {t.sobreNosotros}
          </a>
          <a href="#servicios" className="hover:text-gray-400">
            {t.servicios}
          </a>
          <a href="#vehiculos" className="hover:text-gray-400">
            {t.vehiculos}
          </a>
          <a href="#faq" className="hover:text-gray-400">
            {t.faq}
          </a>
          <a href="#testimonios" className="hover:text-gray-400">
            {t.testimonios}
          </a>
          <a href="#contacto" className="hover:text-gray-400">
            {t.contacto}
          </a>
        </nav>
        {/* Selector de Idiomas */}
        <div className="flex items-center space-x-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white px-2 py-1 rounded"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </header>

      {/* Menú Móvil */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-900`}
      >
        <nav className="flex flex-col space-y-2 p-4">
          <a href="#inicio" className="hover:text-gray-400">
            {t.inicio}
          </a>
          <a href="#sobre-nosotros" className="hover:text-gray-400">
            {t.sobreNosotros}
          </a>
          <a href="#servicios" className="hover:text-gray-400">
            {t.servicios}
          </a>
          <a href="#vehiculos" className="hover:text-gray-400">
            {t.vehiculos}
          </a>
          <a href="#faq" className="hover:text-gray-400">
            {t.faq}
          </a>
          <a href="#testimonios" className="hover:text-gray-400">
            {t.testimonios}
          </a>
          <a href="#contacto" className="hover:text-gray-400">
            {t.contacto}
          </a>
        </nav>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-black text-white"
      >
        {/* Imagen de fondo y overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/path/to/hero-image.jpg)" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            El transporte VIP que figuras de alto nivel eligen.
          </h1>
          <p className="text-xl mb-6">
            Especialistas en Traslados Ejecutivos, Niños Especiales, Adultos
            Mayores y Eventos Especiales.
          </p>
          <a
            href="#reservas"
            className="bg-gold text-black px-6 py-3 rounded hover:bg-yellow-600"
          >
            Reserva Ahora
          </a>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="about" className="bg-black text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/path/to/about-image.jpg"
              alt="Imagen sobre nosotros"
              className="rounded shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-gray-300 mb-4">
              Contamos con amplia experiencia en transporte de figuras políticas
              de alto nivel: vicepresidentes, secretarios de Estado y
              mandatarios. Nuestro compromiso es brindar discreción,
              profesionalismo y la mejor calidad de servicio.
            </p>
            <p className="text-gray-300">
              Nuestro equipo de conductores altamente capacitados y un enfoque
              absoluto en la seguridad, hacen de nuestro servicio la opción
              preferida de quienes valoran la excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="services" className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8">
            Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-900 p-4 rounded shadow"
              >
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehículos */}
      <section id="vehicles" className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gold mb-8">Vehículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v) => (
              <div key={v.name} className="bg-gray-900 p-4 rounded shadow">
                <img
                  src={v.imgUrl}
                  alt={v.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">{v.name}</h3>
                <p className="text-gray-300">{v.specs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios con Carrusel */}
      <section id="testimonios" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t.testimonios}</h2>
          <div className="relative">
            <div className="flex justify-center items-center">
              <p className="text-gray-400 italic text-lg">
                {testimonials[currentTestimonial].quote}
              </p>
            </div>
            <p className="font-bold mt-4">
              {testimonials[currentTestimonial].author}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gold mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details key={index} className="bg-gray-900 p-4 rounded">
                <summary className="cursor-pointer text-xl text-gold font-semibold mb-2">
                  {item.question}
                </summary>
                <p className="text-gray-300 mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t.contacto}</h2>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-4 text-center">
        <p>© 2025 VIPTransport. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#privacy" className="hover:text-gold">
            Política de Privacidad
          </a>
          <a href="#terms" className="hover:text-gold">
            Términos de Servicio
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
