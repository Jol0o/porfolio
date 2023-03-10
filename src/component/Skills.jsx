import React from "react";

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
    <div className="w-full min-h-[30vh] flex flex-col items-center justify-center">
      <div className="text-green-400 font-bold bg-green-900 w-fit rounded-lg px-2">
        🧑‍💻 Skill & Experience
      </div>
      <div className="flex items-center flex-col">
        <h1 className="my-4 font-bold text-[40px] text-white">
          Technologies and skills
        </h1>
        <p className="mb-4 text-gray-500 text-sm">
          Techs I use on a daily basis.
        </p>
        <div className="flex gap-10">
          {skills.map((img) => {
            return (
              <img
                src={img}
                alt="img"
                className="h-10  hover:scale-125 transition "
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
