import React from 'react';
import "./Navigation.scss";
import { useSelector } from 'react-redux';

const Navigation = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <section className='container__Navigation'>
      <div className='container__Navigation-Log'>
      <h3>Navigation log</h3>
      <h3>Welcome <span className="nameNavigation">{user.userName}</span></h3>
        <p>Here you can check your navigation system</p>
      </div>
      <div className='container__Navigation-card'></div>
    </section>
  )
}

export default Navigation