/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#0F172A", // Azul oscuro
        gold: "#CDAA6D",   // Dorado elegante
        accent: "#1E293B", // Negro sobrio
      },
    },
  },
  plugins: [],
};
