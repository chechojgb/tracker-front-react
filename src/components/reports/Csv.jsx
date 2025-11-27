import { useState } from 'react';
import { HiDocumentDownload, HiExclamationCircle } from 'react-icons/hi';
import { apiService } from '../../services/api/api';

export default function CsvReports({ BackendStatus, customStartDate, customEndDate, selectedPeriod }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const handleGenerateCSV = async () => {
        if (!BackendStatus.online) return;

        setIsLoading(true);
        setError(null);

        try {
            // Obtener datos del reporte
            let reportData;
            
            if (selectedPeriod === 'custom' && customStartDate && customEndDate) {
                reportData = await apiService.getReportsFormat(customStartDate, customEndDate, null);
            } else {
                reportData = await apiService.getReportsFormat(null, null, selectedPeriod);
            }
            
            if (!reportData || !reportData.success) {
                throw new Error(reportData?.error || 'No se pudieron obtener los datos del reporte');
            }

            // Generar y descargar CSV
            await generateCSVReport(reportData.data);
            
        } catch (err) {
            console.error('Error generando CSV:', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const generateCSVReport = (reportData) => {
        try {
            // Crear contenido CSV
            const csvContent = generateCSVContent(reportData);
            
            // Crear blob y descargar
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            
            // Nombre del archivo con fecha
            const timestamp = new Date().toISOString().split('T')[0];
            const period = selectedPeriod || 'completo';
            link.href = url;
            link.setAttribute('download', `trackerk-reporte-${period}-${timestamp}.csv`);
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
        } catch (err) {
            throw new Error(`Error creando CSV: ${err.message}`);
        }
    };

    const generateCSVContent = (reportData) => {
        const lines = [];
        
        // Encabezado con metadatos
        lines.push('# Reporte TrackerK - Datos de Uso');
        lines.push(`# Período: ${selectedPeriod || 'completo'}`);
        lines.push(`# Fecha de generación: ${new Date().toLocaleDateString()}`);
        lines.push(`# Total horas: ${reportData.summary?.totalHours || 0}`);
        lines.push('');
        
        // Sección: Aplicaciones más usadas
        lines.push('APLICACIONES MÁS USADAS');
        lines.push('Nombre,Horas,Porcentaje,Sesiones');
        
        if (reportData.appsTime && reportData.appsTime.length > 0) {
            reportData.appsTime.forEach(app => {
                lines.push(`"${app.name}",${app.hours},${app.percentage}%,${app.sessions}`);
            });
        } else {
            lines.push('No hay datos de aplicaciones');
        }
        
        lines.push('');
        
        // Sección: Sitios web más visitados
        lines.push('SITIOS WEB MÁS VISITADOS');
        lines.push('Nombre,Horas,Porcentaje,Visitas');
        
        if (reportData.sitesTime && reportData.sitesTime.length > 0) {
            reportData.sitesTime.forEach(site => {
                lines.push(`"${site.name}",${site.hours},${site.percentage}%,${site.visits}`);
            });
        } else {
            lines.push('No hay datos de sitios web');
        }
        
        lines.push('');
        
        // Sección: Resumen general
        lines.push('RESUMEN GENERAL');
        lines.push('Métrica,Valor');
        lines.push(`Total Horas,${reportData.summary?.totalHours || 0}`);
        lines.push(`Horas Aplicaciones,${reportData.summary?.appsHours || 0}`);
        lines.push(`Horas Sitios Web,${reportData.summary?.sitesHours || 0}`);
        lines.push(`Aplicaciones Únicas,${reportData.summary?.uniqueApps || 0}`);
        lines.push(`Sitios Web Únicos,${reportData.summary?.uniqueSites || 0}`);
        lines.push(`Total Sitios Web,${reportData.summary?.totalWebsites || 0}`);
        
        return lines.join('\n');
    };

    // Versión alternativa con formato CSV más estándar
    const generateStandardCSV = (reportData) => {
        const lines = [];
        
        // Encabezados principales
        lines.push('Tipo,Nombre,Horas,Porcentaje,Registros');
        
        // Aplicaciones
        if (reportData.appsTime && reportData.appsTime.length > 0) {
            reportData.appsTime.forEach(app => {
                lines.push(`Aplicacion,"${app.name}",${app.hours},${app.percentage},${app.sessions}`);
            });
        }
        
        // Sitios web
        if (reportData.sitesTime && reportData.sitesTime.length > 0) {
            reportData.sitesTime.forEach(site => {
                lines.push(`SitioWeb,"${site.name}",${site.hours},${site.percentage},${site.visits}`);
            });
        }
        
        return lines.join('\n');
    };

    const getButtonText = () => {
        if (!BackendStatus.online) return 'API no disponible';
        if (isLoading) return 'Generando...';
        return 'Descargar CSV Completo';
    };

    const getReportDescription = () => {
        if (selectedPeriod === 'custom' && customStartDate && customEndDate) {
            return `CSV personalizado: ${customStartDate} a ${customEndDate}`;
        } else {
            return `CSV del período: ${selectedPeriod || 'completo'}`;
        }
    };

    return (
        <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="text-white font-semibold mb-2 flex items-center">
                <HiDocumentDownload className="w-5 h-5 mr-2 text-green-400" />
                Datos en CSV
            </div>
            
            <div className="text-gray-400 text-sm mb-3">
                {getReportDescription()}
            </div>
            
            {error && (
                <div className="mb-3 p-2 bg-red-500/10 border border-red-500/50 rounded-lg">
                    <p className="text-red-400 text-sm flex items-center">
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {error}
                    </p>
                </div>
            )}

            <button 
                disabled={!BackendStatus.online || isLoading}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-2 rounded-xl transition-colors flex items-center justify-center"
                onClick={handleGenerateCSV}
            >
                {isLoading ? (
                    <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Generando...
                    </>
                ) : (
                    <>
                        <HiDocumentDownload className="w-4 h-4 mr-2" />
                        {getButtonText()}
                    </>
                )}
            </button>

            {/* Información del CSV */}
            <div className="mt-3 text-xs text-gray-500 space-y-1">
                <div>• Top aplicaciones con horas y porcentajes</div>
                <div>• Top sitios web con horas y porcentajes</div>
                <div>• Resumen general de métricas</div>
                <div>• Formato compatible con Excel</div>
                {!BackendStatus.online && (
                    <div className="text-yellow-500 mt-2">
                        ⚠️ Conecta con el backend para exportar datos
                    </div>
                )}
            </div>
        </div>
    );
}