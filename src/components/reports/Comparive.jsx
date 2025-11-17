import { 
  HiTrendingUp,
  HiTrendingDown,
  HiClock,
  HiDesktopComputer,
  HiGlobe,
  HiCollection
} from 'react-icons/hi';

export default function Comparative({ comparisonData, selectedPeriod = "weekly" }) {
  
  const getPeriodConfig = () => {
    switch(selectedPeriod) {
      case 'daily':
        return { current: 'Hoy', previous: 'Ayer', icon: '🕐' };
      case 'weekly':
        return { current: 'Esta Semana', previous: 'Semana Anterior', icon: '📅' };
      case 'monthly':
        return { current: 'Este Mes', previous: 'Mes Anterior', icon: '🗓️' };
      default:
        return { current: 'Actual', previous: 'Anterior', icon: '⚡' };
    }
  };

  const periodConfig = getPeriodConfig();

  const metrics = [
    {
      name: 'Tiempo Total',
      current: comparisonData?.time_total?.hours || 0,
      change: comparisonData?.time_total?.change_percent || 0,
      icon: HiClock,
      unit: 'h',
      color: 'blue'
    },
    {
      name: 'Apps Únicas',
      current: comparisonData?.unique_apps?.count || 0,
      newItems: comparisonData?.unique_apps?.new_this_period || 0,
      icon: HiDesktopComputer,
      unit: '',
      color: 'green'
    },
    {
      name: 'Sitios Únicos',
      current: comparisonData?.unique_sites?.count || 0, 
      newItems: comparisonData?.unique_sites?.new_this_period || 0,
      icon: HiGlobe,
      unit: '',
      color: 'purple'
    },
    {
      name: 'Sesiones',
      current: comparisonData?.sessions?.count || 0,
      avgMinutes: comparisonData?.sessions?.avg_minutes || 0,
      icon: HiCollection,
      unit: '',
      color: 'orange'
    }
  ];

  const getColorClasses = (color, change) => {
    const baseColors = {
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
      green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400' },
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
      orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' }
    };
    
    const changeColor = change > 0 ? 'text-green-400' : change < 0 ? 'text-red-400' : 'text-gray-400';
    const changeIcon = change > 0 ? HiTrendingUp : HiTrendingDown;
    
    return { ...baseColors[color], changeColor, changeIcon };
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 rounded-3xl border border-purple-500/30 p-6 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <HiTrendingUp className="w-5 h-5 mr-3 text-purple-400" />
          Comparativa
          <span className="text-gray-400 text-sm font-normal ml-2">
            {periodConfig.current} vs {periodConfig.previous}
          </span>
        </h3>
        
        <div className="space-y-4">
          {metrics.map((metric, index) => {
            const colors = getColorClasses(metric.color, metric.change);
            
            return (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                    <metric.icon className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  <div className="text-gray-300 text-sm">{metric.name}</div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-white font-bold">
                    {metric.current}{metric.unit}
                  </span>
                  
                  {/* Para tiempo total mostrar porcentaje */}
                  {metric.change !== undefined && (
                    <span className={`text-sm ${colors.changeColor} flex items-center`}>
                      <colors.changeIcon className="w-3 h-3 mr-1" />
                      {metric.change > 0 ? '+' : ''}{metric.change}%
                    </span>
                  )}
                  
                  {/* Para apps/sitios mostrar nuevos */}
                  {metric.newItems !== undefined && metric.newItems > 0 && (
                    <span className="text-green-400 text-sm">
                      +{metric.newItems} nuevos
                    </span>
                  )}
                  
                  {/* Para sesiones mostrar promedio */}
                  {metric.avgMinutes !== undefined && (
                    <span className="text-yellow-400 text-sm">
                      {metric.avgMinutes}m en promedio
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer compacto */}
        <div className="mt-4 p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
          <div className="text-purple-300 text-sm font-semibold">
            {comparisonData?.time_total?.change_percent > 0 ? '📈 En crecimiento' : '📉 En ajuste'}
          </div>
          <div className="text-purple-200 text-xs mt-1">
            +{comparisonData?.unique_apps?.new_this_period || 0} apps • +{comparisonData?.unique_sites?.new_this_period || 0} sitios
          </div>
        </div>
      </div>
    </div>
  );
}