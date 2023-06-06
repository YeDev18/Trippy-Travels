import React from 'react';
import './HeroStyles.css';
import Img1 from '../../assets/12.jpg';
const Hero = props => {
  return (
    <>
      <div className={props.cName}>
        <img alt="HerImage" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
