import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Employee Management System</div>
                <div className="space-x-4"> {/* Using space-x to add space between links */}
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/view" className="text-white">View</Link>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
