import './App.css';
import React, { useRef } from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar scrollToSection={scrollToSection} heroRef={heroRef} aboutRef={aboutRef} experienceRef={experienceRef} contactRef={contactRef}/>
      <Hero ref={heroRef}/>
      <About ref={aboutRef}/>
      <Experience ref={experienceRef}/>
      <Contact ref={contactRef}/>
    </>
  );
}

export default App;
