import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">JOBSLINKED.live</Link>
        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/pay">Pay Portal</Link>
          <Link to="/samples">Samples</Link>
          <Link to="/employer">Employers</Link>
          <Link to="/builder">Resume</Link>
          <Link to="/admin">Admin</Link>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;