import { motion, Variants } from "framer-motion";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";

const cardVariants = {
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
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};

const Hero = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById("project");
    contentElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen w-full pt-3 text-white font-mono relative bg-[url('/world.png')] inset-0  bg-cover bg-center">
      <ul className="hidden lg:flex flex-col top-[45%] transition fixed left-[0] gap-1 uppercase font-semibold text-2xl z-10 text-[#9C9C9C]">
        <li className="ml-[-109px] hover:ml-[5px]  ease-out duration-300 hover:text-cyan-500 ">
          <a
            href="https://www.facebook.com/jol0oo"
            target="_blank"
            className="flex gap-2 items-center "
          >
            <h1> Facebook</h1>
            <AiFillFacebook />
          </a>
        </li>
        <li className="ml-[-121px] hover:ml-[5px] ease-out duration-300 hover:text-[#A8274D] ">
          <a
            href="https://www.instagram.com/j0lo_o/"
            target="_blank"
            className="flex gap-2 items-center "
          >
            <h1>Instagram</h1>
            <AiFillInstagram />
          </a>
        </li>
        <li className="ml-[-80px] hover:ml-[10px]  ease-out duration-300 hover:text-white ">
          <a
            href="https://github.com/Jol0o"
            target="_blank"
            className="flex gap-2 items-center "
          >
            <h1> Github</h1>
            <AiFillGithub />
          </a>
        </li>
      </ul>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ staggerChildren: 0.5 }}
        className="relative bg-opacity-75 bg-[#090E16] flex justify-center items-center pt-24 md:pt-0 h-full w-full flex-col "
      >
        <div className="absolute w-auto top-[23%] flex justify-center items-center">
          <motion.h2
            variants={cardVariants}
            className="text-center w-fit font-bold font-mono text-[36px] whitespace-nowrap sm:text-[90px] md:text-[110px] lg:text-[140px] xl:text-[190px] uppercase"
          >
            Web Developer.
          </motion.h2>
        </div>
        <div className="absolute md:top-[23%]">
          <motion.img
            variants={cardVariants}
            src="./avatar.png"
            alt="avatar"
            className=" rounded-full bg-gradient-to-b from-[#13a049a9] to-[#45d8d85e] shadow-lg  shadow-[#13a04968] h-80 w-80 md:w-[400px] md:h-[400px] "
          />

          <motion.div
            variants={cardVariants}
            className="flex items-center cursor-auto justify-center mt-10"
          >
            <button className="text-green-500 text-xl">
              Let's get Started.
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="z-0 animate-bounce absolute left-1/2 transform -translate-x-1/2 top-[90%] rounded-full hover:bg-green-400 transition bg-[#3F8E00] py-3 px-3">
        <button onClick={scrollToContent}>
          <BsArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Hero;
