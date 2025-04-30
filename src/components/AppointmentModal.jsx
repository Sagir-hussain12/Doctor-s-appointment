import React, { useState, useEffect } from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { formatDateForDisplay } from '../utils/dateUtils';
import { X } from 'lucide-react';

const AppointmentModal = ({ onClose }) => {
  const { 
    selectedDate, 
    addAppointment, 
    editAppointment,
    deleteAppointment,
    currentAppointment,
    appointmentTypes
  } = useAppointments();
  
  const [formData, setFormData] = useState({
    title: '',
    doctor: '',
    patientName: '',
    date: selectedDate,
    time: '09:00',
    duration: 30,
    type: 'routine-checkup',
    notes: ''
  });

  useEffect(() => {
    if (currentAppointment) {
      const appointmentDate = new Date(currentAppointment.date);
      const hours = appointmentDate.getHours().toString().padStart(2, '0');
      const minutes = appointmentDate.getMinutes().toString().padStart(2, '0');
      
      setFormData({
        ...currentAppointment,
        time: `${hours}:${minutes}`,
        duration: Math.round((new Date(currentAppointment.endTime) - new Date(currentAppointment.date)) / (1000 * 60))
      });
    } else {
      setFormData({
        title: '',
        doctor: '',
        patientName: '',
        date: selectedDate,
        time: '09:00',
        duration: 30,
        type: 'routine-checkup',
        notes: ''
      });
    }
  }, [currentAppointment, selectedDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const [hours, minutes] = formData.time.split(':').map(Number);
    const appointmentDate = new Date(formData.date);
    appointmentDate.setHours(hours, minutes, 0);
    
    const endTime = new Date(appointmentDate);
    endTime.setMinutes(endTime.getMinutes() + Number(formData.duration));
    
    const appointmentData = {
      ...formData,
      date: appointmentDate,
      endTime: endTime
    };
    
    if (currentAppointment) {
      editAppointment({ ...appointmentData, id: currentAppointment.id });
    } else {
      addAppointment(appointmentData);
    }
    
    onClose();
  };

  const handleDelete = () => {
    if (currentAppointment) {
      deleteAppointment(currentAppointment.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full animate-fade-in-up">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {currentAppointment ? 'Edit Appointment' : 'New Appointment'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {formatDateForDisplay(selectedDate)}
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Appointment Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="Annual checkup"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Doctor
                  </label>
                  <input
                    type="text"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="Dr. Smith"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Duration (minutes)
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Appointment Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  required
                >
                  {appointmentTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  rows="3"
                  placeholder="Additional information"
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
            {currentAppointment ? (
              <button
                type="button"
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            ) : (
              <div></div>
            )}
            <div className="space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                {currentAppointment ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;