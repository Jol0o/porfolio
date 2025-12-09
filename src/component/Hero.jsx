import React, { Suspense } from 'react';
import { motion } from "framer-motion";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowDown, BsLinkedin } from "react-icons/bs";
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import Globe from './../components/magicui/globe';

const cardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.9,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const textVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.9,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

function TextCard({ children }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={textVariants}>{children}</motion.div>
    </motion.div>
  );
}

function Card({ children }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
}

const Hero = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById("project");
    contentElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="h-screen w-full pt-3 text-white font-mono relative inset-0">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/20">Loading 3D Scene...</div>}>
          <Spline scene="https://prod.spline.design/0Lmua0ew9jjhiMNX/scene.splinecode" />
        </Suspense>
      </div>

      <ul className="hidden lg:flex flex-col top-[45%] transition fixed left-[0] gap-1 uppercase font-semibold text-2xl z-10 text-[#9C9C9C]">
        <li className="ml-[-109px] hover:ml-[5px]  ease-out duration-300 hover:text-cyan-500 ">
          <a
            href="https://www.facebook.com/jol0oo"
            target="_blank"
            aria-label="Facebook Profile"
            className="flex gap-2 items-center "
          >
            <h1> Facebook</h1>
            <AiFillFacebook />
          </a>
        </li>
        <li className="ml-[-121px] hover:ml-[5px] ease-out duration-300 hover:text-[#A8274D] ">
          <a
            href="https://www.instagram.com/j0lo_o/"
            target="_blank"
            aria-label="Instagram Profile"
            className="flex gap-2 items-center "
          >
            <h1>Instagram</h1>
            <AiFillInstagram />
          </a>
        </li>
        <li className="ml-[-80px] hover:ml-[10px]  ease-out duration-300 hover:text-white ">
          <a
            href="https://github.com/Jol0o"
            target="_blank"
            aria-label="GitHub Profile"
            className="flex gap-2 items-center "
          >
            <h1> Github</h1>
            <AiFillGithub />
          </a>
        </li>
        <li className="ml-[-109px] hover:ml-[10px]  ease-out duration-300 hover:text-white ">
          <a
            href="https://www.linkedin.com/in/john-loyd-belen-180329250/"
            target="_blank"
            aria-label="LinkedIn Profile"
            className="flex gap-2 items-center "
          >
            <h1> Linkedin</h1>
            <BsLinkedin />
          </a>
        </li>
      </ul>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ staggerChildren: 0.5 }}
        className="relative bg-opacity-75 bg-[#090E16] flex justify-center items-center pt-24 md:pt-0 h-full w-full flex-col "
      >
        {/* <div className="w-[500px] h-[450px] bg-green-700 rounded-full absolute z-0 top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div> */}
        <div className="absolute w-auto top-[23%] flex flex-col justify-center items-center select-none z-10">
          <motion.h3
            variants={cardVariants}
            className="text-center w-fit font-sans font-medium tracking-[0.2em] text-sm md:text-xl text-gray-300 mb-4 uppercase"
          >
            John Loyd Belen
          </motion.h3>
          <motion.h2
            variants={cardVariants}
            className="text-center w-fit font-sans font-black tracking-tighter text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] uppercase italic"
          >
            Web Developer
          </motion.h2>
        </div>
        {/* <div className="absolute md:top-[23%]">
          <motion.img
            variants={cardVariants}
            src="./avatar.png"
            alt="Portrait of John Loyd Belen"
            className=" rounded-full bg-gradient-to-b from-[#13a049a9] to-[#45d8d85e] shadow-lg  shadow-[#13a04968] h-80 w-80 md:w-[400px] md:h-[400px] "
          />

          <motion.div
            variants={cardVariants}
            className="flex items-center cursor-auto justify-center mt-10"
          >
            <button className="text-green-500 text-xl">
              Let's get Started.
            </button>
          </motion.div>
        </div> */}
        {/* <Globe className="w-[1000px] z-0" /> */}
      </motion.div>

      <div className="z-1 animate-bounce absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[90%] rounded-full hover:bg-violet-400 transition bg-violet-500 py-3 px-3">
        <button onClick={scrollToContent}>
          <BsArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Hero;
