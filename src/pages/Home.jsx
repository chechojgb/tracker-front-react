import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Interactive from '../components/home/Interactive';
import Installation from '../components/home/Instalallation';
import { 
  HiDownload, 
} from 'react-icons/hi';

const Home = () => {

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <Hero/> 
      {/* Features Grid */}
      <Features/>
      {/* Interactive Demo Section */}
      <Interactive/>
      {/* Installation Wizard */}
      <Installation/>
      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para Revolucionar tu Productividad?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de profesionales que ya descubrieron sus patrones 
            de trabajo ocultos con TrackerK
          </p>
          <a href="/downloads/ActivityTrackerSetup.exe" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <HiDownload className="inline w-5 h-5 mr-2" />
            Comenzar Ahora - Gratis
          </a>
          <p className="text-blue-200 mt-4 text-sm">
            Instalación en 2 minutos • Sin pagos • Sin subscripciones
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;