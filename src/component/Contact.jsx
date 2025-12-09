import React from "react";
import { motion } from "framer-motion";

const TextVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
    x: -20,
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

const FormVariants = {
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

function FormCard({ children }) {
  return (
    <motion.div
      className="card-container w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={FormVariants}>{children}</motion.div>
    </motion.div>
  );
}

function TextCard({ children }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={TextVariants}>{children}</motion.div>
    </motion.div>
  );
}

export default function Contact() {
  // Contact form removed intentionally to avoid abuse. Contact info shown below.

  return (
    <div
      id="contact"
      className="w-full min-h-screen flex justify-center items-center relative"
    >
      <div className="w-[200px]  md:w-[500px] h-[450px] bg-violet-900 rounded-full absolute z-0 top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px] md:blur-[400px] z-1"></div>
      <div className="flex md:flex-row flex-col gap-5 items-center  min-h-[70vh] w-[90%] md:w-[90%] lg:w-[70%] text-gray-200 rounded-xl p-0 sm:p-10 relative z-10">
        <TextCard>
          <div className="md:h-full md:w-full flex flex-col w-full ">
            <h1 className="text-3xl md:text-5xl font-bold text-violet-500 mb-2">
              Get in touch
            </h1>
            <p className="md:w-3/4  font-normal text-sm leading-7 tracking-wide text-justify">
              Are you looking to collaborate on a project or interested in
              partnering with me? Whether you have an exciting project idea in
              mind or just want to chat about the latest tech trends, I'm always
              open to new opportunities. If you'd like to get in touch, feel
              free to use the form provided below to send me a message. I'll do
              my best to get back to you within the next 48 hours. Let's work
              together to bring your vision to life!
            </p>
          </div>
        </TextCard>
        <FormCard>
          <div className="md:h-full md:w-full flex flex-col w-full justify-center">
            <h2 className="text-2xl font-semibold text-white mb-1">John Loyd Belen</h2>
            <p className="text-sm text-gray-400 mb-4">Full Stack Developer</p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:jloyd9836@gmail.com"
                className="text-violet-500 font-medium"
              >
                jloyd9836@gmail.com
              </a>

              <a href="tel:+639991502898" className="text-violet-500 font-medium">
                +63 999 150 2898
              </a>

              <a
                href="https://www.linkedin.com/in/john-loyd-belen"
                target="_blank"
                rel="noreferrer"
                className="text-violet-500"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/jloyd9836"
                target="_blank"
                rel="noreferrer"
                className="text-violet-500"
              >
                GitHub
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Prefer email or LinkedIn for inquiries. Thank you — I look
              forward to connecting.
            </p>
          </div>
        </FormCard>
      </div>
    </div>
  );
}
