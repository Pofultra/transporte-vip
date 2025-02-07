import React from "react";

function Services() {
  const services = [
    {
      title: "Ejecutivo",
      description:
        "Transporte VIP especializado para figuras políticas, empresarios y clientes de alto perfil.",
      icon: "ri-briefcase-4-line",
    },
    {
      title: "Niños Especiales",
      description:
        "Conductores capacitados, paciencia y asistencia especial. Vehículos adaptados según necesidades.",
      icon: "ri-emotion-happy-line",
    },
    {
      title: "Adultos Mayores",
      description:
        "Asistencia personalizada al subir y bajar del vehículo. Comodidad y seguridad total.",
      icon: "ri-user-heart-line",
    },
    {
      title: "Eventos Especiales",
      description:
        "Transporte de lujo para bodas, aniversarios y celebraciones importantes. Vehículos premium para novios e invitados.",
      icon: "ri-calendar-event-line",
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center text-center"
            >
              <i className={`${service.icon} text-gold text-4xl`}></i>
              <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
