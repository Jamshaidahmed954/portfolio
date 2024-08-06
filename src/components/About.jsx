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
      <div className="w-full md:h-[50rem]  h-[100rem] navbar flex-col flex justify-center items-center gap-14">
        <Heading />
        <div className="md:relative flex md:h-[30rem] h-[80rem] justify-between items-center rounded-xl  md:max-w-[80rem]  md:flex-row flex-col  gap-12">
          <div
            data-aos="fade-right"
            className="md:relative  md:max-h-[40rem] md:max-w-2/5 m-0 overflow-hidden bg-white bg-clip-border rounded-xl shrink-0"
          >
            <img
              src="../images/jamshaid3.png"
              alt="card-image"
              className="object-cover w-full h-full overflow-hidden"
            />
          </div>
          <div
            data-aos="fade-left"
            className="p-6 md:h-full h-[100%] flex md:w-3/4 flex-col mx-4 relative justify-center gap-8 items-center "
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

            <a
              href="#_"
              className=" px-6 py-3 font-bold  md:self-start bottom-0  md:block absolute rounded-lg "
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span className="relative">Learn more..</span>
            </a>

            {/* <button className=" text-xl bg-red-500 px-4 py-3 rounded-md hover:bg-red-400 md:hidden absolute bottom-0">
              Resume
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
