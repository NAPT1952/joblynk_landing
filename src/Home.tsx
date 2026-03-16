import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ marginLeft: '180px' }}> {/* Match BrainGrid width */}
      {/* HERO BANNER */}
      <section style={{
        height: '100vh',
        backgroundImage: 'url(/public/images/aibm.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}></div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          padding: '20px'
        }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '800',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Welcome to <span style={{ color: '#ffc107' }}>JobLynk</span>
          </h1>
          
          <p style={{
            fontSize: '24px',
            marginBottom: '40px',
            opacity: 0.9
          }}>
            Connect with India's Top Employers
          </p>

          {/* BRAIN.JPG - FINALLY! */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            <img 
              src="/public/images/brain.jpg"
              alt="Brain"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '20px',
                border: '4px solid #ffc107',
                boxShadow: '0 0 30px rgba(255, 193, 7, 0.7)'
              }}
              onError={(e) => {
                console.log('Image failed, trying alternative path');
                e.currentTarget.src = '/images/brain.jpg';
              }}
            />
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/pay" style={{
              backgroundColor: '#ffc107',
              color: '#0f172a',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px',
              transition: 'all 0.3s',
              border: '2px solid #ffc107'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'white'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}>
              Get Started
            </Link>
            
            <Link to="/builder" style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px',
              border: '2px solid #ffc107',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ffc107';
              e.currentTarget.style.color = '#0f172a';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}>
              Build Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
