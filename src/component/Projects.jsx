import React from "react";

const Projects = () => {
  const info = [
    { name: "Food", img: "./project/Food.jpeg", tool: ["HTML", "CSS"] },
    { name: "K's", img: "./project/k.jpeg", tool: ["HTML ", " JS"] },
    {
      name: "Netflix.clone",
      img: "./project/netflix.jpeg",
      tool: ["TAILWIND ", " REACT.js"],
    },
    {
      name: "Spotify.clone",
      img: "./project/spotify.jpeg",
      tool: ["HTML ", "REACT.JS"],
    },
  ];
  return (
    <div
      className="min-h-[50vh] w-full  text-white flex justify-center items-center my-16"
      id="project"
    >
      <div className="flex flex-col">
        <div className="flex flex-col mx-[2%]">
          <h1 className="text-3xl md:text-5xl font-bold text-green-500  pb-2">
            Selected Projects
          </h1>
          <p className="fonr-medium text-xs md:text-sm mt-2 text-gray-500">
            Here are a few of the projects I have worked on and am proud to
            showcase:
          </p>
        </div>

        <div className="max-w-[1200px] flex items-center justify-center mx-auto my-5">
          <div className="w-full min-h-full flex items-center justify-center gap-10">
            {info.map((item) => {
              return (
                <div className="w-[500px] active:bg-green-900 border border-green-800 rounded-lg p-3">
                  <img
                    src={item.img}
                    alt="image"
                    className="w-full min-h-fit rounded-xl hover:scale-[1.02] transition"
                  />
                  <div className="flex justify-between items-center mt-2">
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
