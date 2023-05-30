import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const { inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold as needed
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      ref={ref}
      className="w-full min-h-[50vh] flex flex-col items-center justify-center mt-[3%]"
    >
      <div className="text-green-400 font-bold bg-green-900 w-fit rounded-lg px-2">
        🧑‍💻 Skill & Experience
      </div>
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
              <img
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
