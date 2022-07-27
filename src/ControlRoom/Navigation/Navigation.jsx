import React from 'react';
import "./Navigation.scss";
import { useSelector } from 'react-redux';
import vidNav from '../../assets/navigation/navigation.mp4';

const Navigation = () => {
  
  const user = useSelector(state => state.auth.user);
  return (
    <section className='container__Navigation'>
      <div className='container__Navigation-Log'>
      <h3>Navigation log</h3>
      <h3>Welcome <span className="nameNavigation">{user.userName}</span></h3>
        <p>Here you can check your navigation system</p>
        <video className='container__Navigation-card' autoPlay muted> <source src={vidNav} type='video/mp4'></source>
      Your browser does not support the video tag.</video>
      </div>
    
    </section>
  )
}

export default Navigation