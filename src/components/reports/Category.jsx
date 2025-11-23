import { 
  HiCollection
} from 'react-icons/hi';

export default function Category({BackendStatus ,reportsData = [] }) {
    
    // Función para formatear segundos a minutos
    const formatTimeToMinutes = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} min`;
    };

    // Filtrar y ordenar los datos
    const filteredData = reportsData
        .filter(item => item.total_time > 0) // Solo items con tiempo > 0
        .sort((a, b) => b.total_time - a.total_time); // Ordenar de mayor a menor (opcional)

    return (
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <HiCollection className="w-5 h-5 mr-3 text-purple-400" />
                    Tiempo por Categoría
                </h3>
                
                <div className="space-y-3">
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-300">{item.category}</span>
                                </div>
                                <span className="text-white font-bold">
                                    {formatTimeToMinutes(item.total_time)}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-4 text-gray-400">
                            No hay datos con tiempo registrado. {BackendStatus.online ? '' :  'Revisa tu conexion al backend'}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}