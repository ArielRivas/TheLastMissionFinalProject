import React from 'react';
import "./Navigation.scss"

const Navigation = () => {
  return (
    <section className='container__Navigation'>
      <div className='container__Navigation-Log'>
        <h3>Navigation log</h3>
        <p>Here you can check your navigation system</p>
      </div>
      <div className='container__Navigation-card'></div>
    </section>
  )
}

export default Navigation