import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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
      delay: 0.5,
      duration: 0.9,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
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
      delay: 0.5,
      duration: 0.9,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  },
};

function FormCard({ children }) {
  return (
    <motion.div
      className="card-container"
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1gtuhsb",
        "template_8mktrll",
        form.current,
        "u3Q7kadtI95s4wh7P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen flex justify-center items-center "
    >
      <div className="flex md:flex-row flex-col gap-5 items-center  min-h-[70vh] w-[90%] md:w-[90%] lg:w-[70%] text-gray-200 rounded-xl p-0 sm:p-10">
        <TextCard>
          <div className="md:h-full md:w-full flex flex-col  w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-green-500 mb-2">
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

        <form
          ref={form}
          id="contact-form"
          onSubmit={sendEmail}
          className="md:h-full min-h-fit flex flex-col justify-center w-full"
        >
          <FormCard>
            <label htmlFor="user_name" className="font-semibold text-xs mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="py-2 px-5 text-white caret-green-500 font-medium outline-none outline-offset-1 rounded-sm bg-[#1C1C22] mb-3"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="user_email" className="font-semibold text-xs mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Enter your email"
              className="py-2 px-5 text-white font-medium outline-none outline-offset-1 rounded-sm bg-[#1C1C22] mb-3"
              required
            />
            <label htmlFor="message" className="font-semibold text-xs mb-2">
              Tell me a bit more what you are looking for?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="min-h-[200px] py-2 px-5 text-white font-medium outline-none outline-offset-1 rounded-sm bg-[#1C1C22] mb-3"
              required
            />
            <button className="self-start h-10 w-28 bg-green-500 rounded-full shadow-md mt-3 shadow-green-500 font-bold text-lg">
              Send
            </button>
          </FormCard>
        </form>
      </div>
    </div>
  );
}
