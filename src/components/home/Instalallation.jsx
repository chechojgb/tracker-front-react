import { 
  HiDownload, 
  HiPlay,
  HiChip,
  HiGlobe,
} from 'react-icons/hi';
import { useState, useEffect } from "react";
export default function Installation(){
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
                {steps[currentStep].action === "Iniciar Dashboard" ? (
                    <a href="/realtime" className="text-white">
                    Ir al Dashboard
                    </a>
                ) : (
                    steps[currentStep].action
                )}
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
    return(
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <InstallationWizard />
            </div>
        </section>
    );
}


