import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getMonthName } from '../utils/dateUtils';

const CalendarHeader = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {getMonthName(currentMonth)}
          </h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onPrevMonth}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={onNextMonth}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronRight size={20} />
          </button>
          <button
            onClick={() => {
              const today = new Date();
              onNextMonth(today);
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Today
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 border-b border-gray-200 dark:border-gray-700 pb-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center font-medium text-gray-500 dark:text-gray-400">
            <span className="md:hidden">{day.slice(0, 1)}</span>
            <span className="hidden md:inline">{day.slice(0, 3)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarHeader;