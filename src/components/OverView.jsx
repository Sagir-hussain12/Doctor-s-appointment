import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  CalendarClock, 
  UserCheck, 
  AlertCircle
} from 'lucide-react';

const OverviewPage = () => {
  // Sample data for the dashboard
  const statsCards = [
    { title: 'Total Patients', value: '2,543', change: '+12%', icon: <UserCheck size={20} />, trend: 'up' },
    { title: 'Appointments Today', value: '18', change: '+3', icon: <CalendarClock size={20} />, trend: 'up' },
    { title: 'Average Wait Time', value: '14 min', change: '-2 min', icon: <Clock size={20} />, trend: 'down' },
    { title: 'Patient Satisfaction', value: '94%', change: '+2%', icon: <TrendingUp size={20} />, trend: 'up' },
  ];

  const recentAlerts = [
    { type: 'info', title: 'System Update', message: 'Scheduled maintenance tonight at 2:00 AM' },
    { type: 'warning', title: 'High Patient Volume', message: 'Expected high volume tomorrow morning' },
    { type: 'error', title: 'Lab Equipment', message: 'MRI scanner #2 requires maintenance' },
  ];

  // Upcoming appointments sample data
  const upcomingAppointments = [
    { 
      id: 1, 
      patient: 'Sarah Johnson', 
      time: '09:30 AM', 
      purpose: 'Annual Checkup',
      status: 'confirmed'
    },
    { 
      id: 2, 
      patient: 'Michael Chen', 
      time: '10:45 AM', 
      purpose: 'Follow-up',
      status: 'confirmed'
    },
    { 
      id: 3, 
      patient: 'Emma Wilson', 
      time: '11:15 AM', 
      purpose: 'Vaccination',
      status: 'pending'
    },
    { 
      id: 4, 
      patient: 'Robert Garcia', 
      time: '01:30 PM', 
      purpose: 'Blood Test Results',
      status: 'confirmed'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Dashboard Overview</h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsCards.map((card, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-start animate-fade-in-up">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 mr-4">
                {card.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{card.title}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{card.value}</p>
                <p className={`text-sm ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {card.change}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Appointments Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Today's Appointments</h3>
                  <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                    View All
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700/50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Patient
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Purpose
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {upcomingAppointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{appointment.patient}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{appointment.purpose}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            appointment.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                          }`}>
                            {appointment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Alerts Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Alerts</h3>
              </div>
              <div className="p-6 space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg flex items-start ${
                      alert.type === 'info' 
                        ? 'bg-blue-50 dark:bg-blue-900/20' 
                        : alert.type === 'warning'
                          ? 'bg-yellow-50 dark:bg-yellow-900/20'
                          : 'bg-red-50 dark:bg-red-900/20'
                    }`}
                  >
                    <div className={`flex-shrink-0 ${
                      alert.type === 'info' 
                        ? 'text-blue-500' 
                        : alert.type === 'warning'
                          ? 'text-yellow-500'
                          : 'text-red-500'
                    }`}>
                      <AlertCircle size={20} />
                    </div>
                    <div className="ml-3">
                      <h4 className={`text-sm font-medium ${
                        alert.type === 'info' 
                          ? 'text-blue-800 dark:text-blue-300' 
                          : alert.type === 'warning'
                            ? 'text-yellow-800 dark:text-yellow-300'
                            : 'text-red-800 dark:text-red-300'
                      }`}>
                        {alert.title}
                      </h4>
                      <p className={`mt-1 text-sm ${
                        alert.type === 'info' 
                          ? 'text-blue-700 dark:text-blue-400' 
                          : alert.type === 'warning'
                            ? 'text-yellow-700 dark:text-yellow-400'
                            : 'text-red-700 dark:text-red-400'
                      }`}>
                        {alert.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Chart */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Daily Activity</h3>
              <div className="flex items-center justify-center h-48 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <BarChart3 size={32} className="text-gray-400" />
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Activity Chart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage