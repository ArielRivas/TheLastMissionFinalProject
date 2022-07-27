import React from 'react';
import './videovisit.scss';
import visitVid from "../assets/choose/visit pluton.mp4";
import { Link } from "react-router-dom";

const VideoVisitPlanet = () => {
  return (
    <section className='container__video-planet'>
      <video className="container__video-planet-vid" width="70%" height="auto" autoPlay muted loop>
      <source src={visitVid} type='video/mp4'></source>
      Your browser does not support the video tag.
    </video>
    <Link to="/planets"><button className='buttonVideoVisit'>Go back to the starcraft</button></Link>
    </section>
  )
}

export default VideoVisitPlanet;