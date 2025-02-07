// src/components/WizardModal.jsx
import React, { useState } from 'react';

function WizardModal({ onClose }) {
  const steps = [
    'Tipo de Servicio',
    'Fecha y Hora',
    'Detalles',
    'Contacto',
    'Confirmación',
  ];

  const [currentStep, setCurrentStep] = useState(1);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Enviar a WhatsApp
  const handleSubmit = () => {
    const message =
      `Nueva Reserva:\n\n` +
      `Servicio: ${formData.service}\n` +
      `Fecha: ${formData.date}\n` +
      `Hora: ${formData.time}\n` +
      `Destino: ${formData.destination}\n` +
      `Requerimientos: ${formData.specialReqs}\n` +
      `Nombre: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}`;

    const phoneNumber = '41789693111'; // +41 78 969 31 11
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abre WhatsApp en nueva pestaña
    window.open(whatsappURL, '_blank');

    // Cerrar wizard después del envío
    onClose();
  };

  const progressPercent = (currentStep / steps.length) * 100;

  // Renderizado condicional de cada paso
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
                className="bg-gray-800 p-3 rounded outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="text-gray-300">Hora</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-gray-800 p-3 rounded outline-none focus:ring-2 focus:ring-gold"
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
        return null;
    }
  };

  return (
    // Overlay que cubre toda la pantalla
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo oscurecido */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      ></div>

      {/* Contenedor de la tarjeta wizard */}
      <div className="relative bg-black w-full max-w-xl mx-auto rounded-lg p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
        >
          ✕
        </button>

        {/* Barra de progreso */}
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Contenido del paso */}
        <div className="bg-gray-900 p-4 rounded">
          {renderStepContent()}
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-between mt-4">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-700 py-2 px-4 rounded hover:bg-gray-600"
            >
              Anterior
            </button>
          )}

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
    </div>
  );
}

export default WizardModal;
