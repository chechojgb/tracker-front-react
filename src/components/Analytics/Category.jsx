import { 
  HiChartPie, 
  HiExclamationCircle 
} from 'react-icons/hi';
import Chart from 'react-apexcharts';

export default function Category({BackendStatus, categoryChart = []}){
    return(
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            {/* Overlay cuando no hay conexión */}
            {!BackendStatus.online && (
                <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[1px] z-10 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                    <HiExclamationCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                    <p className="font-semibold text-lg">Gráfico no disponible</p>
                    <p className="text-gray-300">Sin conexión al backend</p>
                </div>
                </div>
            )}
            
            <div className="relative">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiChartPie className="w-5 h-5 mr-3 text-purple-400" />
                Distribución por Categorías
                </h3>
                
                <div className="bg-gray-800/20 rounded-2xl border border-gray-700 p-4">
                <Chart
                    options={categoryChart.options}
                    series={categoryChart.series}
                    type="donut"
                    height={350}
                />
                </div>
            </div>
        </div>
    );
}