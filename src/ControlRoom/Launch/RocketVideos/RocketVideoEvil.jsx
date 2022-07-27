import React from 'react'
import './RocketVideos.scss';
import videoRocketB from "../../../assets/controlRoom/videoDestroRockect.mp4";

function RocketVideoEvil() {
  return (
    <section className='container__video-launch'>
       
      <video className="container__video-launch-a" width="70%" height="auto" autoPlay muted>
      <source src={videoRocketB} type='video/mp4'></source>
      Your browser does not support the video tag.
    </video>
    </section>
  )
}

export default RocketVideoEvil