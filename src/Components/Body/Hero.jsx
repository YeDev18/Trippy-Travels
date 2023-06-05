import React from 'react';
import './HeroStyles.css';
import Img1 from '../../../public/assets/12.jpg';
const Hero = () => {
  return (
    <>
      <div className="hero">
        <img alt="HerImage" src={Img1} />
      </div>
    </>
  );
};

export default Hero;
