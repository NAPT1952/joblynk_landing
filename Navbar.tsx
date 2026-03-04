import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-slate-900 text-white p-4 border-b border-cyan-500/30">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          JOB <span className="text-cyan-400">LINK</span>
        </Link>

        {/* Navigation Links - exactly like your screenshot */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/jobs" className="hover:text-cyan-400 transition">Jobs</Link>
          <Link to="/map" className="hover:text-cyan-400 transition">Map View</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition">Contact Us</Link>
          
          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode} className="text-xl">
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* LOGIN button - light style with glow */}
          <button className="bg-[#f0f4f9] text-[#1e2a36] border border-[#d3dce6] rounded-full px-6 py-2 font-semibold shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:bg-white hover:shadow-[0_0_25px_cyan] transition-all">
            LOGIN
          </button>

          {/* REGISTER button - dark style with glow */}
          <button className="bg-[#1e2a36] text-white border border-[#00ccbb] rounded-full px-6 py-2 font-semibold shadow-[0_0_20px_#00ccbb] hover:bg-[#2c4050] hover:shadow-[0_0_35px_#6ffff0] transition-all">
            REGISTER
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
