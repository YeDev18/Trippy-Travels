import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../Components/Body/Hero';
import Img from '../assets/2.jpg';
const Contact = () => {
  return (
    <>
      <NavBar />
      <NavBar />
      <Hero cName="hero-mid" heroImg={Img} title="Contact" btnClass="hide" />
    </>
  );
};

export default Contact;
