import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './Carousel.scss';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <button className='buttonSlider' onClick={prevSlide}>GO!</button> 

	  {SliderData.map((slide, index) => {
        return (

		
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
			<>
			  <p className='carouselSubtitle'>{slide.subtitle}</p>	
			  <h3 className='carouselTitle' >{slide.title}</h3>
              <img src={slide.image} alt='traveling from space' className='image' />

			</>	  
            )}
          </div>
				
	  
        );
      })}

      <button className='buttonSlider' onClick={nextSlide}>GO!</button>
    </section>
  );
};

export default Carousel;