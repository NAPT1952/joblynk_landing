{/* HERO BANNER */}
<div style={{
  height: '100vh',
  width: '100%',
  position: 'relative',
  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', // Dark blue gradient fallback
  overflow: 'hidden'
}}>
  {/* Try to load aibm.jpg as background */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/images/aibm.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.4,  // Medium transparency for dark effect
    zIndex: 1
  }}></div>
  
  {/* Dark overlay for readability */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(30,41,59,0.8) 100%)',
    zIndex: 2
  }}></div>

  {/* CONTENT - REST OF YOUR BANNER */}
  <div style={{
    position: 'relative',
    zIndex: 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    padding: '40px 0'
  }}>
    {/* Your existing content here */}
  </div>
</div>
