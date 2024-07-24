import React, { useState } from 'react';

const HospitalsList = ({ hospitals, updateHospital, deleteHospital }) => {
  const [selectedCity, setSelectedCity] = useState('');

  const filteredHospitals = selectedCity ? hospitals.filter(hospital => hospital.city === selectedCity) : hospitals;

  const handleEdit = (hospital) => {
    // Implement your edit logic here
    // For now, we will simulate an update operation
    const updatedHospital = {
      ...hospital,
      rating: hospital.rating + 1  // Example modification
    };
    updateHospital(updatedHospital);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Hospitals</h2>
      <div className="mb-4">
        <label className="block mb-2">Filter by City</label>
        <input type="text" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter city name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHospitals.map(hospital => (
          <div key={hospital.name} className="p-4 border rounded-lg shadow-lg">
            <img src={hospital.imageUrl} alt={hospital.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{hospital.name}</h3>
            <p className="text-gray-700">{hospital.city}</p>
            <p className="text-gray-700">Rating: {hospital.rating}</p>
            <p className="text-gray-700">Specialities: {hospital.specialities.join(', ')}</p>
            <p className="text-gray-700">Description: {hospital.description}</p>
            <p className="text-gray-700">Doctors: {hospital.numberOfDoctors}</p>
            <p className="text-gray-700">Departments: {hospital.numberOfDepartments}</p>
            <button onClick={() => handleEdit(hospital)} className="mt-2 p-2 bg-yellow-500 text-white rounded">Edit</button>
            <button onClick={() => deleteHospital(hospital.name)} className="mt-2 p-2 bg-red-500 text-white rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalsList;
