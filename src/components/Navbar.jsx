import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemContext } from "../Contexts/ThemContext";
import { useContext } from "react";
function Navbar() {
  const [isactive, setisactive] = useState(true);
  const handlenav = () => {
    setisactive(false);
  };
  const handlenavebar = () => {
    setisactive(true);
  };
  const { isActive, toggle } = useContext(ThemContext);

  return (
    <>
      <nav className="w-full h-20 top-0 left-0  flex justify-around items-center bg-gray-900 text-white px-4 sticky shadow-md shadow-gray-500 navbar z-50">
        <div className="flex justify-center items-center gap-4">
          <div className=" image md:w-16 w-10 h-10 md:h-16 rounded-full bg-red-500">
            <img src="../images/jamshaid3.png" alt="" />
          </div>
          <h1 className="md:text-xl ">jamshaid ahmed</h1>
        </div>
        <div>
          <ul className="md:flex justify-center items-center gap-6 hidden">
            <a href="">
              <li className="text-xl hover:border-b-2 hover:border-red-500">
                Home
              </li>
            </a>
            <a href="">
              <li className="text-xl hover:border-b-2 hover:border-red-500">
                About
              </li>
            </a>
            <a href="">
              <li className="text-xl hover:border-b-2 hover:border-red-500">
                Skills
              </li>
            </a>
            <a href="">
              <li className="text-xl hover:border-b-2 hover:border-red-500">
                Portfolio
              </li>
            </a>
            <a href="">
              <li className="text-xl hover:border-b-2 hover:border-red-500">
                Contact
              </li>
            </a>
          </ul>
        </div>

        <div>
          <div className="flex justify-center items-center gap-4 transition-all">
            <RxHamburgerMenu
              onClick={handlenav}
              className="text-white md:hidden text-4xl"
            />
            <div className="flex justify-center items-center md:gap-10 gap-8">
              <button className=" md:text-xl hover:bg-red-500 transition-colors  md:px-4 md:py-3 px-1 py-1  border-2  border-red-500 rounded-md bg:transparent">
                Resume
              </button>
              <div className=" flex justify-center items-center">
                <MdOutlineLightMode
                  onClick={toggle}
                  className={`${
                    isActive ? "block" : "hidden"
                  } absolute text-2xl `}
                />
                <MdDarkMode
                  onClick={toggle}
                  className={`${
                    isActive ? "hidden" : "block"
                  } absolute text-2xl `}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={` ${
          isactive ? "top-[-50%]" : "top-20"
        }  w-full h-[20rem] text-white z-40 fixed responsivenav md:hidden`}
      >
        <ul className="flex justify-center items-center flex-col  gap-6  h-full  items-centerw-full">
          <a href="">
            <li className="text-xl hover:border-b-2 hover:border-red-500">
              Home
            </li>
          </a>
          <a href="">
            <li className="text-xl hover:border-b-2 hover:border-red-500">
              About
            </li>
          </a>
          <a href="">
            <li className="text-xl hover:border-b-2 hover:border-red-500">
              Skills
            </li>
          </a>
          <a href="">
            <li className="text-xl hover:border-b-2 hover:border-red-500">
              Portfolio
            </li>
          </a>
          <a href="">
            <li className="text-xl hover:border-b-2 hover:border-red-500">
              Contact
            </li>
          </a>
        </ul>
        <div
          onClick={handlenavebar}
          className="h-8 w-8 absolute top-2 right-2 grid place-items-center"
        >
          <MdOutlineCancel className="text-4xl" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
