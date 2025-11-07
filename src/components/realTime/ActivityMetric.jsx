import { 
  HiChip,
  HiTrendingUp,
  HiLightningBolt
} from 'react-icons/hi';

const ActivityMetrics = ({ realTimeData }) => {
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
      {/* Resumen del Día - Más sobrio */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 shadow-xl border border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center mr-3 border border-gray-600">
            <HiChip className="w-5 h-5 text-gray-300" />
          </div>
          Resumen del Día
        </h3>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{getTotalTimeToday()}</div>
            <div className="text-gray-400">Tiempo total</div>
          </div>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-xl font-bold text-white">{realTimeData?.dailyStats?.app_count || 0}</div>
              <div className="text-blue-400/80 text-sm">Apps</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">{realTimeData?.dailyStats?.site_count || 0}</div>
              <div className="text-purple-400/80 text-sm">Sitios</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Actividad - Más sobrio */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 shadow-xl border border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center mr-3 border border-gray-600">
            <HiTrendingUp className="w-5 h-5 text-gray-300" />
          </div>
          Top Actividad
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="text-blue-400/90 text-sm mb-1 font-medium">App más usada</div>
            <div className="text-white font-semibold text-lg truncate">{getMostUsedApp()}</div>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="text-purple-400/90 text-sm mb-1 font-medium">Sitio más visitado</div>
            <div className="text-white font-semibold text-lg truncate">{getTopSite()}</div>
          </div>
        </div>
      </div>

      {/* Estado del Sistema - Más sobrio */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 shadow-xl border border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center mr-3 border border-gray-600">
            <HiLightningBolt className="w-5 h-5 text-gray-300" />
          </div>
          Estado del Sistema
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-800">
            <span className="text-gray-400">Monitor activo</span>
            <span className="text-green-400/90 font-semibold flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              En vivo
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-800">
            <span className="text-gray-400">Datos actualizados</span>
            <span className="text-green-400/90 font-semibold">✓</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-400">Última actualización</span>
            <span className="text-gray-300 font-mono text-sm">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityMetrics;