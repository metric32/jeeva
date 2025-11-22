import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import LiveDemo from './components/LiveDemo';
import ImpactMetrics from './components/ImpactMetrics';
import OurStory from './components/OurStory';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Events from './components/Events';
import ForHospitals from './components/ForHospitals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import HospitalSearch from './pages/HospitalSearch';
import Dashboard from './pages/Dashboard';

const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <Hero />
    <Problem />
    <Solution />
    <Features />
    <LiveDemo />
    <ImpactMetrics />
    <OurStory />
    <Team />
    <Testimonials />
    <Events />
    <ForHospitals />
    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/search" element={<HospitalSearch />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
