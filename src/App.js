import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Hero from "./components/Hero";
import Credentials from "./components/Credentials";
import StatStrip from "./components/StatStrip";
import CaseStudies from "./components/Casestudies";
import AboutMe from "./components/AboutMe";
import StrategicLeadershipServices from "./components/StrategicLeadershipServices";
import Projects from "./components/Projects";
import LeadershipPhilosophy from "./components/LeadershipPhilosophy";
import ExecutiveTestimonials from "./components/ExecutiveTestimonials";
import DirectContact from "./components/DirectContact";
import ConsultationForm from "./components/ConsultationForm";
import Footer from './components/Footer';
import BackToTop from "./components/BackToTop";

function HomePage() {
  return (
    <div className="antialiased" style={{background: "var(--background)", color: "var(--text)"}}>
      <NavBar />
      <main>
        <Hero />
        <Credentials />
        <StatStrip />
        <Casestudies />
        <AboutMe />
        <StrategicLeadershipServices />
        <Projects />
        <LeadershipPhilosophy />
        <ExecutiveTestimonials />
        <DirectContact />
        <ConsultationForm />
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultation" element={<ConsultationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
