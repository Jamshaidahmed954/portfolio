import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import aos from "aos";
import "aos/dist/aos.css";
import ClientData from "./ClientData";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import ClientCard from "./ClientCard";

function Client() {
  useEffect(() => {
    aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div className="w-full h-auto contact my-28">
        <div className=" h-auto flex justify-center items-center flex-col md:flex-row gap-[3%]">
          <div
            data-aos="fade-right"
            className="md:w-[38%] w-full h-auto md:h-[30rem] flex justify-center items-center flex-col gap-10 p-6"
          >
            <h1 className="md:text-4xl text-2xl font-semibold uppercase border-b-4 border-orange-600 pb-2 ">
              our client story
            </h1>
            <div className="p-6 border-l-4 border-orange-500 ">
              <p>
                With over five years of experience in web development, this
                professional has honed the skills needed to build dynamic,
                responsive websites that offer seamless user experiences.
                Proficient in both front-end and back-end technologies, such as
                React, Node.js, and MongoDB, their expertise ensures that each
                project is developed with a robust and scalable architecture.
                Their work consistently reflects a deep understanding of modern
                web technologies and best practices. Passionate about coding,
                they are always on the lookout for the latest industry trends
                and tools, ensuring that their solutions remain cutting-edge.
                This dedication to continuous learning not only keeps their
                skill set sharp but also allows them to deliver innovative
                solutions that meet the evolving needs of clients. Their ability
                to adapt to new technologies and frameworks makes them an
                invaluable asset to any development project. Beyond technical
                proficiency, they are known for their commitment to excellence
                and meticulous attention to detail. Each project is approached
                with a focus on delivering high-quality results that align with
                client expectations. Their successful track record of completed
                projects speaks to their ability to consistently meet and exceed
                project goals, contributing significantly to the success of
                every team they join.
              </p>
            </div>
          </div>
          <div className="md:w-[59%] w-full h-full flex justify-center items-center bg-gray-900 py-8">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              loop={true}
              modules={[Pagination, Autoplay]}
              //   className="mySwiper"
            >
              {ClientData.map(() => {
                return (
                  <SwiperSlide className=" flex justify-center items-center flex-col transition-all">
                    <ClientCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Client;
