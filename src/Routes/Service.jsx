import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../Components/Body/Hero';
import Img from '../assets/night.jpg';
const Service = () => {
  return (
    <>
      <NavBar />
      <NavBar />
      <Hero cName="hero-mid" heroImg={Img} title="Service" btnClass="hide" />
    </>
  );
};

export default Service;
