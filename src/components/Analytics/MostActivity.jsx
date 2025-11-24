import { 
  HiClock,
  HiExclamationCircle 
} from 'react-icons/hi';

export default function MostActivity({BackendStatus}){
    return(
        <div className="mt-6">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiClock className="w-5 h-5 mr-3 text-purple-400" />
                Horarios de Mayor Actividad
                {!BackendStatus.online && (
                  <span className="text-yellow-500 text-sm ml-2 flex items-center">
                    <HiExclamationCircle className="w-4 h-4 mr-1" />
                    (Sin conexion al backed)
                  </span>
                )}
              </h3>
              
              <div className="grid grid-cols-6 gap-4">
                {[
                  { period: 'Madrugada', hours: '00-06', activity: 15, peak: false },
                  { period: 'Mañana', hours: '06-09', activity: 45, peak: false },
                  { period: 'Mañana Alta', hours: '09-12', activity: 85, peak: true },
                  { period: 'Mediodía', hours: '12-14', activity: 65, peak: false },
                  { period: 'Tarde Alta', hours: '14-18', activity: 90, peak: true },
                  { period: 'Noche', hours: '18-24', activity: 35, peak: false }
                ].map((item, index) => (
                  <div key={index} className="text-center relative">
                    {!BackendStatus.online && (
                      <div className="absolute -top-1 -right-1 z-10">
                        <div className="bg-yellow-500 text-yellow-900 text-xs px-1 rounded text-xs">Example</div>
                      </div>
                    )}
                    <div className={`p-4 rounded-2xl border transition-all duration-300 ${
                      BackendStatus.online ? 'hover:scale-105' : ''
                    } ${
                      item.peak 
                        ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30' 
                        : 'bg-gray-800/50 border-gray-700'
                    } ${!BackendStatus.online ? 'opacity-80' : ''}`}>
                      <div className={`font-semibold mb-1 ${
                        BackendStatus.online ? 'text-white' : 'text-gray-300'
                      }`}>
                        {item.period}
                      </div>
                      <div className={`text-sm mb-3 ${
                        BackendStatus.online ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.hours}
                      </div>
                      <div className={`text-2xl font-bold mb-2 ${
                        BackendStatus.online ? 'text-white' : 'text-gray-300'
                      }`}>
                        {item.activity}%
                      </div>
                      {item.peak && (
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          BackendStatus.online 
                            ? 'bg-purple-500/30 text-purple-300' 
                            : 'bg-purple-500/20 text-purple-400/70'
                        }`}>
                          PICO
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {!BackendStatus.online && (
                <div className="mt-4 text-center">
                  <div className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-xl text-sm inline-block">
                    Los horarios de actividad pueden no estar actualizados
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    );
}