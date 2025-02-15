import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Traducciones
const translations = {
  de: {
    steps: [
      "Dienstleistungstyp",
      "Datum & Uhrzeit",
      "Fahrtdetails",
      "Kontakt",
      "Bestätigung",
    ],
    selectOption: "Wählen Sie eine Option",
    next: "WEITER",
    back: "ZURÜCK",
    send: "SENDEN",
    close: "Schließen",
    serviceType: "Dienstleistungstyp",
    date: "Datum",
    time: "Uhrzeit",
    pickup: "Abholort",
    destination: "Zielort",
    selectCar: "Fahrzeug auswählen",
    contact: "Kontaktinformationen",
    fullName: "Vollständiger Name",
    email: "E-Mail",
    phone: "Telefonnummer",
    services: [
      "Executive",
      "Kinder mit besonderen Bedürfnissen",
      "Senioren",
      "Spezielle Veranstaltungen",
    ],
    cars: [
      { name: "Mercedes V-Class", capacity: 7, rate: 2.5 },
      { name: "Mercedes S-Class", capacity: 4, rate: 3.0 },
      { name: "Mercedes E-Class", capacity: 4, rate: 2.8 },
      { name: "BMW 520 D M Paket", capacity: 4, rate: 2.7 },
      { name: "Mercedes Sprinter", capacity: 16, rate: 4.0 },
      { name: "Bus (50 Passagiere)", capacity: 50, rate: 5.0 },
      { name: "Tesla", capacity: 5, rate: 3.5 },
    ],
    confirmation: "Überprüfen Sie Ihre Daten",
    capacity: "Kapazität",
    passengers: "Passagiere",
    rate: "Preis",
  },
  fr: {
    steps: [
      "Type de service",
      "Date et heure",
      "Détails du trajet",
      "Contact",
      "Confirmation",
    ],
    selectOption: "Sélectionnez une option",
    next: "SUIVANT",
    back: "RETOUR",
    send: "ENVOYER",
    close: "Fermer",
    serviceType: "Type de service",
    date: "Date",
    time: "Heure",
    pickup: "Lieu de prise en charge",
    destination: "Destination",
    selectCar: "Sélectionner un véhicule",
    contact: "Informations de contact",
    fullName: "Nom complet",
    email: "Email",
    phone: "Numéro de téléphone",
    services: [
      "Exécutif",
      "Enfants à besoins spéciaux",
      "Personnes âgées",
      "Événements spéciaux",
    ],
    cars: [
      { name: "Mercedes V-Class", capacity: 7, rate: 2.5 },
      { name: "Mercedes S-Class", capacity: 4, rate: 3.0 },
      { name: "Mercedes E-Class", capacity: 4, rate: 2.8 },
      { name: "BMW 520 D M Paket", capacity: 4, rate: 2.7 },
      { name: "Mercedes Sprinter", capacity: 16, rate: 4.0 },
      { name: "Bus (50 passagers)", capacity: 50, rate: 5.0 },
      { name: "Tesla", capacity: 5, rate: 3.5 },
    ],
    confirmation: "Vérifiez vos informations",
    capacity: "Capacité",
    passengers: "passagers",
    rate: "Tarif",
  },

  en: {
    steps: [
      "Service Type",
      "Date & Time",
      "Trip Details",
      "Contact",
      "Review Your Details",
    ],
    selectOption: "Select an option",
    next: "NEXT",
    back: "BACK",
    send: "SEND",
    close: "Close",
    serviceType: "Service Type",
    date: "Date",
    time: "Time",
    pickup: "Pickup Location",
    destination: "Destination",
    selectCar: "Select Vehicle",
    contact: "Contact Information",
    fullName: "Full Name",
    email: "Email",
    phone: "Phone Number",
    services: [
      "Executive",
      "Special Needs Children",
      "Elderly",
      "Special Events",
    ],

    confirmation: "Review Your Details",
    cars: [
      { name: "Mercedes V-Class", capacity: 7, rate: 2.5 },
      { name: "Mercedes S-Class", capacity: 4, rate: 3.0 },
      { name: "Mercedes E-Class", capacity: 4, rate: 2.8 },
      { name: "BMW 520 D M Paket", capacity: 4, rate: 2.7 },
      { name: "Mercedes Sprinter", capacity: 16, rate: 4.0 },
      { name: "Bus", capacity: 50, rate: 5.0 },
      { name: "Tesla", capacity: 5, rate: 3.5 },
    ],

    capacity: "Capacity",
    passengers: "passengers",
    rate: "Rate",
  },
  es: {
    steps: [
      "Tipo de Servicio",
      "Fecha y Hora",
      "Detalles del Viaje",
      "Contacto",
      "Confirmación",
    ],
    selectOption: "Selecciona una opción",
    next: "SIGUIENTE",
    back: "ATRÁS",
    send: "ENVIAR",
    close: "Cerrar",
    serviceType: "Tipo de servicio",
    date: "Fecha",
    time: "Hora",
    pickup: "Lugar de Recogida",
    destination: "Destino",
    selectCar: "Seleccionar Vehículo",
    contact: "Información de Contacto",
    fullName: "Nombre Completo",
    email: "Correo Electrónico",
    phone: "Teléfono",
    services: [
      "Ejecutivo",
      "Niños Especiales",
      "Adultos Mayores",
      "Eventos Especiales",
    ],

    confirmation: "Revisa tu Información",
    cars: [
      { name: "Mercedes V-Class", capacity: 7, rate: 2.5 },
      { name: "Mercedes S-Class", capacity: 4, rate: 3.0 },
      { name: "Mercedes E-Class", capacity: 4, rate: 2.8 },
      { name: "BMW 520 D M Paket", capacity: 4, rate: 2.7 },
      { name: "Mercedes Sprinter", capacity: 16, rate: 4.0 },
      { name: "Bus (50 pasajeros)", capacity: 50, rate: 5.0 },
      { name: "Tesla", capacity: 5, rate: 3.5 },
    ],

    capacity: "Capacidad",
    passengers: "pasajeros",
    rate: "Tarifa",
  },
};

