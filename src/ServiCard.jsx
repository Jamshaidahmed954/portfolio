import React from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function ServiCard({ img, title, animation }) {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        data-aos={animation}
        className="md:w-[26%] w-[85%] md:h-[20rem] h-[15rem] bg hover:shadow-lg  hover:shadow-white border-2 border-red-500 rounded-md flex justify-center items-center flec-col shadow-lg "
      >
        <div className="flex justify-center items-center flex-col gap-2 ">
          <div className="text-2xl">
            <img src={img} alt="" />{" "}
          </div>
          <h1 className=" text-2xl ">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default ServiCard;
