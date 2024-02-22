import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "./NavBar"; // Import the Navbar component

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('https://employee-management-backend-ftlq.onrender.com/employees'); // Endpoint to fetch employees from backend
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    return (
        <div>
            <NavBar /> {/* Include the Navbar component */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Employee Table</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-800">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-800">ID</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-800">Name</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-800">Designation</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-800">Department</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-800">Date of Birth</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-800">Email</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-800">Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td className="px-4 py-2 border border-gray-800">{employee.id}</td>
                                <td className="px-4 py-2 border border-gray-800">{employee.name}</td>
                                <td className="px-4 py-2 border border-gray-800">{employee.designation}</td>
                                <td className="px-4 py-2 border border-gray-800">{employee.department}</td>
                                <td className="px-4 py-2 border border-gray-800">{employee.dob}</td>
                                <td className="px-4 py-2 border border-gray-800">{employee.email}</td>
                                <td className="px-4 py-2 border border-gray-800">{employee.address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeeTable;
