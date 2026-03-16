import React from 'react';
import { Link } from 'react-router-dom';
import './BrainGrid.css';

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
  return (
    <div className="brain-grid-container">
      <div className="brain-grid">
        {pages.map((page) => (
          <Link to={page.path} key={page.name} className="brain-card">
            <div className="brain-icon">
              {/* REPLACE the SVG with actual image */}
              <img 
                src="/public/images/brain.jpg" 
                alt={page.name}
                onError={(e) => {
                  // If image fails to load, show a colored box with text
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.style.width = '70px';
                    fallback.style.height = '70px';
                    fallback.style.backgroundColor = '#ffc107';
                    fallback.style.borderRadius = '12px';
                    fallback.style.display = 'flex';
                    fallback.style.alignItems = 'center';
                    fallback.style.justifyContent = 'center';
                    fallback.style.color = '#333';
                    fallback.style.fontWeight = 'bold';
                    fallback.innerText = page.name.charAt(0);
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <span className="page-name">{page.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrainGrid;
