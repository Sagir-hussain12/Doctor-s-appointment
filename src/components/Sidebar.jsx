import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  ClipboardList, 
  MessageSquare, 
  Settings, 
  LogOut, 
  AlertCircle 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { name: 'Overview', icon: <LayoutDashboard size={20} />, path: '/overview' },
    { name: 'Appointments', icon: <Calendar size={20} />, path: '/' },
    { name: 'Doctors', icon: <Users size={20} />, path: '/doctors' },
    { name: 'Health Records', icon: <ClipboardList size={20} />},
    { name: 'Messages', icon: <MessageSquare size={20} />, badge: 3 },
  ];

  const accountItems = [
    { name: 'Settings', icon: <Settings size={20} /> },
    { name: 'Logout', icon: <LogOut size={20} /> },
  ];

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center h-16 flex-shrink-0 px-4 bg-indigo-700 dark:bg-indigo-800">
        <div className="flex items-center">
          <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 12.5C19.5 16.6421 16.1421 20 12 20C7.85786 20 4.5 16.6421 4.5 12.5C4.5 8.35786 7.85786 5 12 5C16.1421 5 19.5 8.35786 19.5 12.5Z" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15.5 11.5H8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <Link to="/" className="ml-2 text-white text-lg font-semibold">MediBook</Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                currentPath === item.path
                  ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span className={`mr-3 ${currentPath === item.path ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white'}`}>
                {item.icon}
              </span>
              {item.name}
              {item.badge && (
                <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-red-500 text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-5">
          <div className="pt-4 pb-3">
            <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Account
            </h3>
            <nav className="mt-2 space-y-1 px-2">
              {accountItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                >
                  <span className="mr-3 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white">
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="p-4 mt-auto">
          <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Emergency Hotline</h3>
                <div className="mt-1 text-sm text-red-700 dark:text-red-300">
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;