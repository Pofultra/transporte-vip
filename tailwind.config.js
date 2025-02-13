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
        gris: '#A8A7A7',
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
