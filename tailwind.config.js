/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Personaliza tu tono de dorado y azul oscuro
        gold: '#B79358',
        gris: '#F1F1F1',
        darkBlue: '#001f3f',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
