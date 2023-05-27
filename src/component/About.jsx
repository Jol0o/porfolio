import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="snap-start text-white w-full min-h-[70vh] flex justify-center items-center flex-col font-mono mb-[3%]"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-evenly items-center w-fit  mx-auto  rounded-xl">
          <div className="w-full flex justify-center items-center sm:w-1/2 before:bg-white before:absolute before:content-none">
            <motion.img
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              src="/me1.png"
              alt="me"
              className="rounded-full shadow-green-800 shadow-lg bg-[#13a0491a] h-[300px] sm:h-[400px] w-auto sm:w-[400px]"
            />
          </div>
          <div className="w-full sm:w-1/2 h-fit flex justify-center items-center flex-col px-[3%] py-[2%]">
            <motion.div
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-3"
            >
              <p className="w-auto  tracking-wide md:text-sm leading-10 ">
                👋 Hi, I'm John Loyd, a self-taught web developer from
                Philippines.
              </p>
              <p>
                🚀 I'm skilled in HTML , CSS , BOOTSTAP , TAILWIND , REACT.JS ,
                NEXT.JS , FIREBASE , and I'm always eager to learn more. Besides
                coding, I enjoy video games and designing.
              </p>
              <p>
                💡 I value collaboration and teamwork and am open to working
                together. If you have any questions or would like to work with
                me, please reach out.
              </p>
            </motion.div>

            <button className="border border-green-500 text-green-500 bg-transparent h-10 w-36 relative rounded-md mt-5">
              <div className="absolute bottom-8 left-[135px]">
                <span className="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <a href="/public/JohnloydBelen.pdf" download>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
