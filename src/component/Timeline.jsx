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
        damping: 7,
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
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.9,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 7,
        stiffness: 100,
        restDelta: 0.001,
      },
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
      <motion.div variants={headVariants}>{children}</motion.div>
    </motion.div>
  );
}

function TimelineCard({ children }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={timelineVariants}>{children}</motion.div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="flex min-h-screen w-full items-center justify-center pt-20"
    >
      <div className="w-full container md:max-w-md">
        <Card>
          <h2 className="text-[30px] font-semibold text-gray-300 mb-7 text-center">
            Learning Timeline
          </h2>
        </Card>
        <ul>
          <TimelineCard>
            <li
              variants={timelineVariants}
              className="relative flex flex-col items-center md:flex-row md:items-baseline gap-6 pb-5"
            >
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
              <div variants={timelineVariants}>
                <h1 className="font-semibold text-md text-white text-center md:text-left">
                  HTML & CSS
                </h1>
                <p className="text-sm text-gray-400 text-center md:text-left">
                  12-8-2022
                </p>
                <p className="mt-2 text-gray-400 text-sm text-center md:text-left">
                  HTML and CSS basics: Start by learning the fundamentals of
                  HTML and CSS, including syntax, semantics, and page structure.
                </p>
              </div>
            </li>
          </TimelineCard>{" "}
          <TimelineCard>
            <li
              variants={timelineVariants}
              className="relative flex items-baseline gap-6 pb-5"
            >
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  Responsive Design
                </h1>
                <p className="text-sm text-gray-400">28-8-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Learn how to create responsive layouts that adapt to different
                  screen sizes, using tools such as media queries and flexbox.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
            <li
              variants={timelineVariants}
              className="relative flex items-baseline gap-6 pb-5"
            >
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  JavaScript fundamentals
                </h1>
                <p className="text-sm text-gray-400">8-9-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Get familiar with the basics of JavaScript, including
                  variables, data types, functions, and control structures.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
            <li
              variants={timelineVariants}
              className="relative flex items-baseline gap-6 pb-5"
            >
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  DOM manipulation
                </h1>
                <p className="text-sm text-gray-400">27-9-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Learn how to manipulate the Document Object Model (DOM) using
                  JavaScript to create interactive web pages.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
            <li
              variants={timelineVariants}
              className="relative flex items-baseline gap-6 pb-5"
            >
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  JavaScript frameworks and libraries
                </h1>
                <p className="text-sm text-gray-400">9-10-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Once I have a good understanding of JavaScript, I can start
                  learning popular frameworks and libraries such as React. These
                  frameworks and libraries can help me create complex web
                  applications more easily and efficiently.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
            <li
              variants={timelineVariants}
              className="relative flex items-baseline gap-6 pb-5"
            >
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
              <div>
                <h1 className="font-semibold text-md text-white">NextJs</h1>
                <p className="text-sm text-gray-400">9-10-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Next.js is a React framework for building server-side rendered
                  applications. It offers features like automatic code
                  splitting, optimized performance, and SEO-friendly rendering.
                  It simplifies the development of robust web applications by
                  leveraging React's power.
                </p>
              </div>
            </li>
          </TimelineCard>
        </ul>
      </div>
    </section>
  );
}
