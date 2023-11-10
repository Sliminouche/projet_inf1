import React, { useState } from "react";
import Slider from "../components/Slider";
import VerticalSlider from "../components/VerticalSlider";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import { motion } from "framer-motion";
import Details from "../components/Details";

const Projet = () => {
  const [showInfos, setShowInfos] = useState(false);
  const slides = [
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  return (
    <div className="h-full flex justify-center items-center min-h-screen " >
      {!showInfos && <VerticalSlider images={slides} />}
      {showInfos && (
        <>
         <div style={{boxShadow:"0px 0px 7px white"}} className=" bg-white w-full fixed  bottom-0 z-10 overflow-hidden py-4 flex justify-start items-center lg:px-32 px-16 " >
         architecture name
      </div>
       <Details/>
        </>
        
      )}
      <div className=" fixed z-20 bottom-4 left-4 flex flex-col gap-4 justify-center items-center  ">
        <img
          src={facebook}
          alt=""
          className=" cursor-pointer hover:scale-110 transition duration-200 "
        />
        <img
          src={twitter}
          alt=""
          className=" cursor-pointer hover:scale-110 transition duration-200 "
        />
        <img
          src={linkedin}
          alt=""
          className=" cursor-pointer hover:scale-110 transition duration-200 "
        />
      </div>

      <div className=" bg-black h-20 w-20 rounded-full p-2 fixed bottom-8 z-20 right-8 flex flex-col gap-4 justify-center items-center  ">
        <motion.p
          onClick={() => setShowInfos((prev) => !prev)}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={` ${showInfos ? " line-through " : ""} hover:cursor-pointer text-white font-semibold text-[20px] `}
        >
          Infos
        </motion.p>
      </div>
    </div>
  );
};

export default Projet;
