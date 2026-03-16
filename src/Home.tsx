import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* HERO BANNER SECTION */}
      <section 
        className="relative w-full h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url('/public/images/aibm.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Main content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-between py-8">
          
          {/* Welcome text at top */}
          <div className="text-center mt-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Welcome to <span className="text-yellow-500">JobLynk</span>
            </h1>
            <p className="text-white/80 mt-2">Connect with India's Top Employers</p>
          </div>

          {/* BRAIN.JPG - 1" square at bottom */}
          <div className="mb-8">
            <img 
              src="/public/images/brain.jpg" 
              alt="Brain"
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg border-2 border-yellow-500 shadow-lg"
              style={{
                boxShadow: '0 4px 12px rgba(255, 193, 7, 0.3)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Rest of your home page content */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Find Your Dream Job</h2>
          {/* Add your other content here */}
        </div>
      </section>
    </div>
  );
};

export default Home;
