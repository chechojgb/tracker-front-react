import { 
  HiClock,
  HiEye,
  HiServer,
} from 'react-icons/hi';
import ActivityMetrics from './ActivityMetric';
import SystemMetrics from './Stats';

export default function Focus({BackendStatus, realTimeData, liveStats}){
    return(
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
            {/* Actividad en Tiempo Real */}
            <div className="xl:col-span-2">
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
                {/* Elementos decorativos de fondo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full translate-y-20 -translate-x-20 blur-xl"></div>
                
                {/* Patrón de grid sutil */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                
                {/* Header con mejor diseño */}
                <div className="relative flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                    <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <HiEye className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-4 border-gray-900">
                        <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white flex items-center">
                        Stream de Actividad
                        </h2>
                        {BackendStatus.online ? (
                        <>
                            <p className="text-gray-400 text-sm flex items-center mt-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            Monitoreo en tiempo real activo
                            </p>
                        </>
                        ):(<></>)}
                    </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                    {/* Indicador de estado */}
                    {BackendStatus.online ? (
                        <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-medium">En vivo</span>
                        </div>
                    ): (
                        <></>
                    )}
                    
                    
                    
                    </div>
                </div>
                
                {/* Separador decorativo */}
                <div className="relative mb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                
                {/* Contenedor del componente con mejor espaciado */}
                <div className="relative">
                    <ActivityMetrics realTimeData={realTimeData} BackendStatus={BackendStatus}/>
                </div>
                
                {/* Footer con información adicional */}
                <div className="relative mt-8 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                        <HiServer className="w-4 h-4 mr-1" />
                        Servidor: 
                        {BackendStatus.online ? (<span className="text-green-400 ml-1">Online</span>) : (<span className="text-red-400 ml-1">Ofline</span>)}
                        </span>
                        <span>•</span>
                        <span>Actualización cada 30s</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <HiClock className="w-4 h-4" />
                        <span>{new Date().toLocaleTimeString()}</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Métricas de Rendimiento */}
            <SystemMetrics liveStats={liveStats} realTimeData={realTimeData} BackendStatus={BackendStatus}/>
        </div>

    );
}