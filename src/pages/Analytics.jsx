import { 
  HiChartBar, 
} from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { apiService } from '../services/api/api';
import useBackendStatus from '../hooks/useBackendStatus';
import MostActivity from '../components/Analytics/MostActivity';
import Trends from '../components/Analytics/Trends';
import Sesiones from '../components/Analytics/Sessions';
import Category from '../components/Analytics/Category';
import PerDay from '../components/Analytics/PerDay';

export default function AnalyticsPage() {
  const BackendStatus = useBackendStatus();
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('7d');
  const [selectedPeriod, setSelectedPeriod] = useState("complete");
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  console.log(BackendStatus);
  
  
  const loadAnalytics = async () => {
    try {
      setLoading(true);

      let analyticsResponse;
      
      if (selectedPeriod === 'custom' && customStartDate && customEndDate) {
        analyticsResponse = await apiService.getAnalytics(customStartDate, customEndDate, null);
      } else {
        analyticsResponse = await apiService.getAnalytics(null, null, selectedPeriod);
      }
      
      setError(null);
      setAnalyticsData(analyticsResponse);
    } catch (err) {
      setError('No se puede conectar a la API');
      console.warn('Error cargando analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnalytics(timeframe);
  }, [selectedPeriod, customStartDate, customEndDate]);



  const dailyTimeChart = {
  series: [{
    name: 'Horas',
    data: analyticsData?.daily_distribution?.map(day => day.hours) || [0,0,0,0,0,0,0]
  }],
  options: {
    chart: { 
      type: 'bar', 
      background: 'transparent',
      foreColor: '#fff'
    },
    xaxis: { 
      categories: analyticsData?.daily_distribution?.map(day => day.day) || ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
      labels: { style: { colors: '#9CA3AF' } }
    },
    yaxis: { 
      labels: { 
        style: { colors: '#9CA3AF' }, 
        formatter: (val) => val + 'h' 
      } 
    },
    colors: ['#3B82F6'],
    grid: { borderColor: '#374151' },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '60%',
      }
    }
  }
};

  
  const categoryChart = {
    series: analyticsData?.categories?.filter(cat => cat.percentage > 0).map(cat => cat.percentage) || [100],
    options: {
      chart: { 
        type: 'donut', 
        background: 'transparent',
        events: {
          dataPointSelection: (event, chartContext, config) => {
            console.log('Selected category:', config.dataPointIndex);
          }
        }
      },
      labels: analyticsData?.categories?.filter(cat => cat.percentage > 0).map(cat => 
        `${cat.category} (${cat.percentage}%)`
      ) || ['No data available'],
      
      // Dynamic colors based on data length
      colors: analyticsData?.categories ? [
        '#3B82F6', '#06B6D4', '#10B981', '#F59E0B', '#8B5CF6',
        '#EF4444', '#84CC16', '#F97316', '#8B5CF6', '#EC4899'
      ].slice(0, analyticsData.categories.length) : ['#6B7280'],
      
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: { 
                show: true, 
                color: '#9CA3AF',
                fontSize: '14px'
              },
              value: { 
                show: true, 
                color: '#F9FAFB', 
                fontSize: '16px',
                fontWeight: 600,
                formatter: (val) => `${val}%`
              },
              total: {
                show: !analyticsData?.categories || analyticsData.categories.length === 0,
                label: 'Total',
                color: '#9CA3AF',
                formatter: () => {
                  const total = analyticsData?.categories?.reduce((sum, cat) => sum + cat.percentage, 0) || 100;
                  return `${total}%`;
                }
              }
            }
          }
        }
      },
      dataLabels: { enabled: false },
      legend: { 
        position: 'bottom', 
        labels: { colors: '#9CA3AF' },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
      },
      tooltip: { 
        theme: 'dark',
        y: {
          formatter: (value) => `${value}%`
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  };

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
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full translate-y-20 -translate-x-20 blur-xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <HiChartBar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Analíticas Avanzadas</h1>
                <p className="text-gray-400 mt-1">Visualiza patrones y tendencias en tu actividad digital</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className="flex flex-col">
                {/* <HiCalendar className="w-5 h-5 text-blue-400" /> */}
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
          
          {/* Gráfico de Tiempo por Día */}
          <PerDay BackendStatus={BackendStatus} dailyTimeChart={dailyTimeChart}/>

          {/* Distribución por Categorías */}
          <Category BackendStatus={BackendStatus} categoryChart={categoryChart}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Sesiones y Concentración */}
          <Sesiones BackendStatus={BackendStatus}/>

          {/* Tendencias y Comparativas */}
          <Trends BackendStatus={BackendStatus}/>
        </div>

        {/* Sección Adicional - Horarios de Mayor Actividad */}
        <MostActivity BackendStatus={BackendStatus}/>
      </div>
    </div>
  );
}