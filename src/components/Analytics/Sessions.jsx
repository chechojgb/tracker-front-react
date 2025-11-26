import { 
  HiTrendingUp,
  HiCollection,
  HiExclamationCircle 
} from 'react-icons/hi';

export default function Sesiones({ BackendStatus, data = {} }) {
    
    // Safe data extraction with defaults
    const sessionsData = data || {};
    const totalSessions = sessionsData?.total || 0;
    const avgDuration = sessionsData?.average_duration_minutes || 0;
    const distribution = sessionsData?.distribution || [];
    
    console.log('Sessions Data:', sessionsData);

    // Formatear duración promedio
    const formatDuration = (minutes) => {
        if (!minutes || minutes < 0) return '0s';
        
        if (minutes < 1) {
            return `${Math.round(minutes * 60)}s`;
        } else if (minutes < 60) {
            return `${Math.round(minutes)}m`;
        } else {
            const hours = Math.floor(minutes / 60);
            const mins = Math.round(minutes % 60);
            return `${hours}h ${mins}m`;
        }
    };

    // Check if we have valid distribution data
    const hasDistributionData = distribution && distribution.length > 0;

    return (
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
                <div className="relative">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <HiCollection className="w-5 h-5 mr-3 text-green-400" />
                    Patrones de Sesión
                    {!BackendStatus?.online && (
                        <span className="text-red-500 text-sm ml-2">(Datos no actualizados)</span>
                    )}
                </h3>
                
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                            <div className="text-gray-400 text-sm mb-1">Sesiones Totales</div>
                            <div className="text-2xl font-bold text-white">
                                {BackendStatus?.online ? totalSessions.toLocaleString() : '--'}
                            </div>
                            {BackendStatus?.online ? (
                                <div className="text-green-400 text-sm flex items-center mt-1">
                                    <HiTrendingUp className="w-3 h-3 mr-1" />
                                    Datos actuales
                                </div>
                            ) : (
                                <div className="text-gray-500 text-sm mt-1">No disponible</div>
                            )}
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                            <div className="text-gray-400 text-sm mb-1">Duración Promedio</div>
                            <div className="text-2xl font-bold text-white">
                                {BackendStatus?.online ? formatDuration(avgDuration) : '--'}
                            </div>
                            {BackendStatus?.online ? (
                                <div className="text-blue-400 text-sm">Tiempo promedio</div>
                            ) : (
                                <div className="text-gray-500 text-sm">No disponible</div>
                            )}
                        </div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                        <div className="text-gray-400 text-sm mb-2">Distribución de Sesiones</div>
                        {BackendStatus?.online && hasDistributionData ? (
                            <div className="space-y-2">
                                {distribution.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-gray-300 text-sm">{item?.range || 'N/A'}</span>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                                                    style={{ width: `${item?.percentage || 0}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-white text-sm font-medium w-12 text-right">
                                                {(item?.percentage || 0).toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                <HiExclamationCircle className="w-8 h-8 mx-auto mb-2" />
                                {BackendStatus?.online ? 'No hay datos de distribución' : 'Datos no disponibles'}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}