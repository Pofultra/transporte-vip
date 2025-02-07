// src/pages/Reservations.jsx
import React, { useState } from 'react';

function Reservations() {
  // Pasos del wizard (puedes ajustar o añadir más)
  const steps = [
    'Tipo de Servicio',
    'Fecha y Hora',
    'Detalles',
    'Contacto',
    'Confirmación',
  ];

  // Estado del paso actual (1-based para facilitar)
  const [currentStep, setCurrentStep] = useState(1);

  // Estado con los datos del formulario
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    destination: '',
    specialReqs: '',
    fullName: '',
    email: '',
    phone: '',
  });

  // Función para controlar inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Ir al siguiente paso
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Ir al paso anterior
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Función para enviar al final
  const handleSubmit = () => {
    // Construye el mensaje para WhatsApp
    const message = `Nueva Reserva:\n\n` +
      `Servicio: ${formData.service}\n` +
      `Fecha: ${formData.date}\n` +
      `Hora: ${formData.time}\n` +
      `Destino: ${formData.destination}\n` +
      `Requerimientos: ${formData.specialReqs}\n` +
      `Nombre: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}`;

    // Número de WhatsApp en formato internacional
    const phoneNumber = '41789693111'; // +41 78 969 31 11
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abre WhatsApp en otra pestaña
    window.open(whatsappURL, '_blank');
  };

  // Cálculo de ancho de la barra de progreso
  const progressPercent = (currentStep / steps.length) * 100;

  // Componente que renderiza cada paso según currentStep
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col gap-4">
            <label className="text-gray-300">Tipo de Servicio</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Selecciona...</option>
              <option value="Ejecutivo">Ejecutivo</option>
              <option value="Niños Especiales">Niños Especiales</option>
              <option value="Adultos Mayores">Adultos Mayores</option>
              <option value="Eventos Especiales">Eventos Especiales</option>
            </select>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-gray-300">Fecha</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-gray-800 p-3 rounded w-full outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="text-gray-300">Hora</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-gray-800 p-3 rounded w-full outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col gap-4">
            <label className="text-gray-300">Destino</label>
            <input
              type="text"
              name="destination"
              placeholder="Ciudad, dirección..."
              value={formData.destination}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded outline-none focus:ring-2 focus:ring-gold"
            />

            <label className="text-gray-300">Requerimientos Especiales</label>
            <textarea
              rows="3"
              name="specialReqs"
              value={formData.specialReqs}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded outline-none focus:ring-2 focus:ring-gold"
            ></textarea>
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col gap-4">
            <label className="text-gray-300">Nombre Completo</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded outline-none focus:ring-2 focus:ring-gold"
            />

            <label className="text-gray-300">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded outline-none focus:ring-2 focus:ring-gold"
            />

            <label className="text-gray-300">Teléfono</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
        );

      case 5:
        return (
          <div className="text-gray-300">
            <h3 className="text-xl font-bold mb-2 text-gold">Revisión Final</h3>
            <p><strong>Servicio:</strong> {formData.service}</p>
            <p><strong>Fecha:</strong> {formData.date}</p>
            <p><strong>Hora:</strong> {formData.time}</p>
            <p><strong>Destino:</strong> {formData.destination}</p>
            <p><strong>Requerimientos:</strong> {formData.specialReqs}</p>
            <p><strong>Nombre:</strong> {formData.fullName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Teléfono:</strong> {formData.phone}</p>
          </div>
        );

      default:
        return <div>Pasos completados</div>;
    }
  };

  return (
    <section id="reservations" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-gold mb-4">Reservas</h2>

        {/* Barra de progreso */}
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Contenido del paso actual */}
        <div className="bg-gray-900 p-6 rounded shadow mb-6">
          {renderStepContent()}
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-between">
          {/* Anterior */}
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-700 py-2 px-4 rounded hover:bg-gray-600"
            >
              Anterior
            </button>
          )}

          {/* Siguiente o Confirmar */}
          {currentStep < steps.length ? (
            <button
              onClick={nextStep}
              className="bg-gold text-black py-2 px-4 rounded hover:bg-yellow-600"
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 py-2 px-4 rounded hover:bg-green-500"
            >
              Enviar a WhatsApp
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Reservations;
