import React from 'react';

import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Simply Silver</h1> <br />
            <h2>Proudly Handmade</h2> 
          
          <p>
           We are small but focused jewelry shop aiming at serving our customers by touching their lives through our carefully designed jewelry. We believe jewelry is more than an accessory. It is the reflection of one's own life journey.
          </p>
          <button className='btn'>Start now</button>
        </article>
        
      </div>
    </section>
  );
};

export default Hero;
