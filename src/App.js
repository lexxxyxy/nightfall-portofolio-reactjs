import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Game from './components/game';
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <div id="home" className="font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Game />
      <Testimonials /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
