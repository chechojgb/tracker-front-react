
export default function CsvReports({BackendStatus}){
    return(
        <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="text-white font-semibold mb-2">Datos en CSV</div>
            <div className="text-gray-400 text-sm mb-3">Exporta tus datos brutos para análisis externos</div>
            <button 
            disabled={!BackendStatus.online}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-2 rounded-xl transition-colors"
            >
            Descargar CSV Completo
            </button>
        </div>
    );
}