// src/App.js
import './index.css';
import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
