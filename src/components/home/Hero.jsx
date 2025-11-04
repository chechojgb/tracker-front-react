import { useEffect, useState } from "react";
import { 
  HiDownload, 
  HiPlay,
} from 'react-icons/hi';
export default function Hero(){
    const [stats, setStats] = useState({
        appsTracked: 0,
        websitesMonitored: 0,
        totalHours: 0,
        productivityScore: 0
    }); 
    useEffect(() => {
        const interval = setInterval(() => {
          setStats(prev => ({
            appsTracked: Math.min(prev.appsTracked + 10, 127),
            websitesMonitored: Math.min(prev.websitesMonitored + 30, 354),
            totalHours: Math.min(prev.totalHours + 50, 842),
            productivityScore: Math.min(prev.productivityScore + 23, 94)
          }));
        }, 100);
    
        return () => clearInterval(interval);
    }, []);
    return(
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
                    TrackerOS revela insights ocultos sobre tus hábitos digitales. 
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
                    <a href="/downloads/ActivityTrackerSetup.exe" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <HiDownload className="inline w-5 h-5 mr-2 cursor-pointer" />
                        Descargar Gratis
                    </a>
                    <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 transition-all duration-300 hover:scale-105">
                    <HiPlay className="inline w-5 h-5 mr-2" />
                    Ver Demo en Vivo
                    </button>
                </div>
                </div>
            </div>
        </section>
    );
}