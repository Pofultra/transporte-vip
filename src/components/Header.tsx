import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Íconos para el menú
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú

  return (
    <header className="bg-primary text-white w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">Transporte VIP</h1>

        {/* Botón del Menú Hamburguesa (solo en móviles) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de Navegación */}
        <nav
          className={`absolute top-16 left-0 w-full bg-primary text-white md:static md:w-auto md:flex md:items-center md:space-x-6 transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6">
            <li><Link to="/" className="block py-2 px-4 hover:text-gold">Inicio</Link></li>
            <li><Link to="/about-us" className="block py-2 px-4 hover:text-gold">Sobre Nosotros</Link></li>
            <li><Link to="/services" className="block py-2 px-4 hover:text-gold">Servicios</Link></li>
            <li><Link to="/vehicles" className="block py-2 px-4 hover:text-gold">Vehículos</Link></li>
            <li><Link to="/faqs" className="block py-2 px-4 hover:text-gold">FAQs</Link></li>
            <li><Link to="/testimonials" className="block py-2 px-4 hover:text-gold">Testimonios</Link></li>
            <li><Link to="/contact" className="block py-2 px-4 hover:text-gold">Contacto</Link></li>
          </ul>
        </nav>

        {/* Selector de Idioma y Botón de Reserva (esconder en móviles cuando el menú está abierto) */}
        <div className={`md:flex items-center space-x-4 ${isOpen ? "hidden" : "flex"}`}>
          <LanguageSelector />          
        </div>
      </div>
    </header>
  );
};

export default Header;
