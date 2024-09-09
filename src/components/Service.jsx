import React from "react";
import ServiCard from "./ServiCard";
import ServiceCardData from "./ServiceCardData";

function Service() {
  return (
    <>
      <div className="w-full h-auto gap-16  flex justify-center items-center flex-col md:py-10 py-20">
        <h1 className="text-3xl font-bold border-b-4 border-red-500 py-3">
          Services
        </h1>
        <div className=" h-auto w-[80%] flex justify-center items-center gap-10 md:gap-6 flex-col md:flex-row flex-wrap">
          {ServiceCardData.map((data, index) => {
            return (
              <ServiCard
                img={data.img}
                title={data.title}
                animation={data.Animation}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Service;
