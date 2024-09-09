import React from "react";
import { useContext } from "react";
import CountUp from "react-countup";
import { ThemContext } from "../Contexts/ThemContext";
function CountUpCard() {
  const { isActive } = useContext(ThemContext);
  return (
    <>
      <div
        className={`${
          isActive
            ? " bg-gray-950"
            : "bg-white border border-red-800 shadow-lg shadow-gray-500"
        }   h-[12rem] md:h-auto flex justify-center items-center flex-col gap-3`}
      >
        <div
          className={`${
            isActive ? " border-white" : "border-black"
          } w-24 h-24 rounded-full border-2 flex justify-center items-center`}
        >
          <h1 className="text-3xl font-bold">
            <CountUp start={0} end={50} duration={3} />+
          </h1>
        </div>
        <h2 className="text-xl f">projects</h2>
      </div>
    </>
  );
}

export default CountUpCard;
