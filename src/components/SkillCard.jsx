import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
function SkillCard({ img, title, animation }) {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        data-aos={animation}
        className="flex justify-center items-center flex-col gap-4"
      >
        <div className="w-[10rem] h-[10rem] bg-white rounded-md flex justify-center items-center">
          <img
            className="object-cover overflow-hidden rounded-md "
            src={img}
            alt=""
          />
        </div>
        <h1 className="text-2xl">{title}</h1>
      </div>
    </>
  );
}

export default SkillCard;
