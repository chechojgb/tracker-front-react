import { 
  HiTrendingUp,
  HiTrendingDown,
  HiExclamationCircle 
} from 'react-icons/hi';

export default function Trends({BackendStatus}){
    return (
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            {/* Overlay cuando no hay conexión */}
            {!BackendStatus.online && (
                <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[1px] z-10 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                    <HiExclamationCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                    <p className="font-semibold text-lg">Tendencias no disponibles</p>
                    <p className="text-gray-300">Sin conexión al backend</p>
                </div>
                </div>
            )}
            
            <div className="relative">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiTrendingUp className="w-5 h-5 mr-3 text-yellow-400" />
                Tendencias del Período
                </h3>
                
                <div className="space-y-4">
                {[
                    { 
                    metric: 'Horas Productivas', 
                    current: '32.5h', 
                    previous: '28.1h', 
                    change: '+15.7%',
                    trend: 'up'
                    },
                    { 
                    metric: 'Apps Únicas/Día', 
                    current: '8.4', 
                    previous: '7.2', 
                    change: '+16.7%',
                    trend: 'up'
                    },
                    { 
                    metric: 'Sitios Únicos/Día', 
                    current: '22.3', 
                    previous: '19.8', 
                    change: '+12.6%',
                    trend: 'up'
                    },
                    { 
                    metric: 'Tiempo por Sesión', 
                    current: '31m', 
                    previous: '29m', 
                    change: '+6.9%',
                    trend: 'up'
                    },
                    { 
                    metric: 'Sesiones Cortas (<5min)', 
                    current: '5.2', 
                    previous: '6.8', 
                    change: '-23.5%',
                    trend: 'down'
                    }
                ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                        {item.trend === 'up' ? (
                        <HiTrendingUp className="w-4 h-4 text-green-400" />
                        ) : (
                        <HiTrendingDown className="w-4 h-4 text-red-400" />
                        )}
                        <span className="text-gray-300">{item.metric}</span>
                    </div>
                    <div className="text-right">
                        <div className="text-white font-bold">{item.current}</div>
                        <div className={`text-sm ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {item.change}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-700/50">
                <div className="text-center text-gray-400 text-sm">
                    Comparado con el período anterior
                </div>
                </div>
            </div>
        </div>
    );
}