import React from "react";
import { motion } from "framer-motion";

const imgVariants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const textVariants = {
  offscreen: {
    opacity: 0,
    y: -100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const ButtonVariants = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

function Card({ children }) {
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

function LowCard({ children }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={imgVariants}>{children}</motion.div>
    </motion.div>
  );
}

function ButtonCard({ children }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={ButtonVariants}>{children}</motion.div>
    </motion.div>
  );
}

const About = () => {
  return (
    <div
      className="snap-start text-white w-full min-h-[100vh] my-5 flex justify-center items-center flex-col font-mono mb-[3%] relative"
      id="about"
    >
      <div className="w-[100px] md:w-[500px] h-[450px] bg-green-700 rounded-full absolute z-0 top-[10%] left-[100%] translate-x-[-50%] translate-y-[-50%] blur-[200px] md:blur-[400px]"></div>
      <div className="w-[100px] md:w-[500px] h-[450px] bg-green-700 rounded-full absolute z-0 top-[90%] left-[0] translate-x-[-50%] translate-y-[-50%] blur-[200px] md:blur-[400px]"></div>
      <div className="max-w-[1200px] mx-auto z-10">
        <div className="flex flex-col md:flex-row justify-evenly items-center w-fit  mx-auto  rounded-xl">
          <Card>
            <div className="w-full flex justify-center items-center before:bg-white before:absolute before:content-none">
              <img
                src="/me.jpg"
                alt="me"
                className="rounded-full shadow-green-800 shadow-lg bg-[#13a0491a] w-60 h-60 md:w-72 md:h-72 object-cover border-4 border-green-500"
              />
            </div>
          </Card>

          <div className="w-full md:w-1/2 h-fit flex justify-center items-center flex-col px-[3%] py-[2%]">
            <LowCard>
              <div className="flex flex-col gap-3">
                <p className="w-auto  tracking-wide md:text-sm leading-10 ">
                  👋 Hi — I'm John Loyd, a self-taught web developer based in the
                  Philippines. I build fast, accessible, and responsive web
                  experiences.
                </p>
                <p>
                  🚀 I work with HTML, CSS (Tailwind, Bootstrap), JavaScript/
                  TypeScript, React, Next.js, Firebase, and Node.js. I'm
                  continually learning new tools and best practices to deliver
                  polished user experiences. Outside of coding, I enjoy video
                  games and building useful web projects.
                </p>
                <p>
                  💡 I enjoy collaborating on meaningful projects and solving
                  problems. If you'd like to work together or have any
                  questions, please get in touch — I'd love to hear from you.
                </p>
              </div>
            </LowCard>

            <ButtonCard>
              <button className="border border-green-500 text-green-500 bg-transparent h-10 w-36 relative rounded-md mt-5">
                <div className="absolute bottom-8 left-[135px]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                <a
                  href="https://drive.google.com/file/d/17hyiQyjIaN9cRcJy6zSC-qR9jhNU0EBC/view?usp=sharing"
                  download="Resume-John-Loyd-Belen.pdf"
                  target="_blank"
                >
                  Download CV
                </a>
              </button>
            </ButtonCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
