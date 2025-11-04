import React from 'react';
import { 
  HiHeart, 
  HiCog, 
  HiShieldCheck, 
  HiInformationCircle,
  HiCode,
  HiServer
} from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal del footer */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logo y descripción */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <span className="text-white font-bold text-sm">TK</span>
                </div>
                <span className="text-xl font-bold text-white">TrackerOS</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 max-w-md">
                Sistema de monitorización de actividad profesional. 
                Analiza tu productividad y optimiza tu tiempo de trabajo.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <HiServer className="w-3 h-3" />
                  <span>Sistema Activo</span>
                </div>
                <div className="flex items-center space-x-1">
                  <HiShieldCheck className="w-3 h-3" />
                  <span>Datos Locales</span>
                </div>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Navegación
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/realtime" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Tiempo Real
                  </a>
                </li>
                <li>
                  <a href="/reports" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Reportes
                  </a>
                </li>
                <li>
                  <a href="/analytics" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Analíticas
                  </a>
                </li>
              </ul>
            </div>

            {/* Información del sistema */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Sistema
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/settings" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center space-x-2">
                    <HiCog className="w-3 h-3" />
                    <span>Configuración</span>
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center space-x-2">
                    <HiShieldCheck className="w-3 h-3" />
                    <span>Privacidad</span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center space-x-2">
                    <HiInformationCircle className="w-3 h-3" />
                    <span>Acerca de</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-800 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {currentYear} TrackerOS. Todos los derechos reservados.
            </div>

            {/* Información de versión y estado */}
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Monitoreo Activo</span>
              </div>
              <span>v1.0.0</span>
              <div className="flex items-center space-x-1">
                <HiCode className="w-3 h-3" />
                <span>Modo Profesional</span>
              </div>
            </div>

            {/* Hecho con amor */}
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <span>Hecho con</span>
              <HiHeart className="w-3 h-3 text-red-500" />
              <span>para productividad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;