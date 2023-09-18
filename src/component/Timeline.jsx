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
      delay: 0.1,
      duration: 0.7,
      ease: [0, 0.71, 0.2, 1.01],
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
      delay: 0.1,
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
      className="flex min-h-screen w-full items-center justify-center pt-20 px-2 mb-5 md:mb-0 relative"
    >
      <div className="w-[500px] h-[450px] bg-green-700 rounded-full absolute z-0 top-[30%] left-[100%] translate-x-[-50%] translate-y-[-50%] blur-[400px]"></div>
      <div className="w-full container h-full md:max-w-md">
        <Card>
          <h2 className="text-[30px] font-semibold text-gray-300 mb-7 text-center">
            Learning Timeline
          </h2>
        </Card>
        <ul>
          <TimelineCard>
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
              <div>
                <h1 className="font-semibold text-md text-white">HTML & CSS</h1>
                <p className="text-sm text-gray-400 ">July-2022</p>
                <p className="mt-2 text-gray-400 text-sm ">
                  HTML and CSS basics: Start by learning the fundamentals of
                  HTML and CSS, including syntax, semantics, and page structure.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  Responsive Design
                </h1>
                <p className="text-sm text-gray-400">August-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Learn how to create responsive layouts that adapt to different
                  screen sizes, using tools such as media queries and flexbox.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  JavaScript fundamentals
                </h1>
                <p className="text-sm text-gray-400">September-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Get familiar with the basics of JavaScript, including
                  variables, data types, functions, and control structures.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  DOM manipulation
                </h1>
                <p className="text-sm text-gray-400">September-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Learn how to manipulate the Document Object Model (DOM) using
                  JavaScript to create interactive web pages.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  JavaScript frameworks and libraries
                </h1>
                <p className="text-sm text-gray-400">October-2022</p>
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
              <div>
                <h1 className="font-semibold text-md text-white">NextJs</h1>
                <p className="text-sm text-gray-400">January 2023</p>
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
          <TimelineCard>
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  Google Firebase
                </h1>
                <p className="text-sm text-gray-400">March-2023</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Google Firebase is a non-SQL database I love using firebase
                  because of its simplicity, flexibility and easy to implement
                  in a project. And its authentication is so simple you can
                  learn them in their docs.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
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
              <div>
                <h1 className="font-semibold text-md text-white">
                  PHP and MySQL
                </h1>
                <p className="text-sm text-gray-400">March-2023</p>
                <p className="mt-2 text-gray-400 text-sm">
                  I learned basic PHP and MySQL because of our final project in
                  school we are assign to make a blog app using PHP, JavaScript,
                  MySQL and XAMP. I enjoyed using PHP because not unlike
                  JavaScript the syntax is not that complicated to understand.
                </p>
              </div>
            </li>
          </TimelineCard>
          <TimelineCard>
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
              <div>
                <h1 className="font-semibold text-md text-white">REST API</h1>
                <p className="text-sm text-gray-400">July-2023</p>
                <p className="mt-2 text-gray-400 text-sm">
                  In Nextjs we are allowed to make our own api to access the
                  database because nextjs runs in server-side. I learned to make
                  a CRUD app using REST API now I am planning to learn MonggoDB
                  for the database.
                </p>
              </div>
            </li>
          </TimelineCard>
        </ul>
      </div>
    </section>
  );
}
