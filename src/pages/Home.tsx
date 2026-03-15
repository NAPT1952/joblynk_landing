import React from 'react';
import BrainGrid from '../BrainGrid';

const Home: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Welcome to JobLynk
      </h1>
      <BrainGrid />
    </div>
  );
};

export default Home;
