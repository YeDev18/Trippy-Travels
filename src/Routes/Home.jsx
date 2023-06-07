import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../Components/Body/Hero';
import Img from '../assets/12.jpg';
import Destination from '../Components/Body/Destination';
import Voyage from '../Components/Body/Voyage';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg={Img}
        title="Your Journey Your Story"
        text="Chosse Your Favourite Destination"
        buttonText="Travel plan"
        url="/"
        btnClass="hide"
      />
      <Destination />
      <Voyage />
    </>
  );
};
export default Home;
