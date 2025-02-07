import React from 'react';

function About() {
  const features = [
    {
      title: 'Discreción',
      description:
        'El trato a nuestros clientes se maneja con la máxima confidencialidad y privacidad.',
      icon: 'ri-eye-off-line',
    },
    {
      title: 'Profesionalismo',
      description:
        'Conductores altamente calificados, puntualidad y cumplimiento de los más altos estándares.',
      icon: 'ri-briefcase-line',
    },
    {
      title: 'Calidad Premium',
      description:
        'Vehículos de lujo y equipamiento de primera para una experiencia VIP inigualable.',
      icon: 'ri-vip-crown-line',
    },
    {
      title: 'Cobertura Internacional',
      description:
        'Experiencia en gestionar traslados para clientes de todo el mundo, con enfoque global.',
      icon: 'ri-global-line',
    },
  ];

  return (
    <section id="about" className="bg-black text-white py-16 mt-16">
      {/* Contenedor principal (imagen + texto) */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="/src/assets/about-image.jpg"
            alt="Sobre Nosotros"
            className="rounded shadow"
          />
        </div>
        
        {/* Texto principal */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gold mb-4">Sobre Nosotros</h2>
          <p className="text-gray-300 mb-4">
            Contamos con amplia experiencia en transporte de figuras políticas de alto nivel:
            vicepresidentes, secretarios de Estado y mandatarios. Nuestro compromiso es brindar
            discreción, profesionalismo y la mejor calidad de servicio.
          </p>
          <p className="text-gray-300">
            Nuestros conductores están altamente capacitados para garantizar seguridad absoluta,
            puntualidad y una experiencia VIP inigualable.
          </p>
        </div>
      </div>

      {/* Sub-sección de características (iconos sin tarjetas) */}
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Ícono en dorado */}
              <i className={`${item.icon} text-gold text-4xl mb-4`}></i>
              {/* Título */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              {/* Descripción */}
              <p className="text-gray-300 max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;