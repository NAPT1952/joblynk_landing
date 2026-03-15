import React from 'react';
import BrainGrid from '../BrainGrid';

const Home: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url("/aibm.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      {/* Darker overlay - change opacity to control darkness */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // 60% dark overlay
        zIndex: 1
      }} />

      {/* Emblem in top-left */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 3
      }}>
        <img 
          src="/emblem.jpg" 
          alt="JobLynk Emblem" 
          style={{
            width: '120px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            border: '2px solid white'
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: '100px',
        paddingBottom: '2rem'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginTop: '0',
          marginBottom: '2rem',
          color: 'white',
          fontSize: '3rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          Welcome to JobLynk
        </h1>
        <BrainGrid />
      </div>
    </div>
  );
};

export default Home;
