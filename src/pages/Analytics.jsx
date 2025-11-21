import { 
  HiChartBar, 
  HiChartPie, 
  HiTrendingUp,
  HiTrendingDown,
  HiCalendar,
  HiFilter,
  HiClock,
  HiDesktopComputer,
  HiGlobe,
  HiCollection
} from 'react-icons/hi';
import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import { apiService } from '../services/api/api';

export default function AnalyticsPage() {

  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('7d');
  const [selectedPeriod, setSelectedPeriod] = useState("complete");
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  console.log(analyticsData);
  
  
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
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiChartBar className="w-5 h-5 mr-3 text-blue-400" />
                Tiempo por Día de la Semana
              </h3>
              
              <div className="bg-gray-800/20 rounded-2xl border border-gray-700 p-4">
                <Chart
                  options={dailyTimeChart.options}
                  series={dailyTimeChart.series}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
          </div>

          {/* Distribución por Categorías */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Sesiones y Concentración */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiCollection className="w-5 h-5 mr-3 text-green-400" />
                Patrones de Sesión
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                    <div className="text-gray-400 text-sm mb-1">Sesiones Totales</div>
                    <div className="text-2xl font-bold text-white">89</div>
                    <div className="text-green-400 text-sm flex items-center mt-1">
                      <HiTrendingUp className="w-3 h-3 mr-1" />
                      +12%
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                    <div className="text-gray-400 text-sm mb-1">Duración Promedio</div>
                    <div className="text-2xl font-bold text-white">31m</div>
                    <div className="text-blue-400 text-sm">+5m vs anterior</div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-2">Distribución de Sesiones</div>
                  <div className="space-y-2">
                    {[
                      { range: '0-15 min', count: 12, percent: 13 },
                      { range: '15-30 min', count: 28, percent: 31 },
                      { range: '30-60 min', count: 35, percent: 39 },
                      { range: '60+ min', count: 14, percent: 16 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">{item.range}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                              style={{ width: `${item.percent}%` }}
                            ></div>
                          </div>
                          <span className="text-white text-sm font-medium w-8">{item.percent}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tendencias y Comparativas */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiTrendingUp className="w-5 h-5 mr-3 text-yellow-400" />
                Tendencias del Período
              </h3>
              
              <div className="space-y-4">
                {[
                  { 
                    metric: 'Horas Productivas', 
                    current: '32.5h', 
                    previous: '28.1h', 
                    change: '+15.7%',
                    trend: 'up'
                  },
                  { 
                    metric: 'Apps Únicas/Día', 
                    current: '8.4', 
                    previous: '7.2', 
                    change: '+16.7%',
                    trend: 'up'
                  },
                  { 
                    metric: 'Sitios Únicos/Día', 
                    current: '22.3', 
                    previous: '19.8', 
                    change: '+12.6%',
                    trend: 'up'
                  },
                  { 
                    metric: 'Tiempo por Sesión', 
                    current: '31m', 
                    previous: '29m', 
                    change: '+6.9%',
                    trend: 'up'
                  },
                  { 
                    metric: 'Sesiones Cortas (<5min)', 
                    current: '5.2', 
                    previous: '6.8', 
                    change: '-23.5%',
                    trend: 'down'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      {item.trend === 'up' ? (
                        <HiTrendingUp className="w-4 h-4 text-green-400" />
                      ) : (
                        <HiTrendingDown className="w-4 h-4 text-red-400" />
                      )}
                      <span className="text-gray-300">{item.metric}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">{item.current}</div>
                      <div className={`text-sm ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {item.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700/50">
                <div className="text-center text-gray-400 text-sm">
                  Comparado con el período anterior
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Adicional - Horarios de Mayor Actividad */}
        <div className="mt-6">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <HiClock className="w-5 h-5 mr-3 text-purple-400" />
                Horarios de Mayor Actividad
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
                  <div key={index} className="text-center">
                    <div className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                      item.peak 
                        ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30' 
                        : 'bg-gray-800/50 border-gray-700'
                    }`}>
                      <div className="text-white font-semibold mb-1">{item.period}</div>
                      <div className="text-gray-400 text-sm mb-3">{item.hours}</div>
                      <div className="text-2xl font-bold text-white mb-2">{item.activity}%</div>
                      {item.peak && (
                        <div className="text-xs bg-purple-500/30 text-purple-300 px-2 py-1 rounded-full">
                          PICO
                        </div>
                      )}
                    </div>
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