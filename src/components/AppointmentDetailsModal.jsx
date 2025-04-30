import React from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { formatDate, formatTime } from '../utils/dateUtils';
import { getAppointmentColor, getAppointmentLabel } from '../utils/appointmentHelpers';
import { X, Clock, Calendar, User, Stethoscope, FileText, Edit, Trash } from 'lucide-react';

const AppointmentDetailsModal = ({ onClose }) => {
  const { 
    currentAppointment, 
    editCurrentAppointment, 
    deleteAppointment,
    appointmentTypes
  } = useAppointments();

  if (!currentAppointment) return null;

  const handleEdit = () => {
    editCurrentAppointment(currentAppointment);
    onClose();
  };

  const handleDelete = () => {
    deleteAppointment(currentAppointment.id);
    onClose();
  };

  const badgeColor = getAppointmentColor(currentAppointment.type, appointmentTypes);
  const appointmentType = getAppointmentLabel(currentAppointment.type, appointmentTypes);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full animate-fade-in-up">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Appointment Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {currentAppointment.title}
            </h3>
            <span className={`${badgeColor} text-white text-xs px-2 py-1 rounded-full`}>
              {appointmentType}
            </span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">
                {formatDate(currentAppointment.date)}
              </span>
            </div>
            
            <div className="flex items-center">
              <Clock size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">
                {formatTime(currentAppointment.date)} - {formatTime(currentAppointment.endTime)}
              </span>
            </div>
            
            <div className="flex items-center">
              <Stethoscope size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">
                {currentAppointment.doctor}
              </span>
            </div>
            
            <div className="flex items-center">
              <User size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">
                {currentAppointment.patientName}
              </span>
            </div>
            
            {currentAppointment.notes && (
              <div className="mt-4">
                <div className="flex items-center mb-1">
                  <FileText size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Notes</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-6">
                  {currentAppointment.notes}
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end p-4 pt-3 border-t border-gray-200 dark:border-gray-700 space-x-2">
          <button
            onClick={handleDelete}
            className="flex items-center px-3 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors"
          >
            <Trash size={16} className="mr-1" /> Delete
          </button>
          <button
            onClick={handleEdit}
            className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Edit size={16} className="mr-1" /> Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsModal;