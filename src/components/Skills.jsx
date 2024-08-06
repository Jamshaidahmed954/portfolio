import React from "react";
import SkillCard from "./SkillCard";
import SkillCardData from "./SkillCardData";

function Skills() {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center flex-col gap-12">
        <h1 className="text-4xl font-bold border-b-4 p-3 border-red-500">
          Skills
        </h1>
        <div className="w-full h-auto flex justify-around items-center flex-col md:flex-row">
          <div className=" w-[69%] h-auto flex justify-around items-center flex-col md:flex-row gap-4">
            {SkillCardData.map((data, i) => {
              return (
                <SkillCard
                  key={i}
                  img={data.img}
                  title={data.title}
                  animation={data.Animation}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
