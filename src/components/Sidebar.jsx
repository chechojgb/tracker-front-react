// components/Sidebar.jsx
import React from 'react';
import {
  HiChartPie,
  HiShoppingBag,
  HiUsers,
  HiCog,
  HiDocument,
  HiChartBar,
  HiCollection
} from 'react-icons/hi';

const Sidebar = ({ isOpen = true }) => {
  if (!isOpen) return null;

  const menuItems = [
    { href: '/dashboard', icon: HiChartPie, label: 'Dashboard' },
    { href: '/products', icon: HiShoppingBag, label: 'Productos' },
    { href: '/customers', icon: HiUsers, label: 'Clientes' },
    { href: '/orders', icon: HiCollection, label: 'Pedidos' },
    { href: '/analytics', icon: HiChartBar, label: 'Analytics' },
    { href: '/documents', icon: HiDocument, label: 'Documentos' },
    { href: '/settings', icon: HiCog, label: 'Configuración' }
  ];

  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <item.icon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;