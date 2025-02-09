// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Secciones en una sola página
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Vehicles from './pages/Vehicles';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Importa el WizardModal (tu archivo con el formulario)
import WizardModal from './components/WizardModal';

function App() {
  // Estado para controlar si se muestra el wizard
  const [showWizard, setShowWizard] = useState(false);

  // Abre el wizard modal
  const openWizard = () => setShowWizard(true);

  // Cierra el wizard modal
  const closeWizard = () => setShowWizard(false);

  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar con la prop onOpenWizard */}
      <Navbar onOpenWizard={openWizard} />
      
      {/* Secciones del sitio (one-page) */}
      <Home onOpenWizard={openWizard}/>
      <About />
      <Vehicles />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      
      {/* Footer */}
      <Footer />

      {/* Render condicional del wizard */}
      {showWizard && (
        <WizardModal onClose={closeWizard} />
      )}
    </div>
  );
}

export default App;
