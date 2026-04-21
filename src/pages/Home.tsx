import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', cel: '', location: '', message: '' });

  const sectors = [
    "Cruise Line Operations", "Luxury Hotels - India", "Middle East Hospitality",
    "F&B Management", "Front Office Excellence", "Housekeeping Admin",
    "Culinary Arts", "Revenue & Sales", "HR & Training",
    "Engineering & Tech", "Maritime Deck Dept", "Maritime Engine Dept",
    "Wellness & Spa", "Retail & Casino"
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACel: ${formData.cel}%0D%0ALocation: ${formData.location}%0D%0A%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:joblynklive@gmail.com?subject=JobLynk Inquiry&body=${body}`;
  };

  const inputStyle = { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #333', background: '#161b22', color: 'white' };

  return (
    <div style={{ background: '#0a0a0f', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <section style={{ textAlign: 'center', padding: '100px 20px', background: 'radial-gradient(circle at center, #1e293b 0%, #0a0a0f 100%)' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '10px' }}>JobLynk<span style={{ color: '#fbbf24' }}>.live</span></h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '30px' }}>Executive Digital Resources for the Modern Indian Professional.</p>
        
        {/* LIVE PULSE INDICATOR */}
        <div style={{ marginBottom: '40px', color: '#fbbf24', fontSize: '0.9rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '10px', height: '10px', background: '#fbbf24', borderRadius: '50%', boxShadow: '0 0 10px #fbbf24' }}></span>
          LIVE: 20+ New HR Leads Verified Today (April 21, 2026)
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button onClick={() => handleScroll('service-grid')} style={{ padding: '15px 30px', background: '#fbbf24', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>VIEW OPPORTUNITIES</button>
          <button onClick={() => handleScroll('contact-form')} style={{ padding: '15px 30px', background: 'transparent', border: '2px solid white', color: 'white', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>CONTACT US</button>
        </div>
      </section>

      {/* --- 14 CATEGORY GRID --- */}
      <section id="service-grid" style={{ padding: '80px 5%' }}>
        <h2 style={{ textAlign: 'center', color: '#fbbf24', marginBottom: '40px' }}>Select Your Executive Sector</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              onClick={() => navigate(`/service/${index}`)}
              style={{ padding: '25px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', transition: '0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = '#fbbf24'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(251,191,36,0.2)'}
            >
              <div style={{ color: '#fbbf24', fontSize: '0.8rem', marginBottom: '10px' }}>SECTOR {index + 1}</div>
              <div style={{ fontWeight: 'bold' }}>{sector}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="contact-form" style={{ padding: '80px 5%', background: '#000' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#fbbf24' }}>Direct Inquiry</h2>
          <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
            <input type="text" placeholder="Name" required style={inputStyle} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email" required style={inputStyle} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <input type="tel" placeholder="Mobile (Cel)" required style={inputStyle} onChange={(e) => setFormData({...formData, cel: e.target.value})} />
            <input type="text" placeholder="Current Location" required style={inputStyle} onChange={(e) => setFormData({...formData, location: e.target.value})} />
            <textarea placeholder="Your Message" rows={4} style={{...inputStyle, resize: 'none'}} onChange={(e) => setFormData({...formData, message: e.target.value})} />
            <button type="submit" style={{ width: '100%', padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>SEND TO EXECUTIVE DESK</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;