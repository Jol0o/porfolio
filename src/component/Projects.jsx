import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  const info = [
    {
      name: "Food",
      img: "./project/Food.jpeg",
      tool: ["HTML", "CSS"],
      link: "https://food-hubs.netlify.app",
    },
    {
      name: "Todo",
      img: "./project/todo.png",
      tool: ["FIREBASE", "REACT"],
      link: "https://nexttodoapp.netlify.app/",
    },
    {
      name: "K's",
      img: "./project/k.jpeg",
      tool: ["HTML ", " JS"],
      link: "https://kproject.netlify.app",
    },
    {
      name: "KFC",
      img: "./project/kfc.png",
      tool: ["HTML", "REACTJS"],
      link: "https://kfc-cloner.netlify.app/",
    },
    {
      name: "NetMovies.clone",
      img: "./project/netflix.jpeg",
      tool: ["TAILWIND ", " REACT.js"],
      link: "https://netmov.netlify.app",
    },
    {
      name: "Spotify.clone",
      img: "./project/spotify.jpeg",
      tool: ["HTML ", "REACT.JS"],
    },
  ];

  return (
    <div
      className="min-h-[60vh] snap-start w-full text-white flex justify-center items-center my-16"
      id="project"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center mx-[2%]">
          {isInView && (
            <motion.h1
              key="project"
              initial={{ opacity: 0, scale: 0.5, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                type: "spring",
                damping: 8,
                stiffness: 100,
              }}
              className="text-3xl md:text-5xl font-bold text-green-500 pb-2"
            >
              Selected Projects
            </motion.h1>
          )}
          <p className="fonr-medium text-center text-xs md:text-sm mt-2 text-gray-500">
            Here are a few of the projects I have worked on and am proud to
            showcase:
          </p>
        </div>
        <div className="max-w-[1400px] flex items-center justify-center mx-auto my-5">
          <div className="w-full min-h-full flex flex-wrap items-center justify-center gap-10">
            {info.map((item) => {
              return (
                <a href={item.link} target="_blank">
                  <div className="w-[270px  ] sm:w-[300px] active:bg-green-900 border border-green-800 rounded-lg p-3">
                    {isInView && (
                      <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0, rotate: [0, 10, 0] }}
                        transition={{
                          duration: 0.7,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                          scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                          },
                        }}
                        src={item.img}
                        alt="image"
                        className="w-full min-h-fit rounded-xl hover:scale-[1.02] transition"
                      />
                    )}
                    {isInView && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.7,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                          scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                          },
                        }}
                        className="flex justify-between items-center mt-2"
                      >
                        <div>
                          <h1 className="font-semibold text-sm">{item.name}</h1>
                        </div>
                        <div className="flex gap-2">
                          {item.tool.map((tool) => {
                            return (
                              <h1 className="text-[10px] font-semibold bg-green-800 rounded-lg p-1">
                                {tool}
                              </h1>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
