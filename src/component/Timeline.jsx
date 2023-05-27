import { motion } from "framer-motion";
import React from "react";

const headVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.7,
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

const timelineVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
    x: 300,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.9,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 3,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="flex min-h-screen items-center justify-center pt-20"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ staggerChildren: 0.5 }}
        className="w-auto container md:w-80"
      >
        <motion.h2
          variants={headVariants}
          className="text-[30px] font-semibold text-gray-300 mb-7"
        >
          Learning Timeline
        </motion.h2>
        <ul>
          <li className="relative flex items-baseline gap-6 pb-5">
            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="bi bi-circle-fill fill-green-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <motion.div variants={timelineVariants}>
              <h1 className="font-semibold text-md text-white">HTML & CSS</h1>
              <p className="text-sm text-gray-400">12-8-2022</p>
              <p className="mt-2 text-gray-400 text-sm">
                HTML and CSS basics: Start by learning the fundamentals of HTML
                and CSS, including syntax, semantics, and page structure.
              </p>
            </motion.div>
          </li>
          <li className="relative flex items-baseline gap-6 pb-5">
            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="bi bi-circle-fill fill-green-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <motion.div variants={timelineVariants}>
              <h1 className="font-semibold text-md text-white">
                Responsive Design
              </h1>
              <p className="text-sm text-gray-400">12-8-2022</p>
              <p className="mt-2 text-gray-400 text-sm">
                Learn how to create responsive layouts that adapt to different
                screen sizes, using tools such as media queries and flexbox.
              </p>
            </motion.div>
          </li>

          {/* Add the remaining list items */}
        </ul>
      </motion.div>
    </section>
  );
}
