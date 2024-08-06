import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import { ThemContext } from "../Contexts/ThemContext";
import { useContext } from "react";

function Header() {
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["jamshaid ahmed", " Frontend Developer", " UI/UX designer"],
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,

      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const { isActive } = useContext(ThemContext);
  return (
    <>
      <header className="w-full py-6 md:h-[56.5rem]  text-baseS h-auto flex justify-center items-center flex-co">
        <div className="md:w-1/2 w-[90%] h-auto  mx-6 md:mx-0 md:h-1/2 flex justify-center items-center flex-col md:flex-row gap-8 ">
          <div
            className={`${
              isActive ? "bg-white" : "bg-red-500"
            } image  md:w-80 w-40 h-40 md:h-80`}
          >
            <img src="../images/jamshaid3.png" alt="" />
          </div>
          <div className="md:w-[70%] w-full h-full flex justify-center md:items-start items-center gap-5 flex-col">
            <h1 className="text-4xl  font-bold">Hi its me</h1>
            <h1 className="md:text-4xl text-2xl font-bold">
              I am <span ref={element} className="text-red-500"></span>
            </h1>
            <p>
              Passionate web designer specializing in creating beautiful,
              user-friendly websites. Skilled in responsive design to ensure
              great experiences on all devices.
            </p>
            <div className=" flex w-80 ml-10 md:ml-0 ">
              <div className="w-72 h-16 flex justify-between items-center relative">
                <div className="w-16 h-full flex justify-center items-center  absolute border border-red-500  rounded-md">
                  <div className="w-14 h-[90%]  absolute border border-red-500 hover:rotate-90 rounded-md"></div>
                  <div className="w-12 h-[80%]  absolute border border-red-500 hover:rotate-[-90] rounded-md"></div>
                  <div className="hover:w-10 flex justify-center items-center hover:h-[70%] w-full h-full hover:rotate-90 transition-all hover:bg-transparent bg-red-500 absolute border border-red-500  rounded-md">
                    <FaInstagramSquare className="text-2xl  h-full transition-all hover:rotate-[-90deg]" />
                  </div>
                </div>
              </div>
              <div className="w-72 h-16 flex justify-between items-center relative">
                <div className="w-16 h-full flex justify-center items-center  absolute border border-red-500  rounded-md">
                  <div className="w-14 h-[90%]  absolute border border-red-500 hover:rotate-90 rounded-md"></div>
                  <div className="w-12 h-[80%]  absolute border border-red-500 hover:rotate-[-90] rounded-md"></div>
                  <div className="hover:w-10 flex justify-center items-center hover:h-[70%] w-full h-full hover:rotate-90 transition-all hover:bg-gray-600 bg-red-500 absolute border border-red-500  rounded-md">
                    <FaFacebookF className="text-2xl  h-full transition-all hover:rotate-[-90deg]" />
                  </div>
                </div>
              </div>
              <div className="w-72 h-16 flex justify-between items-center relative">
                <div className="w-16 h-full flex justify-center items-center  absolute border border-red-500  rounded-md">
                  <div className="w-14 h-[90%]  absolute border border-red-500 hover:rotate-90 rounded-md"></div>
                  <div className="w-12 h-[80%]  absolute border border-red-500 hover:rotate-[-90] rounded-md"></div>
                  <div className="hover:w-10 flex justify-center items-center hover:h-[70%] w-full h-full hover:rotate-90 transition-all hover:bg-gray-600 bg-red-500 absolute border border-red-500  rounded-md">
                    <FaLinkedinIn className="text-2xl  h-full transition-all hover:rotate-[-90deg]" />
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#_"
              className="relative mr-12 md:mr-0 px-6 py-3 ml-10 md:ml-0 font-bold text-white rounded-lg group "
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span className="relative">Learn more..</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
