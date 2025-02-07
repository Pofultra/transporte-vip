import React from "react";

function Home({ onOpenWizard }) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-black text-white"
    >
      {/* Fondo con imagen (hero) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/src/assets/hero-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          El transporte VIP que figuras de alto nivel eligen.
        </h1>
        <p className="text-xl mb-6">
          Especialistas en Traslados Ejecutivos, Niños Especiales, Adultos
          Mayores y Eventos Especiales.
        </p>
        {/* Botón de Reserva */}
        <button
          onClick={onOpenWizard}
          className="bg-gold text-black px-4 py-2 rounded hover:bg-yellow-600"
        >
          Reserva Ahora
        </button>
      </div>
    </section>
  );
}

export default Home;
