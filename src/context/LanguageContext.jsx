import { createContext, useState, useContext } from "react";

// Crear el contexto
const LanguageContext = createContext();

// Proveedor de idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma por defecto: inglés

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => useContext(LanguageContext);
