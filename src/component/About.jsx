import React from "react";

const About = () => {
  return (
    <div
      className="snap-start text-white w-full min-h-[65vh] flex justify-center items-center flex-col font-mono"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-evenly items-center w-fit  mx-auto  rounded-xl">
          <div className="w-full md:w-1/2 before:bg-white before:absolute before:content-none">
            <img
              src="/me1.png"
              alt="me"
              className="rounded-full shadow-green-800 shadow-lg bg-[#13a0491a] h-[400px] w-auto sm:w-[400px]"
            />
          </div>
          <div className="w-full md:w-1/2 h-fit flex flex-col  py-[2%]">
            <h1 className="text-green-300 text-[30px] font-semibold mb-3">
              My name is
              <span className="text-[50px] bg-green-900 text-white p-3 rounded-lg">
                John Loyd
              </span>
            </h1>
            <div className="flex flex-col gap-3">
              <p className="w-auto  tracking-wide md:text-sm text-xs leading-10 ">
                👋 Hi, I'm John Loyd, a self-taught web developer from
                Philippines.
              </p>
              <p>
                🚀 I'm skilled in HTML , CSS , BOOTSTAP , TAILWIND , REACT.JS ,
                NEXT.JS , FIREBASE , and I'm always eager to learn more. Besides
                coding, I enjoy coding and designing.
              </p>
              <p>
                💡 I value collaboration and teamwork and am open to working
                together. If you have any questions or would like to work with
                me, please reach out.
              </p>
            </div>

            <button className="border border-green-500 text-green-500 bg-transparent h-10 w-36 relative rounded-md mt-5">
              <div className="absolute bottom-8 left-[135px]">
                <span className="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
