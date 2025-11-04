import React, { useState, useEffect } from 'react';
import { 
  HiDownload, 
  HiCheckCircle, 
  HiPlay,
  HiShieldCheck,
  HiChip,
  HiTrendingUp,
  HiChartBar,
  HiGlobe,
  HiDesktopComputer,
  HiLockClosed
} from 'react-icons/hi';

const Home = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [stats, setStats] = useState({
    appsTracked: 0,
    websitesMonitored: 0,
    totalHours: 0,
    productivityScore: 0
  });

  // Animación de estadísticas
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        appsTracked: Math.min(prev.appsTracked + 1, 127),
        websitesMonitored: Math.min(prev.websitesMonitored + 2, 354),
        totalHours: Math.min(prev.totalHours + 0.5, 842),
        productivityScore: Math.min(prev.productivityScore + 0.7, 94)
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: HiChip,
      title: "Inteligencia Artificial",
      description: "Algoritmos que aprenden tus patrones de trabajo",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: HiTrendingUp,
      title: "Analíticas Predictivas",
      description: "Pronostica tu productividad y sugiere mejoras",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: HiLockClosed,
      title: "Privacidad Total",
      description: "Tus datos nunca salen de tu computador",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: HiChartBar,
      title: "Reportes Automáticos",
      description: "Genera insights detallados automáticamente",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const demos = [
    {
      title: "Dashboard Inteligente",
      description: "Visualiza tu productividad en tiempo real",
      video: "/demos/dashboard.mp4",
      image: "/demos/dashboard-preview.jpg"
    },
    {
      title: "Reportes Detallados",
      description: "Análisis profundos de tus hábitos digitales",
      video: "/demos/reports.mp4",
      image: "/demos/reports-preview.jpg"
    },
    {
      title: "Alertas de Productividad",
      description: "Notificaciones cuando detecta patrones negativos",
      video: "/demos/alerts.mp4",
      image: "/demos/alerts-preview.jpg"
    }
  ];

  const InstallationWizard = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);

    const steps = [
      {
        title: "Descarga Principal",
        description: "Obtén el tracker de aplicaciones",
        action: "Descargar TrackerK_Launcher.exe",
        icon: HiDownload
      },
      {
        title: "Extensión Web",
        description: "Añade el monitor de navegación",
        action: "Instalar Extensión",
        icon: HiGlobe
      },
      {
        title: "Configuración",
        description: "Ajusta según tus necesidades",
        action: "Personalizar Configuración",
        icon: HiChip
      },
      {
        title: "¡Listo!",
        description: "Comienza a monitorear",
        action: "Iniciar Dashboard",
        icon: HiPlay
      }
    ];

    useEffect(() => {
      setProgress(((currentStep + 1) / steps.length) * 100);
    }, [currentStep]);

    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Instalación Guiada</h3>
          <p className="text-gray-300">Sigue estos simples pasos en 2 minutos</p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`text-center p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  index <= currentStep
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                    : 'bg-gray-800/50 border border-gray-700'
                } ${index === currentStep ? 'scale-105 shadow-lg' : ''}`}
                onClick={() => setCurrentStep(index)}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                  index <= currentStep
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'bg-gray-700'
                }`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Current step action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            {steps[currentStep].action}
          </button>
          {currentStep < steps.length - 1 && (
            <button 
              onClick={() => setCurrentStep(currentStep + 1)}
              className="ml-4 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Saltar paso
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Monitoreando +500 usuarios activos
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Conoce tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Productividad
              </span>{' '}
              Real
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              TrackerK revela insights ocultos sobre tus hábitos digitales. 
              <span className="font-semibold text-gray-800"> Descubre patrones, optimiza tu tiempo</span> y alcanza tu máximo potencial.
            </p>

            {/* Stats counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
              {[
                { value: stats.appsTracked, label: 'Apps Monitoreadas', suffix: '+' },
                { value: stats.websitesMonitored, label: 'Sitios Web', suffix: '+' },
                { value: stats.totalHours, label: 'Horas Analizadas', suffix: 'h' },
                { value: stats.productivityScore, label: 'Score Promedio', suffix: '%' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <HiDownload className="inline w-5 h-5 mr-2" />
                Descargar Gratis
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 transition-all duration-300 hover:scale-105">
                <HiPlay className="inline w-5 h-5 mr-2" />
                Ver Demo en Vivo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combinamos machine learning, análisis de datos y diseño intuitivo 
              para ofrecerte la mejor experiencia de tracking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Mira TrackerK en Acción
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubre cómo transformamos datos brutos en insights accionables
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-800 rounded-2xl p-2">
                <div className="bg-gray-900 rounded-xl p-8">
                  {/* Demo placeholder - en un caso real sería un video */}
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <HiChartBar className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                      <p className="text-lg font-semibold">{demos[activeDemo].title}</p>
                      <p className="text-gray-400 mt-2">{demos[activeDemo].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {demos.map((demo, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeDemo === index
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {demo.title}
                  </h3>
                  <p className="text-gray-300">
                    {demo.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Wizard */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InstallationWizard />
        </div>
      </section>

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
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <HiDownload className="inline w-5 h-5 mr-2" />
            Comenzar Ahora - Gratis
          </button>
          <p className="text-blue-200 mt-4 text-sm">
            Instalación en 2 minutos • Sin tarjeta de crédito • Cancelación anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;