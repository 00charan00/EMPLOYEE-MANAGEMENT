import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    department: '',
    dob: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEmployeeSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/register', formData);
      if (response.status === 200) {
        // alert('Employee registered successfully');
        window.location.reload();
      } else {
        alert('Error registering employee');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering employee');
    }
  };

  return (
      <div className="p-4">
        {step === 1 && (
            <form onSubmit={handleEmployeeSubmit} className="space-y-4">
              <h2 className="text-xl font-semibold">Employee Registration</h2>
              <label className="block">
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input mt-1" />
              </label>
              <label className="block">
                Designation:
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="form-input mt-1" />
              </label>
              <label className="block">
                Department:
                <input type="text" name="department" value={formData.department} onChange={handleChange} className="form-input mt-1" />
              </label>
              <label className="block">
                Date of Birth:
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-input mt-1" />
              </label>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Next</button>
            </form>
        )}
        {step === 2 && (
            <form className="space-y-4">
              <h2 className="text-xl font-semibold">Additional Information</h2>
              <label className="block">
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1" required />
              </label>
              <label className="block">
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-input mt-1" required />
              </label>
              <div className="space-x-4">
                <button type="button" onClick={() => setStep(1)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Previous</button>
                <button type="submit" onClick={handleFinalSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
              </div>
            </form>
        )}
      </div>
  );
};

export default App;
