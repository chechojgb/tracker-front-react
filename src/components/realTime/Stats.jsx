import { 
  HiChip,
  HiServer,
  HiRefresh,
  HiCheckCircle,
  HiExclamationCircle
} from 'react-icons/hi';

export default function SystemMetrics({ realTimeData, lastUpdate, BackendStatus }) {
  
  const getSystemStatus = () => {
    return {
      isOnline: true, // Asumiendo que siempre está online
      latency: '28ms', // Podrías calcular esto
      updateInterval: '30s',
      dataAge: Math.floor((new Date() - new Date(lastUpdate)) / 1000) + 's'
    };
  };

  const systemStatus = getSystemStatus();

  return(
    <div className="xl:col-span-1">
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6">
        <h2 className="text-2xl font-bold text-white flex items-center mb-6">
          <HiServer className="w-6 h-6 mr-3 text-purple-400" />
          Estado del Sistema
        </h2>
        
        {/* Estado principal */}
        <div className="space-y-4 mb-6">
            <div className={`flex items-center justify-between p-3 ${BackendStatus.online ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'} rounded-xl border`}>
                <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 ${BackendStatus.online ? 'bg-green-400' : 'bg-red-400'} rounded-full animate-pulse`}></div>
                    <span className={`${BackendStatus.online ? 'text-green-400' : 'text-red-400'} font-semibold`}>
                    {BackendStatus.online ? 'Monitor activo' : 'Problemas al conectar con los servicios'}
                    </span>
                </div>
                {BackendStatus.online ? <HiCheckCircle className="w-5 h-5 text-green-400" /> : <HiExclamationCircle className="w-5 h-5 text-red-400" />}
                
            </div>  
          
            <div className={`flex items-center justify-between p-3  rounded-xl border ${BackendStatus.online ? 'bg-blue-500/10 border-blue-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
            {BackendStatus.online ? (
                <>
                    <span className="text-blue-400">En Vivo</span>
                    <span className="text-white font-semibold">Transmitiendo</span>
                </>
            ) : (
                <span className="text-white">Problemas al conectar</span>
            )}
            
          </div>
        </div>
        
        {/* Métricas técnicas */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <HiChip className="w-4 h-4" />
              <span className="text-sm">Servicio</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className={`${BackendStatus.online ? 'bg-green-400' : 'bg-red-400'} w-2 h-2  rounded-full`}></div>
              <span className="text-white font-semibold text-sm">{BackendStatus.online ? 'Online' : 'Ofline'}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <HiRefresh className="w-4 h-4" />
              <span className="text-sm">Actualización</span>
            </div>
            <span className="text-white font-semibold text-sm">Cada 30s</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Latencia</span>
            <span className="text-white font-semibold text-sm">{systemStatus.latency}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Procesamiento</span>
            <span className="text-green-400 font-semibold text-sm">100% Local{BackendStatus.online ? '' : ', sin conexion'}</span>
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t border-white/10">
            <span className="text-gray-400 text-sm">Última actualización</span>
            <span className="text-white font-semibold text-xs">{lastUpdate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}