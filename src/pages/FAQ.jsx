import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: '¿Qué incluye el servicio de transporte?',
      answer:
        'Chofer profesional, vehículo premium, Wi-Fi, y la máxima discreción.',
    },
    {
      question: '¿Cómo puedo hacer una reserva?',
      answer:
        'Puedes reservar en línea en la sección “Reservas” o llamando a nuestro número de contacto.',
    },
  ];

  return (
    <section id="faq" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details key={index} className="bg-gray-900 p-4 rounded">
              <summary className="cursor-pointer text-xl text-gold font-semibold mb-2">
                {item.question}
              </summary>
              <p className="text-gray-300 mt-2">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
