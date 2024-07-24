import React, { useState, useEffect } from 'react';
import HospitalForm from './components/HospitalForm';
import HospitalsList from './components/HospitalsList';

const App = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const storedHospitals = JSON.parse(localStorage.getItem('hospitals')) || [];
    setHospitals(storedHospitals);
  }, []);

  const addHospital = (newHospital) => {
    const updatedHospitals = [...hospitals, newHospital];
    setHospitals(updatedHospitals);
    localStorage.setItem('hospitals', JSON.stringify(updatedHospitals));
  };

  const updateHospital = (updatedHospital) => {
    const updatedHospitals = hospitals.map(hospital =>
      hospital.name === updatedHospital.name ? updatedHospital : hospital
    );
    setHospitals(updatedHospitals);
    localStorage.setItem('hospitals', JSON.stringify(updatedHospitals));
  };

  const deleteHospital = (name) => {
    const updatedHospitals = hospitals.filter(hospital => hospital.name !== name);
    setHospitals(updatedHospitals);
    localStorage.setItem('hospitals', JSON.stringify(updatedHospitals));
  };

  return (
    <div>
      <HospitalForm addHospital={addHospital} />
      <HospitalsList
        hospitals={hospitals}
        updateHospital={updateHospital}
        deleteHospital={deleteHospital}
      />
    </div>
  );
};

export default App;
