// src/App.js
import './index.css';
import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from './components/Navbar'; // add this near other imports
import Footer from './components/Footer';
// ...in your structure add <Footer /> at the end:

function App() {
  return (
    <div>
      {/* ...other sections */}
      <Footer />
    </div>
  )
}


function App() {
  return (
    <div>
      <Navbar />
      {/* The rest of your content/components go below... */}
    </div>
  );
}

function App() {
  return (
    <div className="antialiased text-slate-800">
      <header className="py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold">Sravani Polina</div>
          <nav className="space-x-4 text-sm">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Sravani Polina — Built with ❤️
        </div>
      </footer>
    </div>
  );
}

export default App;
