import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { MoonIcon, SunIcon, Menu } from 'lucide-react';
import photo from '../assets/photo.png'; 

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-lg"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Mobile sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar />
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 z-30 bg-gray-600 bg-opacity-75 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Desktop sidebar - always visible on md and up */}
        <div className="hidden md:block md:flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 w-full overflow-hidden">
          <header className="bg-white dark:bg-gray-800 shadow-sm z-20">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Appointments</h1>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                  </button>
                  <div className="ml-3 relative">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800 dark:text-white">Dr. Pritha Kar</div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Family Medicine</div>
                      </div>
                      <img
                        className="h-8 w-8 rounded-full ml-2"
                        src={photo}
                        alt="User profile"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;