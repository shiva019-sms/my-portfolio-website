import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Background from './components/Background';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Internships />
      <Contact />
    </div>
  );
}

export default App; 
