import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: 'Un servicio impecable. Puntualidad y discreción en todo momento.',
      author: '— Cliente VIP',
    },
    {
      quote: 'Hicieron mi boda inolvidable. El chofer estuvo atento a cada detalle.',
      author: '— Pareja recién casada',
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">Testimonios</h2>
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-gray-900 p-6 rounded shadow snap-center mx-2"
            >
              <p className="text-gray-100 italic mb-4">"{t.quote}"</p>
              <p className="text-gold font-semibold">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
