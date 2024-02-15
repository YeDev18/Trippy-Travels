import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Hero from '../Components/Body/Hero';
import Img from '../assets/night.jpg';
import Footer from '../Components/Body/Footer';
import AboutUs from '../Components/Body/AboutUs';

const About = () => {
  return (
    <>
      <>
        <NavBar />
        <Hero cName="hero-mid" heroImg={Img} title="A propos" btnClass="hide" />
        <AboutUs />
        <Footer />
      </>
    </>
  );
};

export default About;
