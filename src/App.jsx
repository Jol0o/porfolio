import { useState, useEffect } from "react";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="bg-[#090E16] snap-x">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
