import React from 'react';
import { Link } from 'react-router-dom';
import BrainChain from './BrainChain'; // ← ADD THIS IMPORT
// ... other imports

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Add BrainChain at the top or left side */}
      <div className="flex">
        <BrainChain /> {/* This shows the 9 brain icons on the left */}
        
        <div className="flex-1">
          {/* Your existing hero section and other content */}
          <section className="...">
            {/* ... */}
          </section>
        </div>
      </div>
    </div>
  );
};
