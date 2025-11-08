import ActivityMetrics from '../components/realTime/ActivityMetric';
import {MostUsedApp, MostUsedPages} from '../components/realTime/MostUse';
import React, { useState, useEffect, useRef } from 'react';
import { 
  HiPlay, 
  HiPause, 
  HiRefresh, 
  HiClock,
  HiDesktopComputer,
  HiGlobe,
  HiChartBar,
  HiTrendingUp,
  HiTrendingDown,
  HiEye,
  HiShieldCheck,
  HiChip,
  HiLightningBolt,
  HiServer,
  HiDatabase
} from 'react-icons/hi';
import { apiService } from '../services/api/api';
import BackendStatus from '../components/BackendStatus';

const RealTime = () => {
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [activeData, setActiveData] = useState([]);
  const [realTimeData, setRealTimeData] = useState(null);
  console.log(realTimeData);
  
 
  
  const [loading, setLoading] = useState(true);
  const activityEndRef = useRef(null);

  const formatDuration = (seconds) => {
    if (!seconds) return '0m';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };
  
  // Cargar datos reales
  useEffect(() => {
    loadRealTimeData();
    
    if (isMonitoring) {
      const interval = setInterval(loadRealTimeData, 5000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring]);

  const loadRealTimeData = async () => {
    try {
      const data = await apiService.getRealTimeData();
      setRealTimeData(data);
      
      // Simular actividad en tiempo real basada en datos reales
      if (data.currentActivity?.app_name && data.currentActivity.app_name !== 'No activity') {
        const newActivity = {
          id: Date.now() + Math.random(),
          type: 'app',
          name: data.currentActivity.app_name.replace('.exe', ''),
          timestamp: new Date().toLocaleTimeString(),
          duration: 'Activo',
          intensity: Math.random()
        };

        setActiveData(prev => {
          const updated = [...prev, newActivity];
          return updated.slice(-8);
        });
      }
      
      if (data.currentWebActivity?.site_name && data.currentWebActivity.site_name !== 'No web activity') {
        const newActivity = {
          id: Date.now() + Math.random() + 1,
          type: 'website',
          name: data.currentWebActivity.site_name,
          timestamp: new Date().toLocaleTimeString(),
          duration: 'Navegando',
          intensity: Math.random()
        };

        setActiveData(prev => {
          const updated = [...prev, newActivity];
          return updated.slice(-8);
        });
      }
    } catch (error) {
      console.error('Error loading real-time data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Datos de aplicaciones desde la API
  const applications = realTimeData?.topApps?.map(app => ({
    name: app.app_name.replace('.exe', ''),
    category: 'application',
    usage: formatDuration(app.total_seconds)
  })) || [];

  // Datos de sitios web desde la API
  const websites = realTimeData?.topSites?.map(site => ({
    name: site.site_name,
    category: 'website',
    time: formatDuration(site.total_seconds)
  })) || [];

  // Estadísticas en vivo basadas en datos reales
  const [liveStats, setLiveStats] = useState({
    currentSession: '00:00:00',
    productivity: 75,
    focusScore: 82,
    appsActive: 0,
    bandwidth: '1.2 MB/s',
    cpuUsage: 15,
    memoryUsage: 420
  });

  // Actualizar estadísticas cuando cambien los datos reales
  useEffect(() => {
    if (realTimeData) {
      setLiveStats(prev => ({
        ...prev,
        appsActive: realTimeData.dailyStats?.app_count || 0,
        productivity: Math.max(60, Math.min(95, 
          (realTimeData.dailyStats?.app_count || 0) * 5 + 50
        )),
        focusScore: Math.max(70, Math.min(98, 
          (realTimeData.topApps?.length || 0) * 8 + 60
        ))
      }));
    }
  }, [realTimeData]);


  const ProductivityGauge = ({ value, label, color }) => (
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{value}%</div>
          <div className="text-xs text-white/80">{label}</div>
        </div>
      </div>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
        <circle 
          cx="50" cy="50" r="40" 
          stroke={color} 
          strokeWidth="8" 
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${value * 2.51} 251`}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
    </div>
  );


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
    <div className="min-h-screen bg-gray-900 pb-12">
      
      
      {/* Header Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BackendStatus />
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Monitor en{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Tiempo Real
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Visualización dinámica de tu actividad digital. Cada movimiento, cada patrón, en vivo.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-6 lg:mt-0">
              <div className={`flex items-center space-x-3 px-4 py-3 rounded-2xl backdrop-blur-sm border ${
                isMonitoring 
                  ? 'bg-green-500/10 text-green-400 border-green-500/30' 
                  : 'bg-red-500/10 text-red-400 border-red-500/30'
              }`}>
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  isMonitoring ? 'bg-green-400' : 'bg-red-400'
                }`}></div>
                <span className="font-semibold">
                  {isMonitoring ? 'TRANSMITIENDO' : 'EN PAUSA'}
                </span>
              </div>
              
              <button
                onClick={() => setIsMonitoring(!isMonitoring)}
                className={`p-3 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-110 ${
                  isMonitoring
                    ? 'bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30'
                    : 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30'
                }`}
              >
                {isMonitoring ? <HiPause className="w-6 h-6" /> : <HiPlay className="w-6 h-6" />}
              </button>

              <button
                onClick={loadRealTimeData}
                className="p-3 rounded-2xl backdrop-blur-sm border border-blue-500/30 bg-blue-500/20 text-blue-400 transition-all duration-300 transform hover:scale-110 hover:bg-blue-500/30"
              >
                <HiRefresh className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { 
              icon: HiClock, 
              label: 'Tiempo Apps', 
              value:  realTimeData?.dailyStats?.total_app_time || '0h', 
              color: 'text-blue-400' 
            },
            { 
              icon: HiTrendingUp, 
              label: 'Productividad', 
              value: `${liveStats.productivity}%`, 
              color: 'text-green-400' 
            },
            { 
              icon: HiLightningBolt, 
              label: 'Focus', 
              value: `${liveStats.focusScore}%`, 
              color: 'text-yellow-400' 
            },
            { 
              icon: HiDesktopComputer, 
              label: 'Apps Activas', 
              value: realTimeData?.dailyStats?.app_count || 0, 
              color: 'text-purple-400' 
            },
            { 
              icon: HiGlobe, 
              label: 'Sitios Web', 
              value: realTimeData?.dailyStats?.site_count || 0, 
              color: 'text-orange-400' 
            },
            { 
              icon: HiDatabase, 
              label: 'Total Tiempo', 
              value: `${(parseFloat(realTimeData?.dailyStats?.total_app_time || 0) + parseFloat(realTimeData?.dailyStats?.total_web_time || 0)).toFixed(1)}h`, 
              color: 'text-pink-400' 
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {/* Actividad en Tiempo Real */}
            <div className="xl:col-span-2">
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-6 shadow-2xl overflow-hidden">
                {/* Elementos decorativos de fondo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full translate-y-20 -translate-x-20 blur-xl"></div>
                
                {/* Patrón de grid sutil */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                
                {/* Header con mejor diseño */}
                <div className="relative flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <HiEye className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-4 border-gray-900">
                        <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white flex items-center">
                        Stream de Actividad
                      </h2>
                      <p className="text-gray-400 text-sm flex items-center mt-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        Monitoreo en tiempo real activo
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {/* Indicador de estado */}
                    <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">En vivo</span>
                    </div>
                    
                    <button
                      onClick={() => setActiveData([])}
                      className="flex items-center space-x-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10 backdrop-blur-sm"
                    >
                      <HiRefresh className="w-4 h-4" />
                      <span className="font-medium">Limpiar</span>
                    </button>
                  </div>
                </div>
                
                {/* Separador decorativo */}
                <div className="relative mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                
                {/* Contenedor del componente con mejor espaciado */}
                <div className="relative">
                  <ActivityMetrics realTimeData={realTimeData}/>
                </div>
                
                {/* Footer con información adicional */}
                <div className="relative mt-8 pt-6 border-t border-gray-700/50">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <HiServer className="w-4 h-4 mr-1" />
                        Servidor: <span className="text-green-400 ml-1">Online</span>
                      </span>
                      <span>•</span>
                      <span>Actualización cada 30s</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HiClock className="w-4 h-4" />
                      <span>{new Date().toLocaleTimeString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Métricas de Rendimiento */}
          <div className="xl:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center mb-6">
                <HiChartBar className="w-6 h-6 mr-3 text-green-400" />
                Rendimiento
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <ProductivityGauge 
                    value={liveStats.productivity} 
                    label="Productivo" 
                    color="#10B981"
                  />
                </div>
                <div className="text-center">
                  <ProductivityGauge 
                    value={liveStats.focusScore} 
                    label="Concentrado" 
                    color="#F59E0B"
                  />
                </div>
              </div>

              {/* Info adicional */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Apps Monitoreadas</span>
                  <span className="text-white font-semibold">{realTimeData?.dailyStats?.app_count}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Sitios Rastreados</span>
                  <span className="text-white font-semibold">{realTimeData?.dailyStats?.site_count}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Última Actualización</span>
                  <span className="text-white font-semibold">{new Date().toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aplicaciones y Sitios Web */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Aplicaciones */}
          <div className="">
            <MostUsedApp applications={applications}/>
          </div>
          {/* Sitios Web */}
          <div>
            <MostUsedPages websites={websites}/>
          </div>
        </div>

        {/* Footer de Seguridad */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10 p-6">
          <div className="flex items-center space-x-4">
            <HiShieldCheck className="w-8 h-8 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white">Procesamiento 100% Local</h3>
              <p className="text-gray-300">
                Tus datos nunca abandonan tu dispositivo. Todo el análisis ocurre localmente 
                con tecnología de encriptación avanzada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTime;