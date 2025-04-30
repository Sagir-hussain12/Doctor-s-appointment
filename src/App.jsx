import React from 'react';
import { AppointmentProvider } from './context/AppointmentContext';
import Layout from './components/Layout';
import CalendarView from './components/CalendarView';
import OverviewPage from './components/OverView';
import DoctorsPage from './components/DoctorsPage';
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <AppointmentProvider>
     <Routes>
     <Route path="/" element={<Layout><CalendarView /></Layout>} />
     <Route path="/overview" element={<Layout><OverviewPage /></Layout>} />
     <Route path="/doctors" element={<Layout><DoctorsPage /></Layout>} />
     </Routes>
    </AppointmentProvider>
  );
}

export default App;