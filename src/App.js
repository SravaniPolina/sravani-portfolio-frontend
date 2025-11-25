// src/App.js
import './index.css';
import React from "react";
import NavBar from './components/NavBar';      
import Hero from "./components/Hero";
import StatsCards from "./components/StatsCards";
import Contact from "./components/Contact";
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

function App() {
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
