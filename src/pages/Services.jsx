import React from 'react';

function Services() {
  const services = [
    {
      title: 'Ejecutivo',
      description:
        'Transporte VIP especializado para figuras políticas, empresarios y clientes de alto perfil.',
      imgUrl: '/src/assets/service-ejecutivo.jpg',
    },
    {
      title: 'Niños Especiales',
      description:
        'Conductores capacitados, paciencia y asistencia especial. Vehículos adaptados según necesidades.',
      imgUrl: '/src/assets/service-ninos.jpg',
    },
    {
      title: 'Adultos Mayores',
      description:
        'Asistencia personalizada al subir y bajar del vehículo. Comodidad y seguridad total.',
      imgUrl: '/src/assets/service-adultos.jpg',
    },
    {
      title: 'Eventos Especiales',
      description:
        'Transporte de lujo para bodas, aniversarios y celebraciones importantes. Vehículos premium para novios e invitados.',
      imgUrl: '/src/assets/service-eventos.jpg',
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded shadow">
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
  );
}

export default Services;
