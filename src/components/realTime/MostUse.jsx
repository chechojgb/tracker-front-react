import { 
  HiDesktopComputer,
  HiChip,
  HiClock,
  HiGlobe,
  HiLink,
  HiEye,
  HiEyeOff 
} from 'react-icons/hi';

const iconMap = {
  HiDesktopComputer: HiDesktopComputer,
  HiGlobe: HiGlobe
}

function NoData({text, subtext, icon}){
  const IconComponet = iconMap[icon] || HiDesktopComputer;
  return(
    <div className="text-center py-12 text-gray-400">
      <IconComponet className="w-16 h-16 mx-auto mb-4 opacity-30" />
      <p className="text-lg mb-2">{text}</p>
      <p className="text-sm text-gray-500">{subtext}</p>
    </div>
  );
}

export function MostUsedApp({ applications = [], BackendStatus={BackendStatus}}) {
  
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
    if (minutes > 60) return 'bg-red-500';
    if (minutes > 30) return 'bg-orange-500';
    if (minutes > 10) return 'bg-yellow-500';
    if (minutes > 0) return 'bg-green-500';
    return 'bg-gray-500';
  };

  // Función para obtener el icono
  const getAppIcon = (name) => {
    const lowerName = name.toLowerCase();
    
    if (lowerName.includes('code') || lowerName.includes('vs')) return <HiChip className="w-5 h-5 text-white" />;
    if (lowerName.includes('chrome') || lowerName.includes('opera') || lowerName.includes('browser')) return '🌐';
    if (lowerName.includes('steam') || lowerName.includes('game')) return '🎮';
    if (lowerName.includes('explorer') || lowerName.includes('file')) return '📁';
    
    return <HiDesktopComputer className="w-5 h-5 text-white" />;
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 -translate-x-16 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full translate-y-20 translate-x-20 blur-xl"></div>
      
      {/* Patrón de grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Header con mejor diseño */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <HiDesktopComputer className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
              <span className="text-xs font-bold text-white">{applications.length}</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              Aplicaciones Más Usadas
            </h2>
            <p className="text-gray-400 text-sm flex items-center mt-1">
              <HiClock className="w-4 h-4 mr-1" />
              Uso en tiempo real
            </p>
          </div>
        </div>
        
        {/* Indicador de estado */}
        {BackendStatus.online ? (
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Activo</span>
          </div>
        ):(
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-sm font-medium">Sin actividad</span>
          </div>
        )}
      </div>
      
      {/* Separador decorativo */}
      <div className="relative mb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full"></div>
      </div>
      
      {/* Lista de aplicaciones */}
      <div className="relative space-y-3">
        {applications.length > 0 ? applications.map((app, index) => (
          <div 
            key={`${app.name}-${index}`}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-[1.02] shadow-lg"
          >
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                {/* Indicador de posición */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-lg ${
                  index === 0 ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' :
                  index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                  index === 2 ? 'bg-gradient-to-br from-amber-700 to-amber-800' :
                  'bg-gradient-to-br from-gray-700 to-gray-800'
                }`}>
                  #{index + 1}
                </div>
                
                {/* Icono de la aplicación */}
                <div className={`w-12 h-12 ${getUsageColor(app.usage)} rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  {getAppIcon(app.name)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-lg truncate group-hover:text-blue-300 transition-colors">
                    {app.name}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      app.category === 'productividad' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      app.category === 'entretenimiento' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                      app.category === 'comunicación' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      app.category === 'desarrollo' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                      'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                    }`}>
                      {app.category}
                    </span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{app.processId || 'PID: N/A'}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right ml-4">
                <div className="text-white font-bold text-xl">{app.usage}</div>
                <div className="text-gray-400 text-sm flex items-center justify-end space-x-1">
                  <HiClock className="w-3 h-3" />
                  <span>tiempo</span>
                </div>
                {/* Barra de progreso sutil */}
                <div className="mt-2 w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getUsageColor(app.usage)} rounded-full transition-all duration-500`}
                    style={{ 
                      width: `${Math.min(parseUsageToMinutes(app.usage) / 60 * 100, 100)}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )) : (
          <NoData text={'No hay datos de aplicaciones'} subtext={'Las aplicaciones en uso aparecerán aquí'} icon={'HiDesktopComputer'}/>
        )}
      </div>
      
      {/* Footer con información adicional */}
      <div className="relative mt-6 pt-4 border-t border-gray-700/50">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <HiChip className="w-4 h-4 mr-1" />
              Procesos: <span className="text-white ml-1">{applications.length}</span>
            </span>
            <span>•</span>
            <span>Actualizado ahora</span>
          </div>
          {BackendStatus.online ? (
            <div className="flex items-center space-x-2">
              <HiEye className="w-4 h-4" />
              <span>Monitoreo activo</span>
            </div>
          ): (
            <div className="flex items-center space-x-2">
              <HiEyeOff  className="w-4 h-4" />
              <span>Monitoreo descativado</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



export function MostUsedPages({websites = [], BackendStatus={BackendStatus}}) {
  // console.log(websites);
  
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full translate-y-20 -translate-x-20 blur-xl"></div>
      
      {/* Patrón de grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Header con mejor diseño */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <HiGlobe className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
              <span className="text-xs font-bold text-white">{websites.length}</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              Sitios Más Visitados
            </h2>
            <p className="text-gray-400 text-sm flex items-center mt-1">
              <HiLink className="w-4 h-4 mr-1" />
              Navegación en tiempo real
            </p>
          </div>
        </div>
        
        {/* Indicador de estado */}
        {BackendStatus.online ? (
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Monitoreando</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-sm font-medium">Sin actividad</span>
          </div>
        )}
      </div>
      
      {/* Separador decorativo */}
      <div className="relative mb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-500 rounded-full"></div>
      </div>
      
      {/* Lista de sitios web */}
      <div className="relative space-y-3">
        {websites.length > 0 ? websites.map((site, index) => (
          <div 
            key={index} 
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-[1.02] shadow-lg"
          >
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                {/* Indicador de posición */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-lg ${
                  index === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                  index === 1 ? 'bg-gradient-to-br from-purple-400 to-purple-500' :
                  index === 2 ? 'bg-gradient-to-br from-pink-500 to-pink-600' :
                  'bg-gradient-to-br from-gray-700 to-gray-800'
                }`}>
                  #{index + 1}
                </div>
                
                {/* Favicon o icono del sitio */}
                <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
                  <HiLink className="w-4 h-4 text-gray-400" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-lg truncate group-hover:text-purple-300 transition-colors">
                    {site.name}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      site.category === 'productividad' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      site.category === 'redes sociales' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      site.category === 'entretenimiento' ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' :
                      site.category === 'noticias' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                      site.category === 'educación' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' :
                      'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                    }`}>
                      {site.category}
                    </span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm truncate max-w-[120px]">
                      {site.url || 'sin URL'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-right ml-4">
                <div className="text-white font-bold text-xl">{site.time}</div>
                <div className="text-gray-400 text-sm flex items-center justify-end space-x-1">
                  <HiClock className="w-3 h-3" />
                  <span>tiempo</span>
                </div>
                {/* Barra de progreso sutil */}
                <div className="mt-2 w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((index + 1) * 15, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )) : (
          <NoData text={'No hay datos de sitios web'} subtext={'Los sitios visitados aparecerán aquí'} icon={'HiGlobe'}/>
        )}
      </div>
      
      {/* Footer con información adicional */}
      <div className="relative mt-6 pt-4 border-t border-gray-700/50">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <HiEye className="w-4 h-4 mr-1" />
              Sitios: <span className="text-white ml-1">{websites.length}</span>
            </span>
            <span>•</span>
            {BackendStatus.online ? <span>Navegación activa</span> : <span>Navegación desactivada</span>}
          </div>
          <div className="flex items-center space-x-2">
            <HiClock className="w-4 h-4" />
            {BackendStatus.online ? <span>Actualizado ahora</span> : <span>Sin actualizaciones del servidor</span>}
          </div>
        </div>
      </div>
    </div>
  );
}