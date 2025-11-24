import { 
  HiChartBar, 
  HiExclamationCircle 
} from 'react-icons/hi';
import Chart from 'react-apexcharts';


export default function PerDay({BackendStatus, dailyTimeChart= []}) {
    return(
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiChartBar className="w-5 h-5 mr-3 text-blue-400" />
                Tiempo por Día de la Semana
                {!BackendStatus.online && (
                    <span className="text-yellow-500 text-sm ml-2 flex items-center">
                    <HiExclamationCircle className="w-4 h-4 mr-1" />
                    (Datos en caché)
                    </span>
                )}
                </h3>
                
                <div className="bg-gray-800/20 rounded-2xl border border-gray-700 p-4 relative">
                {/* Advertencia sobre datos en caché */}
                {!BackendStatus.online && (
                    <div className="absolute top-2 right-2 z-10">
                    <div className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
                        Datos no actualizados
                    </div>
                    </div>
                )}
                
                <Chart
                    options={dailyTimeChart.options}
                    series={dailyTimeChart.series}
                    type="bar"
                    height={350}
                />
                </div>
            </div>
        </div>
    );
}