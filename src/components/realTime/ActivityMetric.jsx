import { 
  HiChip,
  HiTrendingUp,
  HiLightningBolt,
  HiDesktopComputer,
  HiGlobe
} from 'react-icons/hi';

const ActivityMetrics = ({ realTimeData, BackendStatus }) => {
  // Funciones auxiliares (las mismas)
  const getTotalTimeToday = () => {
    const appSeconds = realTimeData?.topApps?.reduce((sum, app) => sum + app.total_seconds, 0) || 0;
    const webSeconds = realTimeData?.topSites?.reduce((sum, site) => sum + site.total_seconds, 0) || 0;
    return formatDuration(appSeconds + webSeconds);
  };

  const getMostUsedApp = () => {
    if (!realTimeData?.topApps?.length) return 'N/A';
    return realTimeData.topApps[0]?.app_name?.replace('.exe', '') || 'N/A';
  };

  const getTopSite = () => {
    if (!realTimeData?.topSites?.length) return 'N/A';
    return realTimeData.topSites[0]?.site_name || 'N/A';
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '0m';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div className="space-y-6">
      {/* Resumen del Día - Mejorado */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-y-10 translate-x-10 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full translate-y-12 -translate-x-12 blur-xl"></div>
        
        {/* Patrón de grid sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <h3 className="text-xl font-bold text-white mb-6 flex items-center relative">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
            <HiChip className="w-6 h-6 text-white" />
          </div>
          Resumen del Día
        </h3>
        <div className="space-y-4 relative">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{getTotalTimeToday()}</div>
            <div className="text-gray-400 font-medium">Tiempo total</div>
          </div>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{realTimeData?.dailyStats?.app_count || 0}</div>
              <div className="text-blue-400/80 text-sm font-medium">Apps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{realTimeData?.dailyStats?.site_count || 0}</div>
              <div className="text-purple-400/80 text-sm font-medium">Sitios</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top Actividad - Rediseñado */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full translate-y-20 -translate-x-20 blur-xl"></div>
        
        {/* Patrón de grid sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Header con contador */}
        <div className="relative flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <HiTrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                <span className="text-xs font-bold text-white">2</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Top Actividad</h2>
              <p className="text-gray-400 text-sm flex items-center mt-1">
                <HiTrendingUp className="w-4 h-4 mr-1" />
                Lo más usado hoy
              </p>
            </div>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="relative mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>

        {/* Items de top actividad */}
        <div className="relative space-y-4">
          {/* App más usada */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-[1.02] shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <HiDesktopComputer className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-blue-400/90 text-sm font-semibold mb-1">App más usada</div>
                  <div className="text-white font-bold text-xl truncate group-hover:text-blue-300 transition-colors">
                    {getMostUsedApp()}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold text-lg">#1</div>
                <div className="text-gray-400 text-sm">ranking</div>
              </div>
            </div>
          </div>

          {/* Sitio más visitado */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-[1.02] shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <HiGlobe className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-purple-400/90 text-sm font-semibold mb-1">Sitio más visitado</div>
                  <div className="text-white font-bold text-xl truncate group-hover:text-purple-300 transition-colors">
                    {getTopSite()}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold text-lg">#1</div>
                <div className="text-gray-400 text-sm">ranking</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative mt-6 pt-4 border-t border-gray-700/50">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <HiTrendingUp className="w-4 h-4" />
              <span>Top del día</span>
            </div>
            <span>Actualizado ahora</span>
          </div>
        </div>
      </div>

      {/* Estado del Sistema - Mejorado */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full -translate-y-10 translate-x-10 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/10 rounded-full translate-y-12 -translate-x-12 blur-xl"></div>
        
        {/* Patrón de grid sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <h3 className="text-xl font-bold text-white mb-6 flex items-center relative">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
            <HiLightningBolt className="w-6 h-6 text-white" />
          </div>
          Estado del Sistema
        </h3>
        <div className="space-y-4 relative">
          <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
            <span className="text-gray-300 font-medium">Monitor inactivo</span>
            {BackendStatus.online ? (
              <span className="text-green-400 font-semibold flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                En vivo
              </span>
            ) : (
              <span className="text-red-400 font-semibold flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                Sin conexion
              </span>
            )}
            
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
            <span className="text-gray-300 font-medium">Datos actualizados</span>
            {BackendStatus.online ? <span className="text-green-400 font-semibold text-lg">✓</span> : <span className="text-red-400 font-semibold text-lg">x</span> }
            
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-gray-300 font-medium">Última actualización</span>
            <span className="text-gray-300 font-mono text-sm bg-gray-800/50 px-3 py-1 rounded-lg">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityMetrics;