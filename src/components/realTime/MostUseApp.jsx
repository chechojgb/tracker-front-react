import { 
  HiDesktopComputer,
  HiChip,
  HiClock
} from 'react-icons/hi';

export default function MostUsedApp({ applications = [] }) {
  // Función para convertir el uso a minutos numéricos
  const parseUsageToMinutes = (usage) => {
    if (!usage) return 0;
    const match = usage.match(/(\d+)([hm])?/);
    if (!match) return 0;
    
    const value = parseInt(match[1]);
    const unit = match[2];
    
    if (unit === 'h') return value * 60;
    return value;
  };

  // Función para obtener el color según el tiempo de uso
  const getUsageColor = (usage) => {
    const minutes = parseUsageToMinutes(usage);
    if (minutes > 60) return 'bg-red-400';
    if (minutes > 30) return 'bg-orange-400';
    if (minutes > 10) return 'bg-yellow-400';
    if (minutes > 0) return 'bg-green-400';
    return 'bg-gray-500';
  };

  // Función para obtener el icono
  const getAppIcon = (name) => {
    const lowerName = name.toLowerCase();
    
    if (lowerName.includes('code') || lowerName.includes('vs')) return <HiChip className="w-4 h-4 text-white" />;
    if (lowerName.includes('chrome') || lowerName.includes('opera') || lowerName.includes('browser')) return '🌐';
    if (lowerName.includes('steam') || lowerName.includes('game')) return '🎮';
    if (lowerName.includes('explorer') || lowerName.includes('file')) return '📁';
    
    return <HiDesktopComputer className="w-4 h-4 text-white" />;
  };

  return (
    <div className="space-y-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/20 rounded-xl">
                <HiDesktopComputer className="w-6 h-6 text-purple-400" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-white">Aplicaciones Más Usadas hoy</h3>
            </div>
            </div>
        </div>
      {applications.length > 0 ? (
        applications.map((app, index) => (
          <div 
            key={`${app.name}-${index}`}
            className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                {/* Icono con indicador de uso */}
                <div className={`w-10 h-10 ${getUsageColor(app.usage)} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                  {getAppIcon(app.name)}
                </div>
                
                {/* Información de la aplicación */}
                <div className="min-w-0 flex-1">
                  <div className="text-white font-semibold truncate" title={app.name}>
                    {app.name}
                  </div>
                  <div className="text-sm text-gray-400 capitalize flex items-center space-x-1">
                    <HiClock className="w-3 h-3" />
                    <span>{app.category}</span>
                  </div>
                </div>
              </div>
              
              {/* Tiempo de uso */}
              <div className="text-right flex-shrink-0 ml-4">
                <div className="text-white font-bold text-lg">{app.usage}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">tiempo</div>
              </div>
            </div>
            
            {/* Barra de progreso para todas las apps */}
            <div className="mt-3">
              <div className="w-full bg-gray-800 rounded-full h-1">
                <div 
                  className={`h-1 rounded-full ${getUsageColor(app.usage)} transition-all duration-500`}
                  style={{
                    width: `${Math.min(parseUsageToMinutes(app.usage) / 60 * 100, 100)}%`
                  }}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        // Estado vacío
        <div className="text-center py-8 text-gray-400">
          <HiDesktopComputer className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>No hay datos de aplicaciones</p>
        </div>
      )}
    </div>
  );
}