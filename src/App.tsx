import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrainGrid from "./BrainGrid";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import PayPortal from "./payportal";
import ResumeTools from "./resumebuilder";
import EmployersData from "./employerportal";
import SignUp from "./samplesvault";
import Support from "./pages/Support";
import Disclaimer from "./disclaimer";

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <BrainGrid />
        <main style={{ 
          flex: 1, 
          marginLeft: '180px',
          width: 'calc(100% - 180px)',
          overflowX: 'hidden',
          backgroundColor: '#f8fafc',
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
        </main>
      </div>
    </Router>
  );
}

export default App;
