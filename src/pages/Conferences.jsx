import React from 'react'
import { fadeIn } from '../utils/motion';
import {motion} from "framer-motion"
import SectionWrapper from '../hoc/SectionWrapper';
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

const ConferenceCard = ({
    index,
    title,
    subtitle,
   
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
  
          <div className=' justify-center items-center  flex flex-col gap-4 '>
            <h3 className=' font-bold text-[30px]'>{title}</h3>
            <p className='mt-2 text-secondary text-[25px]'>{subtitle}</p>
          </div>

       
      </motion.div>
    );
  };

const Conferences = () => {
    const tmp = [
        {
            title:"Arc-en-Rêve (Bordeaux, FR) - March 12, 2020",
            subtitle:"Discussion between Rudy Ricciotti and Philippe Trétiack led by Francine Fort as part of the exhibition MEFI - Le Stadium, Rudy Ricciotti"

        },
        {
            title:"Arc-en-Rêve (Bordeaux, FR) - March 12, 2020",
            subtitle:"Discussion between Rudy Ricciotti and Philippe Trétiack led by Francine Fort as part of the exhibition MEFI - Le Stadium, Rudy Ricciotti"

        },
        {
            title:"Arc-en-Rêve (Bordeaux, FR) - March 12, 2020",
            subtitle:"Discussion between Rudy Ricciotti and Philippe Trétiack led by Francine Fort as part of the exhibition MEFI - Le Stadium, Rudy Ricciotti"

        },
        {
            title:"Arc-en-Rêve (Bordeaux, FR) - March 12, 2020",
            subtitle:"Discussion between Rudy Ricciotti and Philippe Trétiack led by Francine Fort as part of the exhibition MEFI - Le Stadium, Rudy Ricciotti"

        },
        {
            title:"Arc-en-Rêve (Bordeaux, FR) - March 12, 2020",
            subtitle:"Discussion between Rudy Ricciotti and Philippe Trétiack led by Francine Fort as part of the exhibition MEFI - Le Stadium, Rudy Ricciotti"

        },
        {
            title:"Arc-en-Rêve (Bordeaux, FR) - March 12, 2020",
            subtitle:"Discussion between Rudy Ricciotti and Philippe Trétiack led by Francine Fort as part of the exhibition MEFI - Le Stadium, Rudy Ricciotti"

        },
        {
            title:"Arc-en-Rêve (Bordeaux, FR) - March 12, 2020",
            subtitle:"Discussion between Rudy Ricciotti and Philippe Trétiack led by Francine Fort as part of the exhibition MEFI - Le Stadium, Rudy Ricciotti"

        },

    ]
  return (
    <div className=' w-full min-h-screen flex justify-center items-start ' >
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

      <div className=' fixed bottom-4 right-4 flex flex-col gap-4 justify-center items-center  ' >
      <p className=' text-slate-500 font-semibold ' >3, place aux Huiles</p>
      <p className=' text-slate-500 font-semibold '>13001 Marseille, France</p>
      <p className=' text-slate-500 font-semibold '>+33 4 91 44 69 84</p>
      <a style={{position:'relative'}} className=' hover:scale-110 transition duration-300 ' href="mailto:example@gmail.com">example@gmail.com</a>

     </div>
          <div className=' px-16 mt-20 flex flex-col gap-20'>
        {tmp.map((project, index) => (
          <ConferenceCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Conferences,"")