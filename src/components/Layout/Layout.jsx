// components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer';

const Layout = ({ children, showSidebar = true }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="flex pt-16">
        {/* {showSidebar && <Sidebar />} */}
        
        <main className='ml-0 w-full transition-all duration-300'>
          <div >
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;