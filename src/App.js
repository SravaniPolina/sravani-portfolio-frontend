import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ClientsStrip from "./components/ClientsStrip";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BackToTop from "./components/BackToTop";
import Home from "./Home";
import Services from "./Services";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div className="antialiased" style={{ background: "var(--background)", color: "var(--text)" }}>
      <NavBar />
      <main>{children}</main>
      <BackToTop />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/work" element={<Layout><Work /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
