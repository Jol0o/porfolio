import { useState, useEffect } from "react";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Footer from "./component/Footer";
import Timeline from "./component/Timeline";

const App = () => {
  return (
    <div className="bg-[#090E16] w-full snap-x">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
