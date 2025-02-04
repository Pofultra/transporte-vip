import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('es'); // Estado para el selector de idiomas

  // Traducciones básicas
  const translations = {
    es: {
      inicio: 'Inicio',
      sobreNosotros: 'Sobre Nosotros',
      servicios: 'Servicios',
      contacto: 'Contacto',
      vehiculos: 'Vehículos',
      faq: 'FAQ',
      testimonios: 'Testimonios',
      slogan: 'Transporte de Lujo',
      subtitulo: 'Experiencia exclusiva para tus viajes más importantes.',
      reservar: 'Reservar Ahora',
    },
    en: {
      inicio: 'Home',
      sobreNosotros: 'About Us',
      servicios: 'Services',
      contacto: 'Contact',
      vehiculos: 'Vehicles',
      faq: 'FAQ',
      testimonios: 'Testimonials',
      slogan: 'Luxury Transport',
      subtitulo: 'Exclusive experience for your most important trips.',
      reservar: 'Book Now',
    },
    fr: {
      inicio: 'Accueil',
      sobreNosotros: 'À Propos',
      servicios: 'Services',
      contacto: 'Contact',
      vehiculos: 'Véhicules',
      faq: 'FAQ',
      testimonios: 'Témoignages',
      slogan: 'Transport de Luxe',
      subtitulo: 'Expérience exclusive pour vos voyages les plus importants.',
      reservar: 'Réserver Maintenant',
    },
    de: {
      inicio: 'Startseite',
      sobreNosotros: 'Über Uns',
      servicios: 'Dienstleistungen',
      contacto: 'Kontakt',
      vehiculos: 'Fahrzeuge',
      faq: 'FAQ',
      testimonios: 'Bewertungen',
      slogan: 'Luxus-Transport',
      subtitulo: 'Exklusive Erfahrung für Ihre wichtigsten Reisen.',
      reservar: 'Jetzt Buchen',
    },
  };

  const t = translations[language];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-gray-900">
        <div className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="h-12 w-auto mr-4"
          />
          <h1 className="text-xl font-bold">Luxury Transport</h1>
        </div>
        <nav className="flex space-x-4">
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

      {/* Hero Section */}
      <section
        id="inicio"
        className="flex flex-col items-center justify-center h-screen bg-[url('/src/assets/background.jpg')] bg-cover bg-center"
      >
        <h1 className="text-6xl font-bold text-center mb-4">{t.slogan}</h1>
        <p className="text-xl text-center mb-8">{t.subtitulo}</p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition">
          {t.reservar}
        </button>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t.sobreNosotros}</h2>
          <p className="text-gray-400">
            Somos una empresa dedicada a ofrecer transporte de lujo con los
            estándares más altos de calidad y servicio al cliente.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t.servicios}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Confort Inigualable</h3>
              <p className="text-gray-400">
                Nuestros vehículos están diseñados para ofrecer la máxima
                comodidad.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Servicio Personalizado</h3>
              <p className="text-gray-400">
                Adaptamos nuestros servicios a tus necesidades específicas.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Disponibilidad 24/7</h3>
              <p className="text-gray-400">
                Estamos disponibles cuando nos necesites, sin importar la hora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehículos */}
      <section id="vehiculos" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t.vehiculos}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/car1.jpg"
                alt="Car 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Mercedes-Benz S-Class</h3>
              <p className="text-gray-400">
                El lujo redefinido para tus viajes ejecutivos.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/car2.jpg"
                alt="Car 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Rolls-Royce Phantom</h3>
              <p className="text-gray-400">
                La elegancia en su máxima expresión.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/car3.jpg"
                alt="Car 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Tesla Model S</h3>
              <p className="text-gray-400">
                Innovación y sostenibilidad en cada viaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t.faq}</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                ¿Qué incluye el servicio de transporte?
              </h3>
              <p className="text-gray-400">
                Incluimos conductor profesional, bebidas premium y Wi-Fi gratis.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                ¿Cómo puedo hacer una reserva?
              </h3>
              <p className="text-gray-400">
                Puedes reservar a través de nuestro sitio web o llamando al +123
                456 789.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t.testimonios}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 italic mb-4">
                "El servicio fue excepcional. ¡Recomiendo Luxury Transport!"
              </p>
              <p className="font-bold">- Juan Pérez</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 italic mb-4">
                "Una experiencia inolvidable. Los conductores son muy profesionales."
              </p>
              <p className="font-bold">- María López</p>
            </div>
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
    </div>
  );
}

export default App;