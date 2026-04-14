import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        overflow: 'hidden'
      }}>
        {/* ✅ FIXED IMAGE PATH */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/ai.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 1
        }}></div>

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(30,41,59,0.9))',
          zIndex: 2
        }}></div>

        <div style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1>JobLynk.live</h1>
          <p>Bridging Jobs & Talent</p>
        </div>
      </div>
    </>
  );
};

export default Home;