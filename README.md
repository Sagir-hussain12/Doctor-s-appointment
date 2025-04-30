# Doctor Appointment Booking System

A modern, responsive web application that allows users to book and manage doctor appointments with an intuitive calendar interface.

![Doctor Appointment Booking System](https://i.imgur.com/placeholder.jpg)

🔗 **Live Demo:** [https://jolly-cajeta-cf4371.netlify.app/](https://jolly-cajeta-cf4371.netlify.app/)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Additional Notes](#additional-notes)

## Features

### Core Functionality
- **Interactive Calendar Grid** - Monthly view calendar displaying all appointments
- **Appointment Booking** - Book appointments by selecting date and time
- **Appointment Management** - Edit and delete existing appointments
- **Responsive Design** - Fully functional on mobile, tablet, and desktop devices

### User Experience
- **Intuitive Interface** - Clean, professional UI inspired by modern healthcare platforms
- **Modal Interactions** - Smooth popup dialogs for appointment actions
- **Form Validation** - Input validation to ensure appointment details are complete
- **Date & Time Selection** - User-friendly date and time picker components

### Bonus Features
- **Dark Mode Toggle** - Switch between light and dark themes
- **Appointment Notifications** - Confirmation messages after booking/editing/deleting
- **Persistent Storage** - Appointments saved to local storage

## Tech Stack

- **Frontend Framework:** Vite + React
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Deployment:** Netlify

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sagir-hussain12/Doctor-s-appointment
cd doctor-appointment-system
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for production
```bash
npm run build
# or
yarn build
```

## Project Structure

```
doctor-appointment-system/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # Reusable UI components
│   │   ├── Appointment/     # Appointment-related components
│   │   ├── Calendar/        # Calendar grid and related components
│   │   ├── Layout/          # Layout components (Header, Footer, etc.)
│   │   └── UI/              # Generic UI components
│   ├── context/        # React Context for state management
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles and Tailwind imports
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Usage Guide

### Booking an Appointment

1. Navigate to the main calendar view
2. Click on any date in the calendar grid
3. A booking modal will appear
4. Fill in the required details:
   - Patient name
   - Contact information
   - Appointment time
   - Reason for visit (optional)
5. Click "Book Appointment"
6. A confirmation notification will appear

### Managing Appointments

1. To view appointment details, click on any day with existing appointments
2. Click on a specific appointment to expand details
3. Use the "Edit" button to modify appointment details
4. Use the "Delete" button to cancel an appointment

### Using Dark Mode

- Toggle the dark mode switch in the header to change the theme

## Additional Notes

### Future Enhancements
- User authentication for personalized experience
- Doctor profiles and specialization filtering
- Email notifications for appointment reminders
- Integration with actual healthcare provider APIs
- Multi-language support

---

Created with ❤️ using React, Tailwind CSS, and modern web technologies.