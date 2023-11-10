import React from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className=" min-h-screen h-full w-full flex flex-col justify-center items-center ">
      <div className=" fixed bottom-4 left-4 flex flex-col gap-4 justify-center items-center  ">
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
      <div className=" fixed bottom-4 right-4 flex flex-col gap-4 justify-center items-center  ">
        <p className=" text-slate-500 font-semibold ">3, place aux Huiles</p>
        <p className=" text-slate-500 font-semibold ">
          13001 Marseille, France
        </p>
        <p className=" text-slate-500 font-semibold ">+33 4 91 44 69 84</p>
        <a
          style={{ position: "relative" }}
          className=" hover:scale-110 transition duration-300 "
          href="mailto:example@gmail.com"
        >
          example@gmail.com
        </a>
      </div>
      <motion.div
      animate={{ scale: [1, 1.03, 1], transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
      className=" sm:w-[70%] w-[90%] "
      >
        
      <a
       
        style={{ position: "relative" }}
        className=" sm:text-[70px] text-[48px] hover:scale-110 transition duration-300 "
        href="mailto:example@gmail.com"
      >
        example@gmail.com
      </a>

      </motion.div>
      
      <div className=" sm:w-[70%] w-[90%] mt-6 flex flex-row justify-start md:gap-96 sm:gap-64 gap-32">
        <div className=" flex flex-col justify-start items-start  ">
          <h1 className=" text-[30px] text-black font-semibold ">Marseille:</h1>
          <div className=" flex flex-col gap-4   ">
            <p className=" text-slate-500 font-semibold ">
              3, place aux Huiles
            </p>
            <p className=" text-slate-500 font-semibold ">
              13001 Marseille, France
            </p>
            <p className=" text-slate-500 font-semibold ">+33 4 91 44 69 84</p>
            <a
              style={{ position: "relative" }}
              className=" hover:scale-110 transition duration-300 "
              href="mailto:example@gmail.com"
            >
              example@gmail.com
            </a>
          </div>
        </div>
        <div className=" flex flex-col justify-start items-start  ">
        <h1 className=" text-[30px] text-black font-semibold ">Marseille:</h1>
          <div className=" flex flex-col gap-4   ">
          <a
              style={{ position: "relative" }}
              className=" hover:scale-110 transition duration-300 "
              href="mailto:example@gmail.com"
            >
              example@gmail.com
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
