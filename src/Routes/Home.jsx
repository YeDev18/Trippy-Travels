import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Hero from '../Components/Body/Hero';
import Img from '../assets/12.jpg';
import Destination from '../Components/Body/Destination';
import Voyage from '../Components/Body/Voyage';
import Footer from '../Components/Body/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg={Img}
        title="TaaJournée Ton Histoire"
        text="Choisir ta destination préferée"
        buttonText="Travel plan"
        url="/"
        btnClass="hide"
      />
      <Destination />
      <Voyage />
      <Footer />
    </>
  );
};
export default Home;
