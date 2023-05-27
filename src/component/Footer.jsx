import React from "react";

export default function Footer() {
  return (
    <div className="w-full min-h-[20vh] text-gray-300 mt-3">
      <div className="max-w-[95%] flex-col md:flex-row  flex flex-r py-10 justify-between items-center h-full mx-auto border-green-900 border-t-2">
        <div className="flex flex-col ">
          <h1 className="font-bold text-3xl mb-10">JOLO.</h1>
          <p className="font-semibold text-xs text-green-900 ">
            Designed by John loyd.
          </p>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row gap-8 font-thin text-sm">
            <li className="hover:border-2 hover:border-green-500 h-10 w-16 rounded-full flex items-center justify-center transition">
              Home
            </li>
            <li className="hover:border-2 hover:border-green-500 h-10 w-16 rounded-full flex items-center justify-center transition">
              About Me
            </li>
            <li className="hover:border-2 hover:border-green-500 h-10 w-16 rounded-full flex items-center justify-center transition">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
