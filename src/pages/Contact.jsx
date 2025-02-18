import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";

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
  const t = translations[language] || translations["en"];

  return (
    <>
      
      {/* Contenido principal */}
      <section
        id="contact"
        className="bg-black text-white py-16"
        role="region"
        aria-labelledby="contact-title"
      >
        <div className="container mx-auto px-4 text-center">
          {/* Título */}
          <h2
            id="contact-title"
            className="text-3xl font-bold text-gold mb-8"
          >
            {t.title}
          </h2>

          {/* Cuadrícula de información de contacto */}
          <div className="grid grid-cols-1  gap-8 max-w-4xl mx-auto">
            {/* Información de Contacto */}
            <div
              className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20"
              role="article"
              aria-label="Contact Information"
            >
              <h3 className="text-2xl font-semibold text-gold mb-4">
                {t.infoTitle}
              </h3>
              <div className="flex flex-col gap-4">
                {/* Teléfono */}
                <div className="flex items-center gap-2 justify-center">
                  <i
                    className="ri-phone-line text-gold text-2xl"
                    aria-hidden="true"
                  ></i>
                  <p>+41 78 969 31 11</p>
                </div>

                {/* Correo Electrónico */}
                <div className="flex items-center gap-2 justify-center">
                  <i
                    className="ri-mail-line text-gold text-2xl"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="mailto:info@viptransport.com"
                    className="underline hover:text-gold transition"
                    aria-label="Send email to info@viptransport.com"
                  >
                    info@viptransport.com
                  </a>
                </div>

                {/* Redes Sociales */}
                <p className="text-gray-300 mt-4">{t.followUs}:</p>
                <div className="flex justify-center gap-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/TuEmpresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition"
                    aria-label="Follow us on Facebook"
                  >
                    <i className="ri-facebook-circle-fill text-2xl"></i>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/jayscomfort.luxury?igsh=MWtjeWM2cms3Z3dmMg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition"
                    aria-label="Follow us on Instagram"
                  >
                    <i className="ri-instagram-line text-2xl"></i>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/joran-de-la-cruz-jasson-b77197169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition"
                    aria-label="Follow us on LinkedIn"
                  >
                    <i className="ri-linkedin-box-line text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
