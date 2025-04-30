export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

export const getMonthName = (date) => {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

export const generateTimeSlots = () => {
  const timeSlots = [];
  for (let i = 8; i <= 17; i++) {
    timeSlots.push(`${i}:00`);
    if (i < 17) {
      timeSlots.push(`${i}:30`);
    }
  }
  return timeSlots;
};

export const generateHours = () => {
  return Array.from({ length: 12 }, (_, i) => i + 8);
};

export const getAppointmentsForDate = (appointments, date) => {
  return appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date);
    return (
      appointmentDate.getDate() === date.getDate() &&
      appointmentDate.getMonth() === date.getMonth() &&
      appointmentDate.getFullYear() === date.getFullYear()
    );
  });
};

export const formatDateForDisplay = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};