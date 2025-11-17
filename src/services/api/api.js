// src/services/api.js
const API_BASE_URL = 'http://localhost:5000';  // Puerto 5000

// Datos de demostración para cuando el backend no esté disponible
const mockData = {
  realTime: {
    currentActivity: {
      app_name: "chrome.exe",
      window_title: "TrackerK Dashboard",
      start_time: new Date().toISOString()
    },
    dailyStats: {
      app_count: 8,
      total_entries: 45,
      total_time: "3.2h"
    },
    topApps: [
      { app_name: "chrome.exe", total_seconds: 7200 },
      { app_name: "code.exe", total_seconds: 5400 },
      { app_name: "teams.exe", total_seconds: 1800 }
    ]
  },
  reports: {
    appsTime: [
      { name: "chrome.exe", hours: 12.5 },
      { name: "code.exe", hours: 8.2 },
      { name: "teams.exe", hours: 4.1 },
      { name: "notepad.exe", hours: 2.3 },
      { name: "calculator.exe", hours: 0.5 }
    ],
    timeDistribution: [
      { category: "Productivity", value: 8.2 },
      { category: "Development", value: 6.5 },
      { category: "Communication", value: 4.1 },
      { category: "Browser", value: 5.0 }
    ],
    summary: {
      appsTracked: 15,
      daysTracked: 7,
      totalTime: "24.8h",
      productivityScore: 72
    }
  },
  analytics: {
    usageTrend: [
      { date: "2024-01-01", hours: 6.2 },
      { date: "2024-01-02", hours: 5.8 },
      { date: "2024-01-03", hours: 7.1 },
      { date: "2024-01-04", hours: 4.9 },
      { date: "2024-01-05", hours: 3.5 },
      { date: "2024-01-06", hours: 2.1 },
      { date: "2024-01-07", hours: 5.7 }
    ],
    timeframe: "7d"
  }
};

// Función fetch con timeout
const fetchWithTimeout = async (url, options = {}) => {
  const { timeout = 5000, ...fetchOptions } = options;
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
};

export const apiService = {
  // Verificar estado del backend
  async checkBackend() {
    try {
      const data = await fetchWithTimeout(`${API_BASE_URL}/api/status`);
      return { ...data, status: 'online', usingMockData: false };
    } catch (error) {
      console.warn('Backend no disponible, usando datos de demostración');
      return { 
        status: 'offline', 
        usingMockData: true,
        database: { exists: false },
        server: { timestamp: new Date().toISOString() }
      };
    }
  },

  // Obtener datos en tiempo real
  async getRealTimeData() {
    try {
      const data = await fetchWithTimeout(`${API_BASE_URL}/api/real-time`);      
      return data;
    } catch (error) {
      console.warn('No se puede conectar a la api');
      // return mockData.realTime;
    }
  },
  
  // Obtener reportes históricos
  async getReports(startDate = null, endDate = null, period = null) {
    try {
      const params = new URLSearchParams();
      
      if (startDate && endDate) {
        params.append('start_date', startDate);
        params.append('end_date', endDate);
      }
      
      if (period) {
        params.append('period', period);
      }
      
      const queryString = params.toString();
      const url = `${API_BASE_URL}/api/reports${queryString ? `?${queryString}` : ''}`;
      
      const data = await fetchWithTimeout(url);
      return data;
    } catch (error) {
      console.warn('No se puede conectar a la api');
      // return mockData.reports;
    }
  },
  async getComparison(period = "weekly", sessionPeriod = "daily") {
    try {
      const data = await fetchWithTimeout(
        `${API_BASE_URL}/api/comparison?period=${period}&session_period=${sessionPeriod}`
      );
      return data;
    } catch (error) {
      console.warn('No se puede conectar a la api');
    }
  },

  // Obtener análisis avanzados
  async getAnalytics(timeframe = '7d') {
    try {
      const data = await fetchWithTimeout(
        `${API_BASE_URL}/api/analytics?timeframe=${timeframe}`
      );
      console.log(data);
      
      return data;
    } catch (error) {
      console.warn('No se puede conectar a la api');
      // return mockData.analytics;
    }
  },

  // Obtener configuración
  async getSettings() {
    try {
      const data = await fetchWithTimeout(`${API_BASE_URL}/api/settings`);
      return data;
    } catch (error) {
      console.warn('Usando configuración por defecto');
      return {
        tracking_enabled: true,
        start_with_windows: false,
        productivity_threshold: 75
      };
    }
  }
};