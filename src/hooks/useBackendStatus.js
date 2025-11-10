// src/hooks/useBackendStatus.js
import { useState, useEffect } from 'react';
import { apiService } from '../services/api/api';

const useBackendStatus = () => {
  const [status, setStatus] = useState({ 
    loading: true, 
    online: false, 
    data: null 
  });

  useEffect(() => {
    checkConnection();
    
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

  return status; // ✅ Ahora sí puedes devolver solo el valor
};

export default useBackendStatus;