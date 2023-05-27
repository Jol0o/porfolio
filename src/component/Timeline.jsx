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
    x: 100,
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
        damping: 5,
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
      class="flex min-h-screen items-center justify-center pt-20"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ staggerChildren: 0.5 }}
        class="w-auto container md:w-80"
      >
        <motion.h2
          variants={headVariants}
          class="text-[30px] font-semibold text-gray-300 mb-7"
        >
          Learning Timeline
        </motion.h2>
        <ul>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-green-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <motion.div variants={timelineVariants}>
              <h1 className="font-semibold text-md text-white">HTML & CSS</h1>
              <p class="text-sm text-gray-400">12-8-2022</p>
              <p class="mt-2 text-gray-400 text-sm">
                HTML and CSS basics: Start by learning the fundamentals of HTML
                and CSS, including syntax, semantics, and page structure.
              </p>
            </motion.div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-green-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <motion.div variants={timelineVariants}>
              <h1 className="font-semibold text-md text-white">
                Responsive Design
              </h1>
              <p class="text-sm text-gray-400">28-8-2022</p>
              <p class="mt-2 text-gray-400 text-sm">
                Learn how to create responsive layouts that adapt to different
                screen sizes, using tools such as media queries and flexbox.
              </p>
            </motion.div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-green-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <motion.div variants={timelineVariants}>
              <h1 className="font-semibold text-md text-white">
                JavaScript fundamentals
              </h1>
              <p class="text-sm text-gray-400">8-9-2022</p>
              <p class="mt-2 text-gray-400 text-sm">
                Get familiar with the basics of JavaScript, including variables,
                data types, functions, and control structures.
              </p>
            </motion.div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-green-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <motion.div variants={timelineVariants}>
              <h1 className="font-semibold text-md text-white">
                DOM manipulation
              </h1>
              <p class="text-sm text-gray-400">27-9-2022</p>
              <p class="mt-2 text-gray-400 text-sm">
                Learn how to manipulate the Document Object Model (DOM) using
                JavaScript to create interactive web pages.
              </p>
            </motion.div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-green-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <motion.div variants={timelineVariants}>
              <h1 className="font-semibold text-md text-white">
                JavaScript frameworks and libraries
              </h1>
              <p class="text-sm text-gray-400">9-10-2022</p>
              <p class="mt-2 text-gray-400 text-sm">
                Once I have a good understanding of JavaScript, I can start
                learning popular frameworks and libraries such as React. These
                frameworks and libraries can help me create complex web
                applications more easily and efficiently.
              </p>
            </motion.div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-green-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <motion.div variants={timelineVariants}>
              <h1 className="font-semibold text-md text-white">NextJs</h1>
              <p class="text-sm text-gray-400">9-2-2023</p>
              <p class="mt-2 text-gray-400 text-sm">
                When i finish my reactjs journey i starter to learn Its
                framework which is the nextjs. I started at new release version
                13. Next.js is a framework built on top of React that allows you
                to build server-side rendered React applications with ease. It
                provides many features out of the box, such as automatic code
                splitting, optimized performance, and SEO-friendly rendering.
              </p>
            </motion.div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-green-500"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <motion.div variants={timelineVariants}>
              <h1 className="font-semibold text-md text-white">Tailwind CSS</h1>
              <p class="text-sm text-gray-400">15-2-2023</p>
              <p class="mt-2 text-gray-400 text-sm">
                Tailwind is a popular utility-first CSS framework that can help
                streamline the process of styling web pages. By using Tailwind,
                developers can quickly create responsive and visually appealing
                designs by applying pre-defined classes to HTML elements.
                Learning Tailwind involves understanding its core concepts, such
                as the grid system and utility classes, as well as its extensive
                library of pre-defined styles. With Tailwind, developers can
                focus on building functionality and let the framework handle the
                styling, resulting in faster and more efficient development.
              </p>
            </motion.div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
