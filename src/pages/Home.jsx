import React from "react";
import homeImage from "/images/home.webp";
import logoImage from "/images/logo_jay.png";

function Home({ onOpenWizard }) {
  return (
    <section
      id="home"
      className="relative w-full h-[955px] flex flex-col items-center justify-center bg-black text-girs overflow-hidden"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        opacity: 0.8,
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Logo en la parte superior */}
      <div className="absolute top-[87px] left-1/2 transform -translate-x-1/2 w-[174px] h-[95.20879364013672px]">
        <img
          src={logoImage}
          alt="Logo de la empresa de transporte VIP"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="absolute z-10 text-center px-6 max-w-[404px] w-[404px] h-[120px] top-[180px] left-[18px]">
        <h1 className="font-bebas font-bold text-[39px]  tracking-normal ">
          Luxury Transport
        </h1>

        <span className="font-montserrat text-[19px]  tracking-normal block mb-6">
          An exclusive, refined, and comfortable experience designed to elevate
          all your travels
        </span>
      </div>
      <button
        onClick={onOpenWizard}
        className="absolute w-[146px] h-[55px] top-[393px] left-[20px] flex items-center justify-center gap-2.5 bg-gold text-white font-bold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
      >
        Reserva Ahora <i className="ri-arrow-right-line"></i>
      </button>

      {/* Estadísticas en la parte inferior */}
      <div className="relative z-10 bottom-4 w-full flex justify-center gap-2 text-center text-lg text-xl font-semibebas text-opacity-70 pt-40 lg:pt-0  mt-40 lg:mt-0  ">
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            10K+
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">
            Clientes satisfechos
          </span>
        </div>
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            20+
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">
            Años de experiencia
          </span>
        </div>
        <div>
          <span className="block text-2xl text-3xl font-bebas text-gold">
            100
          </span>
          <span className="font-montserrat text-gris text-lg leading-7 text-center">
            Conductores profesionales
          </span>
        </div>
      </div>
      <div className="absolute w-[55px] h-[61px] top-[865px] left-[193px] flex flex-col items-center justify-center text-center text-white z-10">
        <span className="text-xs font-bold">SCROLL</span>
        <i className="ri-arrow-down-s-line animate-bounce mt-1"></i>
      </div>

      {/* Capa de difuminación */}
      <div className="absolute bottom-[0px] left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-0"></div>
    </section>
  );
}

export default Home;
