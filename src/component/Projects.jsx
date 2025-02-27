import { motion } from "framer-motion";
import React, { useRef } from "react";

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

const Projects = () => {
  const info = [
    {
      name: "Food",
      img: "./project/Food.jpeg",
      tool: ["HTML", "CSS"],
      link: "https://food-hubs.netlify.app",
    },
    {
      name: "Cafe Urban",
      img: "./project/coffee.png",
      tool: ["NEXT JS", "BOOTSTRAP"],
      link: "https://cafeurban.vercel.app/",
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
      tool: ["HTML", "REACT.JS"],
      link: "https://clonespotify0.netlify.app/",
    },
    {
      name: "Kick sole",
      img: "./project/kicks.png",
      tool: ["TAILWIND", "NEXT.JS"],
      link: "https://ecommerce-nextjs-git-main-jol0o.vercel.app/?vercelToolbarCode=I9N8k6Ujw5xLJFq",
    },
    {
      name: "Ollies Pad",
      img: "./project/ollie.png",
      tool: ["WORDPRESS", "ELEMENTOR"],
      link: "https://jolo.42web.io/",
    },
    {
      name: "Play Otaku",
      img: "./project/otaku.png",
      tool: ["NEXT JS", "SUPABASE"],
      link: "https://play-otaku-ruddy.vercel.app/",
    },
    {
      name: "Gasbee",
      img: "./project/gasbee.png",
      tool: ["NEXT JS", "NODE/EXPRESS"],
      link: "https://gasbee.aap-h.com/",
    },
    {
      name: "Remimic",
      img: "./project/remimic.png",
      tool: ["MERN"],
      link: "https://remimic.com/",
    },
  ];

  return (
    <div
      className="min-h-[60vh] w-full text-white flex justify-center items-center my-16 "
      id="project"
    >
      <div className="flex flex-col container m-auto">
        <div className="flex flex-col items-center justify-center md:mx-[2%]">
          <TextCard>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-green-500 pb-2">
              Selected Projects
            </h1>
            <p className="fonr-medium text-center text-xs md:text-sm mt-2 text-gray-500">
              Here are a few of the projects I have worked on and am proud to
              showcase:
            </p>
          </TextCard>
        </div>
        <div className="max-w-[1400px] flex items-center justify-center mx-auto my-5">
          <div className="w-full min-h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-2 md:gap-10">
            {info.map((item, index) => {
              return (
                <Card key={index}>
                  <a href={item.link} target="_blank">
                    <div className="w-[200px,100%,300px] active:bg-green-900 border border-green-800 rounded-lg p-3">
                      <img
                        src={item.img}
                        alt="image"
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
                                className="text-[10px] font-semibold bg-green-800 rounded-lg p-1"
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
