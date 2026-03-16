import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div style={{ marginLeft: '180px', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '60px 40px',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
            About <span style={{ color: '#ffc107' }}>JobLynk</span>
          </h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', color: '#cbd5e1', lineHeight: '1.6' }}>
            We're on a mission to transform how India connects with top employers through 
            AI-powered career solutions and professional development tools.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {[
            { number: '10,000+', label: 'Job Seekers' },
            { number: '500+', label: 'Partner Companies' },
            { number: '95%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#ffc107', marginBottom: '10px' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '18px', color: '#475569' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '60px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '20px' }}>
              Our Mission
            </h2>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
              To bridge the gap between talented professionals and India's leading employers 
              through innovative technology, personalized career support, and data-driven matching 
              that ensures the right fit for both candidates and companies.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '20px' }}>
              Our Vision
            </h2>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.8' }}>
              To become India's most trusted career acceleration platform, empowering 
              1 million professionals to land their dream jobs by 2030 through continuous 
              innovation and unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <h2 style={{ fontSize: '36px', color: '#0f172a', textAlign: 'center', marginBottom: '40px' }}>
          Our Core <span style={{ color: '#ffc107' }}>Values</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {[
            { 
              title: 'Innovation', 
              desc: 'Constantly evolving with AI and technology to provide cutting-edge solutions',
              icon: '💡'
            },
            { 
              title: 'Integrity', 
              desc: 'Honest, transparent career guidance with no hidden agendas',
              icon: '🤝'
            },
            { 
              title: 'Impact', 
              desc: 'Creating real, measurable change in people\'s lives and careers',
              icon: '🚀'
            }
          ].map((value, index) => (
            <div key={index} style={{
              backgroundColor: '#0f172a',
              padding: '40px',
              borderRadius: '20px',
              textAlign: 'center',
              color: 'white',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>{value.icon}</div>
              <h3 style={{ fontSize: '24px', color: '#ffc107', marginBottom: '15px' }}>
                {value.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6' }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <h2 style={{ fontSize: '36px', color: '#0f172a', textAlign: 'center', marginBottom: '40px' }}>
          Meet Our <span style={{ color: '#ffc107' }}>Team</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '60px'
        }}>
          {[
            { name: 'Rajesh Kumar', role: 'CEO & Founder' },
            { name: 'Priya Sharma', role: 'Head of AI' },
            { name: 'Amit Patel', role: 'Career Coach' },
            { name: 'Neha Gupta', role: 'HR Specialist' }
          ].map((member, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#ffc107',
                margin: '0 auto 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                color: '#0f172a'
              }}>
                {member.name.charAt(0)}
              </div>
              <h3 style={{ fontSize: '18px', color: '#0f172a', marginBottom: '5px' }}>
                {member.name}
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b' }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #ffc107 0%, #ffb300 100%)',
          padding: '60px',
          borderRadius: '30px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '36px', color: '#0f172a', marginBottom: '20px' }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{ fontSize: '18px', color: '#0f172a', marginBottom: '30px', opacity: 0.9 }}>
            Join thousands of professionals who've advanced their careers with JobLynk.
          </p>
          <Link to="/signup" style={{
            backgroundColor: '#0f172a',
            color: 'white',
            padding: '15px 50px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '18px',
            display: 'inline-block',
            border: '2px solid #0f172a',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = '#0f172a';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#0f172a';
            e.currentTarget.style.color = 'white';
          }}>
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
