import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown, Star, Calendar, Mail, Phone } from 'lucide-react';

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  
  // Sample data for doctors
  const allDoctors = [
    {
      id: 1,
      name: "Dr. Emily Chen",
      image: "/api/placeholder/80/80",
      specialty: "Cardiology",
      rating: 4.9,
      patientsCount: 1240,
      experience: "12 years",
      availability: "Mon, Wed, Fri",
      education: "Stanford University School of Medicine",
      email: "e.chen@medibook.com",
      phone: "(555) 123-4567"
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      image: "/api/placeholder/80/80",
      specialty: "Neurology",
      rating: 4.7,
      patientsCount: 980,
      experience: "9 years",
      availability: "Tue, Thu, Sat",
      education: "Harvard Medical School",
      email: "m.rodriguez@medibook.com",
      phone: "(555) 234-5678"
    },
    {
      id: 3,
      name: "Dr. Samantha Williams",
      image: "/api/placeholder/80/80",
      specialty: "Pediatrics",
      rating: 4.8,
      patientsCount: 1560,
      experience: "15 years",
      availability: "Mon-Fri",
      education: "Johns Hopkins School of Medicine",
      email: "s.williams@medibook.com",
      phone: "(555) 345-6789"
    },
    {
      id: 4,
      name: "Dr. David Johnson",
      image: "/api/placeholder/80/80",
      specialty: "Orthopedics",
      rating: 4.6,
      patientsCount: 1120,
      experience: "11 years",
      availability: "Mon, Wed, Fri",
      education: "Yale School of Medicine",
      email: "d.johnson@medibook.com",
      phone: "(555) 456-7890"
    },
    {
      id: 5,
      name: "Dr. Lisa Patel",
      image: "/api/placeholder/80/80",
      specialty: "Dermatology",
      rating: 4.9,
      patientsCount: 1350,
      experience: "14 years",
      availability: "Tue, Thu, Sat",
      education: "UCLA School of Medicine",
      email: "l.patel@medibook.com",
      phone: "(555) 567-8901"
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      image: "/api/placeholder/80/80",
      specialty: "Family Medicine",
      rating: 4.7,
      patientsCount: 1870,
      experience: "18 years",
      availability: "Mon-Fri",
      education: "University of Pennsylvania School of Medicine",
      email: "j.wilson@medibook.com",
      phone: "(555) 678-9012"
    }
  ];

  // Filter doctors by search term and specialty
  const filteredDoctors = allDoctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  // Sort doctors based on sort criteria
  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'experience') {
      return parseInt(b.experience) - parseInt(a.experience);
    }
    return 0;
  });

  // Get unique specialties for the filter dropdown
  const specialties = ['All', ...new Set(allDoctors.map(doctor => doctor.specialty))];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Doctor Directory</h2>

        {/* Search and filter bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search input */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100 sm:text-sm"
                placeholder="Search doctors by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Specialty filter */}
            <div className="relative sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={18} className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100 sm:text-sm"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sort by */}
            <div className="relative sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ArrowUpDown size={18} className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100 sm:text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
                <option value="experience">Sort by Experience</option>
              </select>
            </div>
          </div>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-900" 
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{doctor.name}</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">{doctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      <Star size={16} className="text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">{doctor.rating}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{doctor.patientsCount} patients</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{doctor.experience} experience</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Available: {doctor.availability}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="text-gray-500 dark:text-gray-400" />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{doctor.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="text-gray-500 dark:text-gray-400" />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{doctor.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {sortedDoctors.length === 0 && (
          <div className="mt-8 text-center py-12 px-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
            <p className="text-lg text-gray-600 dark:text-gray-400">No doctors found matching your criteria.</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;