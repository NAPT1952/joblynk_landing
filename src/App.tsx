import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrainGrid from './BrainGrid';  // Changed from BrainChain
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import PayPortal from './pages/PayPortal';
import ResumeTools from './pages/ResumeTools';
import EmployersData from './pages/EmployersData';
import SignUp from './pages/SignUp';
import Support from './pages/Support';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <BrainGrid />  {/* This will now show your brain images */}
        <div style={{ 
          marginLeft: '120px',  // Match the width of BrainGrid
          flex: 1,
          padding: '20px'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/payportal" element={<PayPortal />} />
            <Route path="/resumetools" element={<ResumeTools />} />
            <Route path="/employersdata" element={<EmployersData />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/support" element={<Support />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
