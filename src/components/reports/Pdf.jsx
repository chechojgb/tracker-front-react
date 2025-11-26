import { useState } from 'react';
import { HiDocumentDownload, HiExclamationCircle } from 'react-icons/hi';
import { apiService } from '../../services/api/api';

export default function PdfReports({ BackendStatus, customStartDate, customEndDate, selectedPeriod }) {
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGeneratePDF = async () => {
        if (!BackendStatus.online) return;

        setIsLoading(true);
        setError(null);

        try {
            // Usar tu apiService para obtener los datos
            let reportData;
            
            if (selectedPeriod === 'custom' && customStartDate && customEndDate) {
                reportData = await apiService.getReportsFormat(customStartDate, customEndDate, null);
            } else {
                reportData = await apiService.getReportsFormat(null, null, selectedPeriod);
            }
            
            if (!reportData || !reportData.success) {
                throw new Error(reportData?.error || 'No se pudieron obtener los datos del reporte');
            }

            // Generar PDF con los datos obtenidos
            console.log(reportData);
            
            await generatePDFReport(reportData.data);
            
        } catch (err) {
            console.error('Error generando PDF:', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const generatePDFReport = async (reportData) => {
        try {
            // Opción 1: Generar PDF en el backend (si tienes el endpoint)
            const pdfResponse = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    reportData,
                    metadata: {
                        title: `Reporte de Uso - ${selectedPeriod || 'Completo'}`,
                        generatedAt: new Date().toISOString(),
                        dateRange: customStartDate && customEndDate 
                            ? `${customStartDate} a ${customEndDate}`
                            : `Período: ${selectedPeriod || 'completo'}`
                    }
                })
            });

            if (!pdfResponse.ok) {
                throw new Error('Error generando el PDF en el servidor');
            }

            // Descargar el PDF
            const blob = await pdfResponse.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `reporte-uso-${selectedPeriod || 'completo'}-${new Date().toISOString().split('T')[0]}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);

        } catch (err) {
            // Opción 2: Fallback - generar PDF en el frontend
            await generateFrontendPDF(reportData);
        }
    };

    const generateFrontendPDF = async (reportData) => {
        try {
            // Instalar: npm install jspdf
            const { jsPDF } = await import('jspdf');
            
            const pdf = new jsPDF();
            
            // Configuración del PDF
            pdf.setFontSize(20);
            pdf.text('Reporte de Uso - Análisis de Tiempo', 20, 20);
            
            pdf.setFontSize(12);
            pdf.text(`Fecha de generación: ${new Date().toLocaleDateString()}`, 20, 35);
            pdf.text(`Período: ${selectedPeriod || 'Completo'}`, 20, 45);
            
            if (customStartDate && customEndDate) {
                pdf.text(`Rango: ${customStartDate} a ${customEndDate}`, 20, 55);
            }
            
            let yPosition = 75;

            // Resumen general
            pdf.setFontSize(16);
            pdf.text('RESUMEN GENERAL', 20, yPosition);
            yPosition += 15;
            
            pdf.setFontSize(12);
            pdf.text(`• Total de horas: ${reportData.summary?.totalHours || 0}h`, 25, yPosition);
            yPosition += 10;
            pdf.text(`• Aplicaciones únicas: ${reportData.summary?.uniqueApps || 0}`, 25, yPosition);
            yPosition += 10;
            pdf.text(`• Sitios web únicos: ${reportData.summary?.totalWebsites || 0}`, 25, yPosition);
            yPosition += 20;

            // Aplicaciones más usadas
            pdf.setFontSize(16);
            pdf.text('APLICACIONES MÁS USADAS', 20, yPosition);
            yPosition += 15;
            
            pdf.setFontSize(12);
            (reportData.appsTime || []).forEach((app, index) => {
                if (yPosition > 250) {
                    pdf.addPage();
                    yPosition = 20;
                }
                pdf.text(`${index + 1}. ${app.name}: ${app.hours}h (${app.percentage}%) - ${app.sessions} sesiones`, 25, yPosition);
                yPosition += 10;
            });
            
            yPosition += 10;

            // Sitios web más visitados
            pdf.setFontSize(16);
            pdf.text('SITIOS WEB MÁS VISITADOS', 20, yPosition);
            yPosition += 15;
            
            pdf.setFontSize(12);
            (reportData.sitesTime || []).forEach((site, index) => {
                if (yPosition > 250) {
                    pdf.addPage();
                    yPosition = 20;
                }
                pdf.text(`${index + 1}. ${site.name}: ${site.hours}h (${site.percentage}%) - ${site.visits} visitas`, 25, yPosition);
                yPosition += 10;
            });

            // Guardar el PDF
            pdf.save(`reporte-uso-${selectedPeriod || 'completo'}-${Date.now()}.pdf`);
            
        } catch (err) {
            throw new Error(`Error creando PDF: ${err.message}`);
        }
    };

    const getButtonText = () => {
        if (!BackendStatus.online) return 'API no disponible';
        if (isLoading) return 'Generando...';
        return 'Generar PDF';
    };

    const getReportDescription = () => {
        if (selectedPeriod === 'custom' && customStartDate && customEndDate) {
            return `Reporte personalizado: ${customStartDate} a ${customEndDate}`;
        } else {
            return `Reporte del período: ${selectedPeriod || 'completo'}`;
        }
    };

    return (
        <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="text-white font-semibold mb-2 flex items-center">
                <HiDocumentDownload className="w-5 h-5 mr-2" />
                Resumen PDF
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
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-2 rounded-xl transition-colors flex items-center justify-center"
                onClick={handleGeneratePDF}
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

            {/* Información del reporte */}
            <div className="mt-3 text-xs text-gray-500 space-y-1">
                <div>• Top 10 aplicaciones</div>
                <div>• Top 10 sitios web</div>
                <div>• Estadísticas generales</div>
                {!BackendStatus.online && (
                    <div className="text-yellow-500 mt-2">
                        ⚠️ Conecta con el backend para generar reportes
                    </div>
                )}
            </div>
        </div>
    );
}