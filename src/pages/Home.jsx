import React from "react";

function Home({ onOpenWizard }) {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden"
      style={{
        backgroundImage: `url(./images/home.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          El transporte VIP que figuras de alto nivel eligen.
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Especialistas en Traslados Ejecutivos, Niños Especiales, Adultos
          Mayores y Eventos Especiales.
        </p>
        <button
          onClick={onOpenWizard}
          className="bg-gold text-black px-5 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
        >
          Reserva Ahora
        </button>
      </div>

      {/* Ajuste de imagen en móviles */}
      <style jsx>{`
        @media (max-width: 768px) {
          #home {
            background-size: cover;
            background-position: right center;
          }
        }

        @media (max-width: 480px) {
          #home {
            height: 100vh;
            background-size: 200% auto; /* Zoom en la parte del auto */
            background-position: right center;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
