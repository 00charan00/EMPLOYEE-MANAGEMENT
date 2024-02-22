import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";
import NavBar from "./NavBar";

const App = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        id:'',
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
            const response = await axios.post('https://employee-management-backend-ftlq.onrender.com/register', formData);
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
        <div className="flex flex-col min-h-screen">
            <NavBar/>

            <div className="flex items-center justify-center bg-gray-100 flex-1">
                <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-xl w-96">
                    {step === 1 && (
                        <form onSubmit={handleEmployeeSubmit} className="space-y-4">
                            <h2 className="text-xl font-semibold">Employee Registration</h2>
                            <div className="flex flex-col">
                                <label className="mb-1">ID</label>
                                <input type="number" name="id" value={formData.id} onChange={handleChange} className="form-input border border-black rounded-lg pl-2" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input border border-black rounded-lg pl-2" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">Designation</label>
                                <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="form-input border border-black rounded-lg pl-2" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">Department</label>
                                <input type="text" name="department" value={formData.department} onChange={handleChange} className="form-input border border-black rounded-lg pl-2" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">Date of Birth</label>
                                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-input border border-black rounded-lg pl-2" />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 mt-4 self-end">Next</button>
                        </form>
                    )}
                    {step === 2 && (
                        <form className="space-y-4">
                            <h2 className="text-xl font-semibold">Additional Information</h2>
                            <div className="flex flex-col">
                                <label className="mb-1">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input border border-black rounded-lg pl-2" required />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">Address</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-input border border-black rounded-lg pl-2" required />
                            </div>
                            <div className="flex justify-between">
                                <button type="button" onClick={() => setStep(1)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400">Previous</button>
                                <button type="submit" onClick={handleFinalSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">Submit</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
