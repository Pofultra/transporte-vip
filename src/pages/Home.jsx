import React from "react";
import homeImage from "/images/home.webp";
import logoImage from "/images/logo_jay.png";

function Home({ onOpenWizard }) {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-girs overflow-hidden"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        opacity:0.8
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Logo en la parte superior */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <img
          src={logoImage}
          alt="Logo de la empresa de transporte VIP"
          className="h-40"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-left px-6 max-w-3xl self-start mr-6 lg:pt-40">
        <h1 className="font-bebas  text-4xl md:text-5xl lg:text-6xl font-bebas mb-4 text-gris ">
        Luxury Transport
        </h1>

        <p className="font-montserrat text-sm sm:text-lg md:text-xl mb-6">
        An exclusive, refined, and comfortable experience designed to elevate all your travels
        </p>
        <button
          onClick={onOpenWizard}
          className="font-bebas  bg-gold bg-opacity-80 text-gris px-6 py-3 rounded-full text-base font-semibebas hover:bg-yellow-600 transition whitespace-normal text-center leading-tight w-30 "
        >
          Reserva Ahora <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      {/* Estadísticas en la parte inferior */}
      <div className="relative z-10 bottom-4 w-full flex justify-center gap-2 text-center text-lg text-xl font-semibebas text-opacity-70 pt-40 lg:pt-0  mt-40 lg:mt-0  ">
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            10K+
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">Clientes satisfechos</span>
        </div>
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            20+
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">Años de experiencia</span>
        </div>
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            100
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">Conductores profesionales</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
