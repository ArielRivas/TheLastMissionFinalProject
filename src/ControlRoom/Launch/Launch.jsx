import React from "react";
import "./Launch.scss";
import { Link } from "react-router-dom";
import ImgSpaceTravel from "../../assets/controlRoom//246-2460345_avatar-id-animated-rocket-in-space-gif.png"
import { useSelector } from 'react-redux';

const Launch = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <section className='container__Launch'>
      
      <div className='container__Launch-card'>
        <h3>Push the button</h3>
        <p>Reaching destination: 15 min</p>
        <span className="illustration"><img src={ImgSpaceTravel} width="200px" alt="Gif of a starship flying"></img></span>
        <span className='container__Launch-slider'></span>
        <div className='container__Launch-button'>
        <Link to={`/rocketvideos${user.video}`}>
        <button>Go</button></Link>
        </div>
        
      </div>
    </section>
  );
};

export default Launch;
