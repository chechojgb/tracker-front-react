import React, { useState, useRef, useEffect } from 'react';
import { 
  HiMenu, 
  HiCog, 
  HiUser, 
  HiLogout,
  HiHome,
  HiChartBar,
  HiClock,
  HiEye
} from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onToggleSidebar }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const location = useLocation();

  // Rutas específicas para TrackerK
  const navRoutes = [
    { path: '/', label: 'Dashboard', icon: HiHome },
    { path: '/realtime', label: 'Tiempo Real', icon: HiEye },
    { path: '/reports', label: 'Reportes', icon: HiChartBar },
    { path: '/analytics', label: 'Analíticas', icon: HiClock },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900 border-b border-gray-700 shadow-lg sm ">
      <div className="px-4 py-3 ">
        <div className="flex items-center justify-between lg:px-20">
          <div className="flex items-center space-x-4 ">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
                <span className="text-white font-bold text-sm">TK</span>
              </div>
              <span className="self-center text-xl font-bold text-white whitespace-nowrap">
                TrackerOS
              </span>
            </Link>

            {/* Navegación desktop - Minimalista */}
            <div className="hidden lg:flex items-center space-x-1 ml-6">
              {navRoutes.map((route) => {
                const Icon = route.icon;
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActiveRoute(route.path) 
                        ? 'bg-gray-800 text-white shadow-inner' 
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{route.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Información del sistema y usuario */}
          <div className="flex items-center space-x-4">
            {/* Menú de usuario minimalista */}
            <div className="flex items-center relative" ref={userMenuRef}>
              <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 p-1.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AD</span>
                </div>
              </button>

              {/* Dropdown Menu - Simplificado */}
              {userMenuOpen && (
                <div className="absolute right-0 top-12 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-700">
                    <div className="font-medium text-white">Admin</div>
                    <div className="text-sm text-gray-400 truncate">Sistema TrackerK</div>
                  </div>
                  
                  <div className="py-2">
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <HiCog className="w-4 h-4 mr-3" />
                      Configuración
                    </Link>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-2">
                    <button
                      onClick={() => {
                        // Aquí iría la lógica de logout
                        setUserMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                    >
                      <HiLogout className="w-4 h-4 mr-3" />
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navegación móvil simplificada */}
        <div className="lg:hidden mt-3">
          <div className="flex items-center space-x-1 overflow-x-auto pb-2">
            {navRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActiveRoute(route.path) 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{route.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;