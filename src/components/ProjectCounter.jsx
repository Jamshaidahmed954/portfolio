import React from "react";
import CountUpCard from "./CountUpCard";

function ProjectCounter() {
  return (
    <>
      <div className="md:w-3/4 mx-8 w-[90%] mx-aut grid md:grid-cols-4 grid-cols-1 md:h-56 gap-2 ">
        <CountUpCard />
        <CountUpCard />
        <CountUpCard />
        <CountUpCard />
      </div>
    </>
  );
}

export default ProjectCounter;
