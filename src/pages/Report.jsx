import { 
  HiCalendar, 
  HiDownload, 
  HiDocumentText,
  HiClock,
  HiDesktopComputer,
  HiGlobe,
  HiTrendingUp,
  HiCollection
} from 'react-icons/hi';

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Principal */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-8 shadow-2xl overflow-hidden mb-8">
          {/* ... mismo estilo del header ... */}
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <HiDocumentText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Resúmenes Periódicos</h1>
                <p className="text-gray-400 mt-1">Consulta y exporta tus datos de actividad</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Resumen por Período */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiCalendar className="w-5 h-5 mr-3 text-blue-400" />
                Resumen del Período
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Tiempo Total</div>
                  <div className="text-2xl font-bold text-white">45h 23m</div>
                  <div className="text-blue-400 text-sm">+12% vs anterior</div>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Apps Únicas</div>
                  <div className="text-2xl font-bold text-white">28</div>
                  <div className="text-green-400 text-sm">+5 apps nuevas</div>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Sitios Únicos</div>
                  <div className="text-2xl font-bold text-white">156</div>
                  <div className="text-purple-400 text-sm">32 sitios nuevos</div>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Sesiones</div>
                  <div className="text-2xl font-bold text-white">89</div>
                  <div className="text-yellow-400 text-sm">Promedio: 31m</div>
                </div>
              </div>
            </div>
          </div>

          {/* Exportar Datos */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiDownload className="w-5 h-5 mr-3 text-green-400" />
                Exportar Datos
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                  <div className="text-white font-semibold mb-2">Datos en CSV</div>
                  <div className="text-gray-400 text-sm mb-3">Exporta tus datos brutos para análisis externos</div>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition-colors">
                    Descargar CSV Completo
                  </button>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                  <div className="text-white font-semibold mb-2">Resumen PDF</div>
                  <div className="text-gray-400 text-sm mb-3">Genera un reporte visual del período</div>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition-colors">
                    Generar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Comparativa de Períodos */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiTrendingUp className="w-5 h-5 mr-3 text-yellow-400" />
                Comparativa
              </h3>
              
              <div className="space-y-4">
                {[
                  { metric: 'Tiempo Total', current: '45h 23m', previous: '40h 15m', change: '+12%' },
                  { metric: 'Apps Diferentes', current: '28', previous: '23', change: '+22%' },
                  { metric: 'Sitios Diferentes', current: '156', previous: '124', change: '+26%' },
                  { metric: 'Tiempo por Sesión', current: '31m', previous: '28m', change: '+11%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="text-gray-300 text-sm">{item.metric}</div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-bold">{item.current}</span>
                      <span className="text-green-400 text-sm">({item.change})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Datos por Categoría */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiCollection className="w-5 h-5 mr-3 text-purple-400" />
                Tiempo por Categoría
              </h3>
              
              <div className="space-y-3">
                {[
                  { category: 'Desarrollo', time: '18h 45m', color: 'bg-blue-500' },
                  { category: 'Navegación', time: '12h 20m', color: 'bg-purple-500' },
                  { category: 'Comunicación', time: '8h 15m', color: 'bg-green-500' },
                  { category: 'Entretenimiento', time: '4h 32m', color: 'bg-yellow-500' },
                  { category: 'Otros', time: '1h 31m', color: 'bg-gray-500' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                      <span className="text-gray-300">{item.category}</span>
                    </div>
                    <span className="text-white font-bold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}