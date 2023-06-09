import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../Components/Body/Hero';
import Img from '../assets/night.jpg';
import Footer from '../Components/Body/Footer';
import Voyage from '../Components/Body/Voyage';
const Service = () => {
  return (
    <>
      <NavBar />
      <NavBar />
      <Hero cName="hero-mid" heroImg={Img} title="Service" btnClass="hide" />
      <Voyage />
      <Footer />
    </>
  );
};

export default Service;
