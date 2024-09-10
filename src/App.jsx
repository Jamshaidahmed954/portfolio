// import { useEffect, useState } from "react";
// import "./App.css";

import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { ThemContext } from "./Contexts/ThemContext";
import { useContext } from "react";
import SkillChart from "./components/SkillChart";
import Client from "./components/Client";

function App() {
  const { isActive } = useContext(ThemContext);
  // console.log(isActive);

  return (
    <>
      <div
        className={`${
          isActive ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <Navbar />
        <Header />
        <About />
        <Skills />
        <SkillChart />
        <Service />
        <Client />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
