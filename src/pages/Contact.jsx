// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-16">
      {/* Contenedor centrado */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">Contacto</h2>

        {/* Flex con items y contenido centrado */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          
          {/* Bloque 1: Teléfono y correo */}
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
          </div>

          {/* Bloque 2: Redes Sociales */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-300">Síguenos en nuestras redes:</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/TuEmpresa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-gold"
              >
                <i className="ri-facebook-circle-fill text-xl"></i>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/TuEmpresa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-gold"
              >
                <i className="ri-instagram-line text-xl"></i>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/TuEmpresa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-gold"
              >
                <i className="ri-linkedin-box-line text-xl"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
