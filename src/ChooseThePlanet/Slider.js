import React, { useEffect, useState } from 'react'
import SliderCont from './SliderCont'
import Dots from './Dots'
import Arrows from './Arrows'
import sliderImages from './sliderImages'
import './Slider.scss'
const len = sliderImages.length -1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 6000);
        return () => clearInterval(interval)
    },[activeIndex])
  return (
    <div className='container-slider'>
        <SliderCont activeIndex={activeIndex} sliderImages={sliderImages}/>
        <Arrows
        prevSlide={()=>
        setActiveIndex(activeIndex < 1 ? len : activeIndex -1)}
        nextSlide={() =>
        setActiveIndex(activeIndex === len ? 0 : activeIndex +1)}/>
        <Dots
        activeIndex={activeIndex}
        sliderImages={sliderImages}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}/>
    </div>
  )
}

export default Slider;