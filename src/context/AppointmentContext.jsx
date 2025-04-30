import React, { createContext, useState, useContext, useEffect } from 'react';
import { generateAppointmentTypes } from '../utils/appointmentHelpers';

const AppointmentContext = createContext();

export const useAppointments = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [appointmentTypes] = useState(generateAppointmentTypes());

  // Load sample appointments
  useEffect(() => {
    const sampleAppointments = [
      {
        id: '1',
        title: 'Annual Checkup',
        doctor: 'Dr. Smith',
        patientName: 'John Doe',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 7, 10, 0),
        endTime: new Date(new Date().getFullYear(), new Date().getMonth(), 7, 11, 0),
        type: 'routine-checkup',
        notes: 'Regular annual physical examination'
      },
      {
        id: '2',
        title: 'Dental Cleaning',
        doctor: 'Dr. Johnson',
        patientName: 'Sarah Williams',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 11, 14, 30),
        endTime: new Date(new Date().getFullYear(), new Date().getMonth(), 11, 15, 30),
        type: 'consultation',
        notes: 'Bi-annual dental cleaning and checkup'
      },
      {
        id: '3',
        title: 'Pediatric Visit',
        doctor: 'Dr. Garcia',
        patientName: 'Lily Chen',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 15, 9, 0),
        endTime: new Date(new Date().getFullYear(), new Date().getMonth(), 15, 10, 0),
        type: 'sick-visit',
        notes: 'Follow-up for recent ear infection'
      }
    ];
    
    setAppointments(sampleAppointments);
  }, []);

  const openModal = (date) => {
    setSelectedDate(date);
    setCurrentAppointment(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentAppointment(null);
  };

  const openViewModal = () => {
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const addAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: Date.now().toString()
    };
    setAppointments([...appointments, newAppointment]);
  };

  const editAppointment = (appointment) => {
    setAppointments(appointments.map(app => 
      app.id === appointment.id ? appointment : app
    ));
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  const editCurrentAppointment = (appointment) => {
    setCurrentAppointment(appointment);
    setSelectedDate(new Date(appointment.date));
    setIsModalOpen(true);
  };

  return (
    <AppointmentContext.Provider value={{
      appointments,
      selectedDate,
      setSelectedDate,
      currentMonth,
      setCurrentMonth,
      isModalOpen,
      openModal,
      closeModal,
      addAppointment,
      editAppointment,
      deleteAppointment,
      currentAppointment,
      editCurrentAppointment,
      isViewModalOpen,
      openViewModal,
      closeViewModal,
      appointmentTypes
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};