import { motion } from "framer-motion";
import React from "react";

const topVariants = {
  offscreen: {
    opacity: 0,
    y: -100,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.9,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};

const bottomVariants = {
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
      delay: 0.4,
      duration: 0.9,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};

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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full min-h-[50vh] flex flex-col items-center justify-center mt-[3%]"
    >
      <motion.div
        variants={topVariants}
        className="text-green-400 font-bold bg-green-900 w-fit rounded-lg px-2"
      >
        🧑‍💻 Skill & Experience
      </motion.div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="my-4 font-bold text-center text-[40px] text-white">
          Technologies and skills
        </h1>
        <p className="mb-4 text-gray-500 text-sm">
          Techs I use on a daily basis.
        </p>
        <div className="flex gap-10 justify-center items-center px-[3%] flex-wrap">
          {skills.map((img) => {
            return (
              <motion.img
                variants={bottomVariants}
                src={img}
                alt="img"
                className="h-10  hover:scale-125 transition "
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
