import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../Components/Body/Hero';
import Img from '../assets/2.jpg';
import Footer from '../Components/Body/Footer';
import ContactForm from '../Components/Body/ContactForm';
const Contact = () => {
  return (
    <>
      <NavBar />
      <NavBar />
      <Hero cName="hero-mid" heroImg={Img} title="Contact" btnClass="hide" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
