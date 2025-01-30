import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
      <h1 className="text-4xl font-bold text-white">El transporte VIP que figuras de alto nivel eligen.</h1>
      <p className="text-lg text-white mt-2">Especialistas en traslados ejecutivos, niños especiales, adultos mayores y eventos exclusivos.</p>
      <Link to="/booking" className="mt-4 bg-gold text-primary px-6 py-3 rounded-md text-lg hover:bg-yellow-500">
        Reserva Ahora
      </Link>
    </section>
  );
};

export default Home;
