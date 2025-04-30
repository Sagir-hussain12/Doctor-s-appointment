export const generateAppointmentTypes = () => {
  return [
    { id: 'routine-checkup', name: 'Routine Checkup', color: 'bg-blue-500' },
    { id: 'consultation', name: 'Consultation', color: 'bg-teal-400' },
    { id: 'emergency', name: 'Emergency', color: 'bg-red-500' },
    { id: 'follow-up', name: 'Follow-up', color: 'bg-orange-400' },
    { id: 'sick-visit', name: 'Sick Visit', color: 'bg-purple-500' },
  ];
};

export const getAppointmentColor = (type, appointmentTypes) => {
  const appointmentType = appointmentTypes.find(t => t.id === type);
  return appointmentType ? appointmentType.color : 'bg-blue-500';
};

export const getAppointmentLabel = (type, appointmentTypes) => {
  const appointmentType = appointmentTypes.find(t => t.id === type);
  return appointmentType ? appointmentType.name : 'Appointment';
};