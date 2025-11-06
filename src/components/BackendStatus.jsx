// src/components/BackendStatus.jsx
import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api/api';

const BackendStatus = () => {
  const [status, setStatus] = useState({ 
    loading: true, 
    online: false, 
    data: null 
  });

  useEffect(() => {
    checkConnection();
    
    // Verificar cada 30 segundos
    const interval = setInterval(checkConnection, 30000);
    return () => clearInterval(interval);
  }, []);

  const checkConnection = async () => {
    try {
      const result = await apiService.checkBackend();
      setStatus({
        loading: false,
        online: result.status === 'online',
        data: result
      });
    } catch (error) {
      setStatus({
        loading: false,
        online: false,
        data: null
      });
    }
  };

  if (status.loading) {
    return (
      <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
          <span>Conectando con el backend...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${
      status.online 
        ? 'bg-green-500/20 border-green-500' 
        : 'bg-red-500/20 border-red-500'
    } border rounded-lg p-4 mb-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${
            status.online ? 'bg-green-500 animate-pulse' : 'bg-red-500'
          }`}></div>
          <div>
            <span className="font-medium">
              {status.online ? '✅ Conectado al backend' : '❌ Backend no disponible'}
            </span>
            <div className="text-sm opacity-75">
              {status.online 
                ? `📊 ${status.data.database?.total_records || 0} registros en BD`
                : 'Usando datos de demostración'
              }
            </div>
          </div>
        </div>
        
        <button
          onClick={checkConnection}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm transition-colors"
        >
          🔄 Reintentar
        </button>
      </div>
    </div>
  );
};

export default BackendStatus;