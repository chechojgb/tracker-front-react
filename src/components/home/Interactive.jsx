import { 
  HiChartPie,
  HiTrendingUp,
  HiBell,
  HiClock,
  HiExclamation,
  HiEye
} from 'react-icons/hi';
import { useState } from 'react';

export default function Interactive(){
    const [activeDemo, setActiveDemo] = useState(0);
    const demos = [
    {
      title: "Dashboard Inteligente",
      description: "Visualiza tu productividad en tiempo real",
      icon: <HiChartPie className="w-6 h-6" />,
      metrics: [
        { label: "Tiempo Productivo", value: "4.2h", progress: 70, color: "green" },
        { label: "Sesiones Activas", value: "8", progress: 60, color: "blue" }
      ]
    },
    {
      title: "Reportes Detallados",
      description: "Análisis profundos de tus hábitos digitales",
      icon: <HiTrendingUp className="w-6 h-6" />,
      metrics: [
        { label: "Tendencia Semanal", value: "+12%", progress: 65, color: "green" },
        { label: "Tareas Completadas", value: "24/30", progress: 80, color: "blue" }
      ]
    },
    {
      title: "Alertas de Productividad",
      description: "Notificaciones cuando detecta patrones negativos",
      icon: <HiBell className="w-6 h-6" />,
      metrics: [
        { label: "Alertas Activas", value: "3", progress: 30, color: "yellow" },
        { label: "Distracciones", value: "12", progress: 40, color: "red" }
      ]
    }
  ];

    return(
        <section className="py-16 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-3">
                    Mira Tracker OS en Acción
                </h2>
                <p className="text-lg text-gray-300 max-w-xl mx-auto">
                    Descubre cómo transformamos datos en insights accionables
                </p>
                </div>
    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Demo Principal */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                        {demos[activeDemo].icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {demos[activeDemo].title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-1 text-green-400">
                      <HiEye className="w-4 h-4" />
                      <span className="text-sm">En vivo</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {demos[activeDemo].metrics.map((metric, index) => (
                      <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm">{metric.label}</span>
                          <span className={`text-lg font-semibold ${
                            metric.color === 'green' ? 'text-green-400' :
                            metric.color === 'red' ? 'text-red-400' :
                            metric.color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'
                          }`}>
                            {metric.value}
                          </span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              metric.color === 'green' ? 'bg-green-500' :
                              metric.color === 'red' ? 'bg-red-500' :
                              metric.color === 'yellow' ? 'bg-yellow-500' : 'bg-blue-500'
                            }`}
                            style={{width: `${metric.progress}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-600">
                    <p className="text-gray-400 text-sm text-center">
                      Procesando localmente • Datos en tiempo real
                    </p>
                  </div>
                </div>
    
                {/* Selector de Demos */}
                <div className="space-y-4">
                    {demos.map((demo, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg cursor-pointer transition-all duration-200 border ${
                        activeDemo === index
                            ? 'bg-blue-500/10 border-blue-500/30 shadow-md'
                            : 'bg-gray-800 border-gray-700 hover:bg-gray-700/50'
                        }`}
                        onClick={() => setActiveDemo(index)}
                    >
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-lg ${
                            activeDemo === index 
                              ? 'bg-blue-500/20 text-blue-400' 
                              : 'bg-gray-700 text-gray-400'
                          }`}>
                            {demo.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-white truncate">
                              {demo.title}
                            </h3>
                            <p className="text-gray-300 text-sm truncate">
                              {demo.description}
                            </p>
                          </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}