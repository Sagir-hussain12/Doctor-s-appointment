import React from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { formatDate, getAppointmentsForDate } from '../utils/dateUtils';
import { getAppointmentColor } from '../utils/appointmentHelpers';
import { PlusIcon } from 'lucide-react';

const CalendarGrid = ({ days }) => {
  const { 
    appointments, 
    openModal, 
    editCurrentAppointment,
    setSelectedDate,
    openViewModal,
    appointmentTypes
  } = useAppointments();

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    openModal(date);
  };

  const handleAppointmentClick = (e, appointment) => {
    e.stopPropagation();
    editCurrentAppointment(appointment);
  };

  return (
    <div className="grid grid-cols-7 gap-1 auto-rows-fr">
      {days.map((day, index) => {
        const dayAppointments = getAppointmentsForDate(appointments, day.date);
        
        return (
          <div
            key={index}
            className={`min-h-[100px] border rounded-md p-1 relative transition-all hover:border-indigo-300 dark:hover:border-indigo-500 ${
              day.isCurrentMonth
                ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                : 'bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 border-gray-100 dark:border-gray-800'
            } ${isToday(day.date) ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' : ''}`}
          >
            <div className="flex justify-between items-start">
              <span
                className={`text-sm font-medium ${
                  isToday(day.date)
                    ? 'bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center'
                    : ''
                }`}
              >
                {day.day}
              </span>
              <button
                onClick={() => handleDayClick(day.date)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <PlusIcon size={16} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            
            <div className="mt-1 space-y-1 max-h-[80px] overflow-y-auto no-scrollbar">
              {dayAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  onClick={(e) => handleAppointmentClick(e, appointment)}
                  className={`${getAppointmentColor(appointment.type, appointmentTypes)} px-2 py-1 rounded text-white text-xs cursor-pointer truncate transition-transform hover:scale-[1.02]`}
                >
                  {appointment.title}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;