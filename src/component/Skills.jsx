import { motion, useInView } from "framer-motion";
import React from "react";
import { AnimatedIcons } from './AnimatedIcons';

const cardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
    y: -100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.9,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const lowcardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.9,
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
      <motion.div variants={cardVariants}>{children}</motion.div>
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
      <motion.div variants={lowcardVariants}>{children}</motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const skills = [
    "/Skill/Github.png",
    "/Skill/Group 1.png",
    "/Skill/HTML5.png",
    "/Skill/Javascript.png",
    "/Skill/Nextjs.png",
    "/Skill/Shape.png",
    "/Skill/TailwindCSS.png",
    "/Skill/Vector.png",
  ];
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center mt-20">
      <Card>
        <div className="flex items-center justify-center">
          <div className="text-green-400 self-center font-bold bg-green-900 w-fit rounded-lg px-2">
            🧑‍💻 Skill & Experience
          </div>
        </div>
      </Card>

      <div className="flex items-center justify-center flex-col">
        <h1 className="my-4 font-bold text-center text-[40px] text-white">
          Technologies and skills
        </h1>
        <p className="mb-4 text-gray-500 text-sm">
          Techs I use on a daily basis.
        </p>
        <LowCard>
          <div className="flex gap-10 justify-center items-center px-[3%] flex-wrap">
            <AnimatedIcons />
          </div>
        </LowCard>
      </div>
    </div>
  );
}
