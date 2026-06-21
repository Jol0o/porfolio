import React, { Suspense } from 'react';
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BsArrowDown, BsLinkedin } from "react-icons/bs";
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import { profile, social } from "../data/portfolio";

const cardVariants = {
  offscreen: { opacity: 0, scale: 0.5 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1, duration: 0.9, ease: [0, 0.71, 0.2, 1.01] },
  },
};

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { href: social.facebook,  label: "Facebook Profile",  icon: <AiFillFacebook />,  color: "hover:text-cyan-500",   ml: "ml-[-109px]" },
    { href: social.instagram, label: "Instagram Profile", icon: <AiFillInstagram />, color: "hover:text-[#A8274D]",  ml: "ml-[-121px]" },
    { href: social.github,    label: "GitHub Profile",    icon: <AiFillGithub />,    color: "hover:text-white",       ml: "ml-[-80px]"  },
    { href: social.linkedin,  label: "LinkedIn Profile",  icon: <BsLinkedin />,      color: "hover:text-white",       ml: "ml-[-109px]" },
  ];

  const labelMap = { facebook: "Facebook", instagram: "Instagram", github: "Github", linkedin: "Linkedin" };

  return (
    <div id="home" className="h-screen w-full pt-3 text-white font-mono relative inset-0">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/20">Loading 3D Scene...</div>}>
          <Spline scene="https://prod.spline.design/0Lmua0ew9jjhiMNX/scene.splinecode" />
        </Suspense>
      </div>

      {/* Desktop sidebar social links */}
      <ul className="hidden lg:flex flex-col top-[45%] transition fixed left-[0] gap-1 uppercase font-semibold text-2xl z-10 text-[#9C9C9C]">
        {socialLinks.map(({ href, label, icon, color, ml }) => (
          <li key={label} className={`${ml} hover:ml-[5px] ease-out duration-300 ${color}`}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex gap-2 items-center">
              <span>{label.split(" ")[0]}</span>
              {icon}
            </a>
          </li>
        ))}
      </ul>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ staggerChildren: 0.5 }}
        className="relative bg-opacity-75 bg-[#090E16] flex justify-center items-center pt-24 md:pt-0 h-full w-full flex-col"
      >
        <div className="absolute w-auto top-[23%] flex flex-col justify-center items-center select-none z-10">
          <motion.h3
            variants={cardVariants}
            className="text-center w-fit font-sans font-medium tracking-[0.2em] text-sm md:text-xl text-gray-300 mb-4 uppercase"
          >
            {profile.name}
          </motion.h3>
          <motion.h2
            variants={cardVariants}
            className="text-center w-fit font-sans font-black tracking-tighter text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] uppercase italic"
          >
            {profile.title}
          </motion.h2>

          {/* Mobile social links — visible below lg */}
          <motion.div
            variants={cardVariants}
            className="flex lg:hidden gap-5 mt-8 text-2xl text-gray-400"
          >
            {socialLinks.map(({ href, label, icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`transition ${color}`}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="z-1 animate-bounce absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[90%] rounded-full hover:bg-violet-400 transition bg-violet-500 py-3 px-3">
        <button onClick={scrollToContent} aria-label="Scroll to projects">
          <BsArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Hero;
