import { 
  HiCalendar, 
  HiExclamationCircle
} from 'react-icons/hi';

export default function Resume({ reportsData, weeklychanges, selectedPeriod = "complete", BackendStatus }) {
  
  // Función para determinar el texto según el período
  const getPeriodText = () => {
    switch(selectedPeriod) {
      case 'daily': return 'hoy';
      case 'weekly': return 'esta semana'; 
      case 'monthly': return 'este mes';
      case 'custom': return 'este período';
      default: return 'esta semana';
    }
  };

  const getComparisonText = () => {
    switch(selectedPeriod) {
      case 'daily': return 'vs ayer';
      case 'weekly': return 'vs semana anterior';
      case 'monthly': return 'vs mes anterior';
      case 'custom': return 'vs período anterior';
      default: return 'vs anterior';
    }
  };

  const periodText = getPeriodText();
  const comparisonText = getComparisonText();

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="relative">
          <h3 className="text-xl font-bold text-white flex items-center">
            <HiCalendar className="w-5 h-5 mr-3 text-blue-400" />
            Resumen del Período
            {!BackendStatus.online && (
              <span 
                className="text-red-500 ml-2 flex items-center cursor-help"
                title="Los datos mostrados pueden no estar actualizados"
              >
                <HiExclamationCircle className="w-4 h-4 mr-1" />
                (Sin conexión)
              </span>
            )}
          </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Tiempo Total */}
          <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="text-gray-400 text-sm mb-1">Tiempo Total</div>
            <div className="text-2xl font-bold text-white">
              {Math.round(reportsData?.summary?.totalTime || 0)}h
            </div>
            <div className={`text-sm ${
              weeklychanges?.time_total?.change_percent > 0 ? 'text-green-400' : 
              weeklychanges?.time_total?.change_percent < 0 ? 'text-red-400' : 'text-blue-400'
            }`}>
              {weeklychanges?.time_total?.change_percent > 0 ? '+' : ''}
              {weeklychanges?.time_total?.change_percent || 0}% {comparisonText}
            </div>
          </div>
          
          {/* Apps Únicas */}
          <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="text-gray-400 text-sm mb-1">Apps Únicas</div>
            <div className="text-2xl font-bold text-white">
              {reportsData?.summary?.appsTracked || 0}
            </div>
            <div className="text-green-400 text-sm">
              +{weeklychanges?.unique_apps?.new_this_period || 0} nuevas {periodText}
            </div>
          </div>
          
          {/* Sitios Únicos */}
          <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="text-gray-400 text-sm mb-1">Sitios Únicos</div>
            <div className="text-2xl font-bold text-white">
              {reportsData?.summary?.sitesTracked || 0}
            </div>
            <div className="text-purple-400 text-sm">
              +{weeklychanges?.unique_sites?.new_this_period || 0} nuevos {periodText}
            </div>
          </div>
          
          {/* Sesiones */}
          <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="text-gray-400 text-sm mb-1">Sesiones</div>
            <div className="text-2xl font-bold text-white">
              {weeklychanges?.sessions?.count || 0}
            </div>
            <div className="text-yellow-400 text-sm">
              Promedio: {weeklychanges?.sessions?.avg_minutes || 0}m
            </div>
          </div>
        </div>

        {/* Info del período actual */}
        <div className="mt-4 text-center">
          <span className="text-gray-400 text-sm">
            Período: {selectedPeriod === 'daily' ? 'Hoy' : 
                     selectedPeriod === 'weekly' ? 'Esta semana' :
                     selectedPeriod === 'monthly' ? 'Este mes' : 
                     selectedPeriod === 'custom' ? 'Personalizado' : 'Completo'}
          </span>
        </div>
      </div>
    </div>
  );
}