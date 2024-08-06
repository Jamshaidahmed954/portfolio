import React from "react";
import { FaFacebookF } from "react-icons/fa";

function Headericon() {
  return (
    <>
      <div className="text-white bg-white headericon w-[55px] hover:bg-red-500 h-[130px] rotate-[45deg] z-10 -skew-y-[10deg] flex justify-center items-center relative">
        <h1 className="text-black text-5xl">
          <FaFacebookF />
        </h1>
      </div>
      <div className=" span w-4 h-[129px] rotate-[45deg] translate-y-[26px] shadow-xl shadow-white translate-x-[2.7rem] bg-gray-600 absolute -skew-y-[-40deg]"></div>
      <div className=" w-12 h-5  translate-y-[55px] translate-x-[-2.6rem] shadow-xl shadow-white bg-gray-400 absolute -skew-y-[-33deg]"></div>
    </>
  );
}

export default Headericon;
