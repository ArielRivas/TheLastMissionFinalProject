import React from 'react';
import { Link } from "react-router-dom";


const SliderCont = ({activeIndex, sliderImages}) => {
  return (
    <section>
      {sliderImages.map((slide, index) => (
        <div
        key={index}
        className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className='slide-image' src={slide.urls} alt=""/>
          <h2 className='slide-title'>{slide.title}</h2>
          <p className='slide-text'>{slide.description}</p>
          <Link to="/videovisitplanet"><button className='button-Planet'>Visit</button></Link>
        </div>
      ))}
    </section>
  )
}

export default SliderCont;