import React from "react";
import { useContext } from "react";
import { ThemContext } from "../Contexts/ThemContext";

function Footer() {
  const { isActive } = useContext(ThemContext);
  return (
    <>
      <footer
        className={`${
          isActive ? "bg-gray-800 text-white" : "bg-gray-400 text-black"
        } w-full h-24  mt-8 md:mt-0 flex justify-center flex-col items-center`}
      >
        <p>&#169; Copy Right Remel 2024 All Right reserved</p>
        <p>develped by jamshaisd ahmed </p>
        <p>phone : +923 150482505</p>
      </footer>
    </>
  );
}

export default Footer;
