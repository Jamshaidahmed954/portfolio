import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Heading from "../Heading";
function About() {
  useEffect(() => {
    aos.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <div className="w-full h-[70rem]  flex-col flex justify-center items-center gap-14">
        <Heading />
        <div className="md:relative flex md:h-[30rem] h-auto justify-between items-center rounded-xl  md:max-w-[80rem]  md:flex-row flex-col  gap-12">
          <div
            data-aos="fade-right"
            className="md:relative  md:max-h-[40rem] md:max-w-2/5 m-0 overflow-hidden bg-white bg-clip-border rounded-xl shrink-0  hidden md:block"
          >
            <img
              src="../images/jamshaid3.png"
              alt="card-image"
              className="object-cover w-full h-full overflow-hidden"
            />
          </div>
          <div
            data-aos="fade-left"
            className="p-6  md:h-[100%] flex md:w-3/4 flex-col items-center mx-4 relative justify-center gap-8 "
          >
            <p>
              I am a dedicated frontend developer with a passion for creating
              engaging and responsive websites. With a strong foundation in
              HTML, CSS, JavaScript, and React, I excel at turning complex
              problems into intuitive and visually appealing solutions. My
              expertise ensures seamless user experiences across all devices,
              from desktops to mobile phones.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new design trends,
              contributing to open-source projects, and sharing my knowledge
              with the developer community. I am excited to bring my creativity
              and technical skills to new challenges and opportunities.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new design trends,
              contributing to open-source projects, and sharing my knowledge
              with the developer community. I am excited to bring my creativity
              and technical skills to new challenges and opportunities.
            </p>

            <button className=" text-xl w-1/3 bg-transparent px-4 py-3 rounded-md hover:bg-red-700 md:hidden  bottom-0">
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
