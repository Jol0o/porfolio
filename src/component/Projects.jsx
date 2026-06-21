import { motion } from "framer-motion";
import React from "react";
import { projects } from "../data/portfolio";

const cardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
    x: 100,
  },
  onscreen: {
    opacity: 1,
    x: 0,
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
  },
  onscreen: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.7,
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

// Neutral inline placeholder shown if a project image is missing.
const IMG_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220'><rect width='100%' height='100%' fill='#1e1033'/><text x='50%' y='50%' fill='#a78bfa' font-family='sans-serif' font-size='16' text-anchor='middle' dominant-baseline='middle'>Preview coming soon</text></svg>`
  );

const Projects = () => {
  const info = projects;

  return (
    <div
      className="min-h-[60vh] w-full text-white flex justify-center items-center my-16 "
      id="project"
    >
      <div className="flex flex-col container m-auto">
        <div className="flex flex-col items-center justify-center md:mx-[2%]">
          <TextCard>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-violet-500 pb-2">
              Selected Projects
            </h1>
            <p className="fonr-medium text-center text-xs md:text-sm mt-2 text-gray-500">
              Here are a few of the projects I have worked on and am proud to
              showcase:
            </p>
          </TextCard>
        </div>
        <div className="max-w-[1400px] flex items-center justify-center mx-auto my-5">
          <div className="w-full min-h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 items-center justify-center gap-2 md:gap-10">
            {info.map((item, index) => {
              return (
                <Card key={index}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="w-[200px,100%,400px] active:bg-violet-900 border border-violet-800 rounded-lg p-3">
                      <img
                        src={item.img}
                        alt={item.alt || item.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          if (e.currentTarget.src !== IMG_FALLBACK) {
                            e.currentTarget.src = IMG_FALLBACK;
                          }
                        }}
                        className="w-full min-h-[100px] object-cover rounded-xl hover:scale-[1.02] transition"
                      />

                      <div className="flex justify-between md:flex-row flex-col items-center mt-2">
                        <div>
                          <h1 className="font-semibold text-sm">{item.name}</h1>
                        </div>
                        <div className="flex  gap-2">
                          {item.tool.map((tool) => {
                            return (
                              <h1
                                key={tool}
                                className="text-[10px] font-semibold bg-violet-800 rounded-lg p-1"
                              >
                                {tool}
                              </h1>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
