import React,{useState} from "react";
import {TiChevronLeftOutline, TiChevronRightOutline} from "react-icons/ti"
import "./Carousel.css"
import SectionWrapper from "../hoc/SectionWrapper"

const CARDS = 10;
const MAX_VISIBILITY = 3;
const Card = ({image}) => (
    <div className='h-full w-full bg-slate-100 rounded-[5px] transition duration-300 ease-in-out text-black'>
        <img src={image} alt="" className=" rounded-md h-full w-full object-cover "  />
    </div>
  );
const Carousel = ({children}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    
    return (
      <div className='carousel h-[70vh] w-[50%] '>
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
        {React.Children.map(children, (child, i) => (
          <div className='card-container' style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
      </div>
    );
  };

const VerticalSlider = ({ images }) => {
  return (
    <div className=" h-screen w-full flex justify-center items-center overflow-hidden " >
         <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card title={'Card ' + (i + 1)} image={images[i]} />
      ))}
    </Carousel>


    </div>
   
  );
};

export default VerticalSlider;
