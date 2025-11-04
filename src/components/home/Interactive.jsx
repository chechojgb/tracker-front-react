import { 
  HiChartBar
} from 'react-icons/hi';
import { useState } from 'react';
export default function Interactive(){
    const [activeDemo, setActiveDemo] = useState(0);
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
    return(
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
    );
}