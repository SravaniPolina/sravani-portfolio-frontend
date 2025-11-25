import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';      
import Hero from "./components/Hero";
import StatsCards from "./components/StatsCards";
import Footer from './components/Footer';
import AboutMe from "./components/AboutMe";
import CoreCompetencies from "./components/CoreCompetencies";
import PortfolioStats from "./components/PortfolioStats";
import Projects from "./components/Projects";
import ExecutiveCTA from "./components/ExecutiveCTA";
import LeadershipPhilosophy from "./components/LeadershipPhilosophy";
import ExecutiveTestimonials from "./components/ExecutiveTestimonials";
import ProfessionalRecognition from "./components/ProfessionalRecognition";
import ProfessionalJourney from "./components/ProfessionalJourney";
import CareerHighlights from "./components/CareerHighlights";
import StrategicLeadershipServices from "./components/StrategicLeadershipServices";
import DirectContact from "./components/DirectContact";
import ExecutiveConsultation from "./components/ExecutiveConsultation";
import ConsultationForm from "./components/ConsultationForm"; // Add your form component import

function HomePage() {
  return (
    <div className="antialiased text-slate-800">
      <NavBar />
      <main>
        <Hero />
        <StatsCards />
        <AboutMe />
        <CoreCompetencies />
        <PortfolioStats />
        <Projects />
        <ExecutiveCTA />
        <LeadershipPhilosophy />
        <ExecutiveTestimonials />
        <ProfessionalRecognition />
        <ProfessionalJourney />
        <CareerHighlights />
        <StrategicLeadershipServices />
        <DirectContact />
        <ExecutiveConsultation />
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
