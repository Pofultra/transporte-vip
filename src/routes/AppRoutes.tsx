import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Vehicles from "../pages/Vehicles";
import FAQs from "../pages/FAQ";
import Testimonials from "../pages/Testimonials";
import Booking from "../pages/Reservations";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      {/* Sección principal con suficiente espacio para que el Header no cubra el contenido */}
      <main className="pt-20 min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
