import React, { useEffect } from 'react'
import SectionWrapper from "../hoc/SectionWrapper"
import {motion} from "framer-motion"
import { slideIn } from '../utils/motion'
import pub from "../assets/logoPub.png"

const Publication = ({image,subtitle}) => {
  return (
    <section className=' w-full h-full flex justify-center items-center gap-10 ' >
        <div
        className={`w-full flex sm:flex-row flex-col gap-10 justify-around items-center overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=" bg-black-100 rounded-2xl"
        >
            <motion.img src={image} className=' w-44 h-44 object-contain ' />
          
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="">
        <motion.p className=' text-[60px] ' >{subtitle}</motion.p>
        </motion.div>
      </div>
        
        

    </section>
  )
}

export default SectionWrapper(Publication,"")