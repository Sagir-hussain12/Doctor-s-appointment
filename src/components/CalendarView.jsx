import React, { useState, useEffect } from 'react';
import { useAppointments } from '../context/AppointmentContext';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import AppointmentModal from './AppointmentModal';
import AppointmentDetailsModal from './AppointmentDetailsModal';
import { getFirstDayOfMonth, getDaysInMonth } from '../utils/dateUtils';

const CalendarView = () => {
  const { 
    currentMonth, 
    setCurrentMonth, 
    isModalOpen, 
    closeModal, 
    isViewModalOpen,
    closeViewModal
  } = useAppointments();
  
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    generateCalendarDays();
  }, [currentMonth]);

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);
    
    const prevMonth = new Date(year, month - 1);
    const daysInPrevMonth = getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
    
    const days = [];
    
    // Add days from previous month
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push({
        day,
        month: month - 1,
        year,
        isCurrentMonth: false,
        date: new Date(year, month - 1, day)
      });
    }
    
    // Add days from current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        month,
        year,
        isCurrentMonth: true,
        date: new Date(year, month, day)
      });
    }
    
    // Add days from next month
    const remainingDays = 42 - days.length; // 6 rows of 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        month: month + 1,
        year,
        isCurrentMonth: false,
        date: new Date(year, month + 1, day)
      });
    }
    
    setCalendarDays(days);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = (specificDate) => {
    if (specificDate) {
      setCurrentMonth(new Date(specificDate.getFullYear(), specificDate.getMonth()));
    } else {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <CalendarHeader 
        currentMonth={currentMonth} 
        onPrevMonth={handlePrevMonth} 
        onNextMonth={handleNextMonth}
      />
      <CalendarGrid days={calendarDays} />
      
      {isModalOpen && <AppointmentModal onClose={closeModal} />}
      {isViewModalOpen && <AppointmentDetailsModal onClose={closeViewModal} />}
    </div>
  );
};

export default CalendarView;