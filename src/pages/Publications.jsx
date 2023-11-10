import React from 'react'
import Publication from '../components/Publication'
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import logoPub from "../assets/logoPub.png"

const VerticalSwiper = () => {
  return (
    <Swiper
    direction={'vertical'}
    slidesPerView={1}
    spaceBetween={30}
    mousewheel={true}
    pagination={{
      type: 'fraction',
    }}
    modules={[Mousewheel, Pagination]}
    className=" h-screen w-full  "
  >
    <SwiperSlide className='w-full h-full flex justify-center items-center ' >
    <Publication image={logoPub} subtitle="azazdazdazd" />
    </SwiperSlide>
    <SwiperSlide className=' w-full h-full  flex justify-center items-center ' >
    <Publication image={logoPub} subtitle="azazdazdazd" />
    </SwiperSlide>
    <SwiperSlide className='   flex justify-center items-center ' >
    <Publication image={logoPub} subtitle="azazdazdazd" />
    </SwiperSlide>
    <SwiperSlide className='   flex justify-center items-center ' >
    <Publication image={logoPub} subtitle="azazdazdazd" />
    </SwiperSlide>
    <SwiperSlide className='  flex justify-center items-center ' >
    <Publication image={logoPub} subtitle="azazdazdazd" />
    </SwiperSlide>
  </Swiper>
  );
};


const Publications = () => {
    
  return (
    <div className="w-full min-h-screen " >
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

     
     <div className=' w-full h-full flex justify-center items-center ' >
     <VerticalSwiper/>

     </div>
     

     
    
    
     

    </div>
  )
}

export default Publications