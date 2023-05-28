import React, { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";

const Nav = () => {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn(!on);
  };
  return (
    <div className="w-full fixed z-10">
      <div className=" flex justify-between md:justify-center items-center h-14 text-[#9C9C9C] w-full lg:min-w-[1200px] mx-auto px-[2%] bg-[#1B1B1B] rounded-b-lg relative ">
        <div className="flex md:hidden font-semibold text-2xl">
          <h1>JOLO.</h1>
        </div>
        <ul
          className={` ${
            on ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-10 items-center justify-center  uppercase font-semibold md:bg-none bg-[#1B1B1B] w-full absolute top-[70%] left-0 pb-4 rounded-b-lg`}
        >
          <li>
            <a
              href="#"
              onClick={toggle}
              className="hover:text-[#3F8E00] active:text-[#3F8E00]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={toggle}
              className="hover:text-[#3F8E00]"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggle} className="hover:text-[#3F8E00]">
              About Me
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              onClick={toggle}
              className="hover:text-[#3F8E00]"
            >
              Timeline
            </a>
          </li>
          <a href="#contact" onClick={toggle}>
            <li className="hover:text-[#3F8E00]">Contact</li>
          </a>
        </ul>
        <div onClick={toggle} className="flex md:hidden cursor-pointer text-xl">
          <AiOutlineAlignRight />
        </div>
      </div>
    </div>
  );
};

export default Nav;
