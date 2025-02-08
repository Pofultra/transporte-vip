import React from "react";


function Home({ onOpenWizard }) {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden"
      style={{
        backgroundImage: `url(./images/home.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Logo en la parte superior */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <img src="./images/logo_jay.png" alt="Logo" className="h-40" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-left px-6 max-w-3xl self-start mr-6 lg:pt-40">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          El transporte VIP que figuras de alto nivel eligen.
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-6">
          Especialistas en Traslados Ejecutivos, Niños Especiales, Adultos
          Mayores y Eventos Especiales.
        </p>
        <button
          onClick={onOpenWizard}
          className="bg-gold bg-opacity-80 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition"
        >
          Reserva Ahora <i class="ri-arrow-right-line"></i>
        </button>
      </div>

      {/* Estadísticas en la parte inferior */}
      <div className="relative z-10 absolute bottom-4 w-full flex justify-center gap-6 text-center text-lg text-xl font-semibold pt-40 lg:pt-0 md:pt-0 mt-30 lg:mt-0 md:mt-0">
        <div>
          <span className="block text-2xl sm:text-3xl font-bold text-gold">10K+</span>
          <span className="text-white">Clientes satisfechos</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-bold text-gold">20K+</span>
          <span className="text-white">Años de experiencia</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-bold text-gold">100</span>
          <span className="text-white">Conductores profesionales</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
