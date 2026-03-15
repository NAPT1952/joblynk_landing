import React from 'react';
import { Link } from 'react-router-dom';
import './BrainChain.css';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Pay Portal', path: '/payportal' },
  { name: 'Resume Tools', path: '/resumetools' },
  { name: 'Employers Data', path: '/employersdata' },
  { name: 'Sign Up', path: '/signup' },
  { name: 'Support', path: '/support' },
  { name: 'Disclaimer', path: '/disclaimer' },
];

const BrainChain: React.FC = () => {
  return (
    <div className="brain-chain">
      {pages.map((page) => (
        <Link to={page.path} key={page.name} className="brain-link">
          <div className="brain-icon">
            <svg width="50" height="50" viewBox="0 0 100 100">
              <circle cx="35" cy="40" r="18" fill="none" stroke="#333" strokeWidth="2" />
              <circle cx="65" cy="40" r="18" fill="none" stroke="#333" strokeWidth="2" />
              <circle cx="30" cy="72" r="14" fill="none" stroke="#333" strokeWidth="2" />
              <circle cx="70" cy="72" r="14" fill="none" stroke="#333" strokeWidth="2" />
              <path d="M40 55 Q50 63, 60 55" stroke="#333" strokeWidth="2" fill="none" />
              <path d="M45 70 Q50 68, 55 70" stroke="#333" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <span className="page-name">{page.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default BrainChain;
