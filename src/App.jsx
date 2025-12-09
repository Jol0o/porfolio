import { useState, useEffect } from "react";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Footer from "./component/Footer";
import Timeline from "./component/Timeline";
import SplashScreen from "./component/SplashScreen";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence>
      <div className="w-full overflow-hidden ">
        {isLoading ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Nav />
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Timeline />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </AnimatePresence>
  );
};

export default App;
