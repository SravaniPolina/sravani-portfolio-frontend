// src/App.js
import './index.css';
import React from "react";
import NavBar from './components/NavBar';      
import Hero from "./components/Hero";
import StatsCards from "./components/StatsCards";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-slate-800">
      <NavBar />
      <main>
        <Hero />
        <StatsCards />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
