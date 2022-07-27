import React from "react";
import videoRocketA from "../../../assets/controlRoom/video.mp4";
import './RocketVideos.scss';



const RocketVideos = () => {
  
  return (
    <section className='container__video-launch'>
       
      <video className="container__video-launch-a" width="70%" height="auto" autoPlay muted>
      <source src={videoRocketA} type='video/mp4'></source>
      Your browser does not support the video tag.
    </video>
    </section>
  );
};

export default RocketVideos;
