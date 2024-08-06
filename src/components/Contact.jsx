import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="w-full h-auto relative  flex justify-center items-center flex-col md:py-14 gap-8">
        <h1 className="text-4xl font-bold border-b-4 p-3 border-red-500">
          Contact us
        </h1>
        <div className="md:w-[65%] contact w-[90%] mx-auto md:h-[35rem] h-auto  flex justify-center items-center py-12 z-10 bg-gray-700 rounded-md flex-col md:flex-row gap-8">
          <div className="md:w-1/3 w-full h-full   rounded-md flex justify-center items-center">
            <div className="w-[90%] h-[90%] flex justify-center md:items-start items-center flex-col gap-10 font-semibold">
              <div className="flex  justify-center items-center gap-3">
                <div className="bg-red-500 rounded-full p-2">
                  <IoIosCall className=" text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold">Call to us</h3>
              </div>
              <p>we are available 24/7,7 day in a week</p>
              <p>phone:+92 3019405836</p>
              <hr className="h-1 w-full bg-red-500" />
              <div className="flex w-full md:justify-start justify-center  items-center gap-3">
                <div className="bg-red-500 rounded-full p-2">
                  <IoMdMail className=" text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold">Write to us</h3>
              </div>
              <p>fillout form we contact with in 24 houres</p>
              <p>gmail:exmple@gmail.com</p>
              <p>gmail:exmple@gmail.com</p>
            </div>
          </div>
          <div className="md:w-2/3 w-full h-full rounded-md  flex justify-center items-center">
            <div className="md:w-[85%] w-[95%] h-[90%] flex flex-col gap-6">
              <div className="w-full flex justify-between items-center flex-col md:flex-row gap-6 md:gap-0 ">
                <input
                  className="bg-gray-900 p-3 rounded-sm w-full md:w-[25%]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="bg-gray-900 p-3 rounded-sm w-full md:w-[25%]"
                  type="text"
                  placeholder="Your Email.."
                />
                <input
                  className="bg-gray-900 p-3 rounded-sm w-full md:w-[25%]"
                  type="text"
                  placeholder="Your phone.."
                />
              </div>
              <div className="w-full h-72 mt-10">
                <textarea
                  className="w-full h-full p-3 rounded-sm bg-gray-900"
                  name=""
                  placeholder="Type your meassage...  "
                  id=""
                ></textarea>
              </div>
              <button className="bg-red-500 px-4 py-3  self-center rounded-sm md:self-end  ">
                Send message
              </button>
            </div>
          </div>
        </div>
        <div className="w-20 h-20 hidden md:block bg-red-600 rounded-full absolute top-32 right-[20rem]"></div>
        <div className="w-20 h-20 hidden md:block bg-red-600 rounded-full absolute bottom-32  left-96"></div>
        <div className="w-20 h-20 hidden md:block bg-red-600 rounded-full absolute top-44  left-[28rem]"></div>
      </div>
    </>
  );
}

export default Contact;
