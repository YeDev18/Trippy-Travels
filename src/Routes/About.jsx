import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../Components/Body/Hero';
import Img from '../assets/night.jpg';

const About = () => {
  return (
    <>
      <>
        <NavBar />
        <Hero cName="hero-mid" heroImg={Img} title="A propos" btnClass="hide" />
      </>
    </>
  );
};

export default About;