function WizardModal({ onClose }) {
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    pickup: "",
    destination: "",
    car: null, // Almacenará el objeto completo del vehículo seleccionado
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < t.steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progressPercent = (currentStep / t.steps.length) * 100;

  const handleSubmit = () => {
    const message = `
      ${t.confirmation}:\n
      ${t.serviceType}: ${formData.service}\n
      ${t.date}: ${formData.date}\n
      ${t.time}: ${formData.time}\n
      ${t.pickup}: ${formData.pickup}\n
      ${t.destination}: ${formData.destination}\n
      ${t.selectCar}: ${formData.car?.name || "N/A"}\n
      ${t.capacity}: ${formData.car?.capacity || "N/A"} ${t.passengers}\n
      ${t.rate}: ${formData.car?.rate || "N/A"} CHF/km\n
      ${t.fullName}: ${formData.fullName}\n
      ${t.email}: ${formData.email}\n
      ${t.phone}: ${formData.phone}
    `;
    const phoneNumber = "+5353616391";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener noreferrer");
    onClose();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col gap-4">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold"
              aria-label={t.selectOption}
            >
              <option value="">{t.selectOption}</option>
              {t.services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-4">
            {/* Campo de Fecha */}
            <div className="relative">
              <label
                className={`absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 transition-opacity ${
                  formData.date ? "opacity-0" : "opacity-100"
                }`}
              >
                {t.date}
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold"
                aria-label={t.date}
              />
            </div>
            {/* Campo de Hora */}
            <div className="relative">
              <label
                className={`absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 transition-opacity ${
                  formData.time ? "opacity-0" : "opacity-100"
                }`}
              >
                {t.time}
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold"
                aria-label={t.time}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="pickup"
              placeholder={t.pickup}
              value={formData.pickup}
              onChange={handleChange}
              className="bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold"
              aria-label={t.pickup}
            />
            <input
              type="text"
              name="destination"
              placeholder={t.destination}
              value={formData.destination}
              onChange={handleChange}
              className="bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold"
              aria-label={t.destination}
            />
            <select
              name="car"
              value={formData.car?.name || ""}
              onChange={(e) => {
                const selectedCar = t.cars.find(
                  (car) => car.name === e.target.value
                );
                setFormData((prev) => ({ ...prev, car: selectedCar }));
              }}
              className="bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold"
              aria-label={t.selectCar}
            >
              <option value="">{t.selectOption}</option>
              {t.cars.map((car, index) => (
                <option key={index} value={car.name}>
                  {`${car.name} (${car.capacity} ${t.passengers}, ${car.rate} CHF/km)`}
                </option>
              ))}
            </select>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="fullName"
              placeholder={t.fullName}
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold"
              aria-label={t.fullName}
            />
            <input
              type="email"
              name="email"
              placeholder={t.email}
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold"
              aria-label={t.email}
            />
            <input
              type="tel"
              name="phone"
              placeholder={t.phone}
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-800 font-bebas w-[370px] h-[45px] p-3 rounded-[9.12px] outline-none focus:ring-2 focus:ring-gold"
              aria-label={t.phone}
            />
          </div>
        );
      case 5:
        return (
          <div className="text-gray-300 text-left">
            <p>
              <strong>{t.serviceType}:</strong> {formData.service}
            </p>
            <p>
              <strong>{t.date}:</strong> {formData.date}
            </p>
            <p>
              <strong>{t.time}:</strong> {formData.time}
            </p>
            <p>
              <strong>{t.pickup}:</strong> {formData.pickup}
            </p>
            <p>
              <strong>{t.destination}:</strong> {formData.destination}
            </p>
            <p>
              <strong>{t.selectCar}:</strong> {formData.car?.name || "N/A"}
            </p>
            <p>
              <strong>{t.capacity}:</strong> {formData.car?.capacity || "N/A"}{" "}
              {t.passengers}
            </p>
            <p>
              <strong>{t.rate}:</strong> {formData.car?.rate || "N/A"} CHF/km
            </p>
            <p>
              <strong>{t.fullName}:</strong> {formData.fullName}
            </p>
            <p>
              <strong>{t.email}:</strong> {formData.email}
            </p>
            <p>
              <strong>{t.phone}:</strong> {formData.phone}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
        role="button"
        aria-label="Close modal"
      ></div>
      <div className="relative w-[404px] h-[416px] bg-[#202020] rounded-[11px] shadow-lg p-6 flex flex-col justify-between z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
          aria-label="Close modal"
        >
          ✕
        </button>
        {/* Título del paso con estilo correcto */}
        <h3 className="text-gold font-bebas text-[22px] leading-[64.87px] font-bebas text-center">
          {t.steps[currentStep - 1]}
        </h3>
        {/* Barra de progreso estilizada */}
        <div className="w-[369px] h-[5px] bg-gray-700 rounded-[48px] mx-auto mt-2 overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="flex-grow flex items-center justify-center">
          {renderStepContent()}
        </div>
        {/* Botones de Control */}
        <div className="flex justify-between gap-[8.36px] mt-4">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="w-[370px] h-[42px] bg-gray-700 text-white font-bebas rounded-[380.14px] hover:bg-gray-600 transition"
              aria-label={t.back}
            >
              {t.back}
            </button>
          )}
          <button
            onClick={
              currentStep < t.steps.length
                ? nextStep
                : handleSubmit
            }
            className="w-[370px] h-[42px] bg-gold text-white font-bebas rounded-[380.14px] hover:bg-yellow-600 transition"
            aria-label={
              currentStep < t.steps.length ? t.next : t.send
            }
          >
            {currentStep < t.steps.length ? t.next : t.send}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WizardModal;
