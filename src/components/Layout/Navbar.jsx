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
  const userMenuRef = useRef(null);
  const location = useLocation();

  // Rutas específicas para TrackerK
  const navRoutes = [
    { path: '/', label: 'Como usar', icon: HiHome },
    { path: '/realtime', label: 'Tiempo Real', icon: HiEye },
    { path: '/reports', label: 'Reportes', icon: HiChartBar },
    { path: '/analytics', label: 'Analíticas', icon: HiClock },
  ];
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900 border-b border-gray-700 shadow-lg sm">
      <div className="px-4 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
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