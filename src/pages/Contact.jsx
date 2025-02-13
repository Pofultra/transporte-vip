import React from "react";
import { useLanguage } from "../context/LanguageContext";

// Traducciones
const translations = {
  en: {
    title: "Contact",
    infoTitle: "Information",
    phone: "Phone",
    email: "Email",
    followUs: "Follow us on our social networks:",
  },
  es: {
    title: "Contacto",
    infoTitle: "Información",
    phone: "Teléfono",
    email: "Correo Electrónico",
    followUs: "Síguenos en nuestras redes:",
  },
  fr: {
    title: "Contact",
    infoTitle: "Informations",
    phone: "Téléphone",
    email: "E-mail",
    followUs: "Suivez-nous sur nos réseaux sociaux :",
  },
  de: {
    title: "Kontakt",
    infoTitle: "Informationen",
    phone: "Telefon",
    email: "E-Mail",
    followUs: "Folgen Sie uns in unseren sozialen Netzwerken:",
  },
};

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">{t.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Información de Contacto */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
            <h3 className="text-2xl font-semibold text-gold mb-4">{t.infoTitle}</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 justify-center">
                <i className="ri-phone-line text-gold text-2xl"></i>
                <p>+41 78 969 31 11</p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <i className="ri-mail-line text-gold text-2xl"></i>
                <a
                  href="mailto:info@viptransport.com"
                  className="underline hover:text-gold"
                >
                  info@viptransport.com
                </a>
              </div>
              <p className="text-gray-300 mt-4">{t.followUs}:</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.facebook.com/TuEmpresa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  <i className="ri-facebook-circle-fill text-2xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/TuEmpresa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/TuEmpresa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  <i className="ri-linkedin-box-line text-2xl"></i>
                </a>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
}

export default Contact;
