import { 
  HiDownload, 
  HiDocumentText,
  HiExclamationCircle 
} from 'react-icons/hi';
import { apiService } from '../services/api/api';
import { useState, useEffect } from 'react';
import Resume from '../components/reports/Resume';
import Compative from '../components/reports/Comparive';
import Category from '../components/reports/Category';
import useBackendStatus from '../hooks/useBackendStatus';


export default function ReportsPage() {
const [weeklychanges, setWeeklychanges] = useState(null);
const [selectedPeriod, setSelectedPeriod] = useState("complete");
const [customStartDate, setCustomStartDate] = useState('');
const [customEndDate, setCustomEndDate] = useState('');
const [reportsData, setReportsData] = useState(null);
const [loading, setLoading] = useState(false);
const BackendStatus = useBackendStatus();
const categories = reportsData?.categories_data;
console.log(BackendStatus);

useEffect(() => {
  const loadReportsData = async () => {
    try {
      setLoading(true);
      
      let reportsResponse;
      let changesResponse;
      
      if (selectedPeriod === 'custom' && customStartDate && customEndDate) {
        // Usar fechas personalizadas para reports
        [reportsResponse, changesResponse] = await Promise.all([
          apiService.getReports(customStartDate, customEndDate, null),
          apiService.getComparison("weekly") // weekly-changes no usa parámetros de fecha
        ]);
      } else {
        // Usar período predefinido
        [reportsResponse, changesResponse] = await Promise.all([
          apiService.getReports(null, null, selectedPeriod),
          apiService.getComparison(selectedPeriod === "complete" ? "weekly" : selectedPeriod)
        ]);
      }
      
      setReportsData(reportsResponse);
      setWeeklychanges(changesResponse); 
      console.log('reportes:', reportsResponse);
      console.log('reporte semanal:', changesResponse);
    } catch (error) {
      console.error('Error loading reports:', error);
    } finally {
      setLoading(false);
    }
  };

  loadReportsData();
}, [selectedPeriod, customStartDate, customEndDate]); 


  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300 text-xl">Cargando datos en tiempo real...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Principal */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-8 shadow-2xl overflow-hidden mb-8">
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
            
            {/* Selector de Período */}
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <label htmlFor="period-select" className="text-sm text-gray-400 mb-2">
                  Período de análisis
                </label>
                <select 
                  id="period-select"
                  value={selectedPeriod} 
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="complete">Historial Completo</option>
                  <option value="monthly">Este Mes</option>
                  <option value="weekly">Esta Semana</option>
                  <option value="daily">Hoy</option>
                  <option value="custom">Personalizado</option>
                </select>
              </div>
              
              {/* Selector de fechas personalizadas (solo visible cuando se selecciona "custom") */}
              {selectedPeriod === 'custom' && (
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-400 mb-2">Desde</label>
                    <input 
                      type="date"
                      value={customStartDate}
                      onChange={(e) => setCustomStartDate(e.target.value)}
                      className="bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-400 mb-2">Hasta</label>
                    <input 
                      type="date"
                      value={customEndDate}
                      onChange={(e) => setCustomEndDate(e.target.value)}
                      className="bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Resumen por Período */}
          <Resume reportsData={reportsData} weeklychanges={weeklychanges} selectedPeriod={selectedPeriod} BackendStatus={BackendStatus}/>

          {/* Exportar Datos */}
          <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 rounded-3xl border border-purple-500/30 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            {/* Overlay cuando no hay conexión */}
            {!BackendStatus.online && (
              <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[1px] z-10 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <HiExclamationCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="font-semibold">Exportación no disponible</p>
                  <p className="text-sm text-gray-300">Sin conexión al backend</p>
                </div>
              </div>
            )}
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiDownload className="w-5 h-5 mr-3 text-green-400" />
                Exportar Datos
              </h3>
              
              <div className="space-y-4">
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
                
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                  <div className="text-white font-semibold mb-2">Resumen PDF</div>
                  <div className="text-gray-400 text-sm mb-3">Genera un reporte visual del período</div>
                  <button 
                    disabled={!BackendStatus.online}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-2 rounded-xl transition-colors"
                  >
                    Generar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Comparativa de Períodos */}
          <Compative comparisonData={weeklychanges} selectedPeriod={selectedPeriod} BackendStatus={BackendStatus}/>

          {/* Datos por Categoría */}
          <Category reportsData={categories} BackendStatus={BackendStatus}/>
        </div>
      </div>
    </div>
  );
}