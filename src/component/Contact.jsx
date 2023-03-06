import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiTwotoneMail } from "react-icons/ai";

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
      <div className="flex md:flex-row flex-col gap-5 items-center  min-h-[70vh] w-[90%] md:w-[90%] lg:w-[70%] text-gray-200 rounded-xl p-10">
        <div className="md:h-full md:w-full flex flex-col  w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-green-500 mb-2">
            Get in touch
          </h1>
          <p className="md:w-3/4  font-normal text-sm leading-7 tracking-wide text-justify">
            Are you looking to collaborate on a project or interested in
            partnering with me? Whether you have an exciting project idea in
            mind or just want to chat about the latest tech trends, I'm always
            open to new opportunities. If you'd like to get in touch, feel free
            to use the form provided below to send me a message. I'll do my best
            to get back to you within the next 48 hours. Let's work together to
            bring your vision to life!
          </p>
          <iframe
            className="rounded-lg w-fit md:w-3/4 mt-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.787571487015!2d120.91651351518445!3d14.323768389979184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d52235528ef9%3A0x9c218ab8a5f7fdc7!2sSavannah%20Fields%20by%20Filinvest!5e0!3m2!1sen!2sph!4v1677986858090!5m2!1sen!2sph"
            height="300"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <form
          id="contact-form"
          onSubmit={sendEmail}
          className="md:h-full min-h-fit flex flex-col justify-center w-full md:w-3/4"
        >
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
          <input
            type="submit"
            value="Send"
            className="self-start h-10 w-28 bg-green-500 rounded-full shadow-md mt-3 shadow-green-500 font-bold text-lg"
          />
        </form>
      </div>
    </div>
  );
}
