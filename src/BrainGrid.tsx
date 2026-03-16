import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Pay Portal', path: '/payportal' },
  { name: 'Resume Tools', path: '/resumetools' },
  { name: 'Employees Data', path: '/employersdata' },
  { name: 'Sign Up', path: '/signup' },
  { name: 'Support', path: '/support' },
  { name: 'Disclaimer', path: '/disclaimer' },
];

const BrainGrid: React.FC = () => {
  console.log('🔥 BrainGrid is rendering!');
  
  return (
    <div style={{
      position: 'fixed',
      left: '0',
      top: '0',
      width: '150px',
      height: '100vh',
      backgroundColor: '#1a1a2e',
      padding: '20px 10px',
      overflowY: 'auto',
      zIndex: 9999,
      borderRight: '3px solid gold'
    }}>
      <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>MENU</h3>
      {pages.map((page) => (
        <Link
          to={page.path}
          key={page.name}
          style={{
            display: 'block',
            textDecoration: 'none',
            color: 'white',
            marginBottom: '15px',
            padding: '10px',
            backgroundColor: '#16213e',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #ffc107'
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{page.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default BrainGrid;
