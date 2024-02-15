import React from 'react';
import Hero from '../Components/Body/Hero';
import Img from '../assets/2.jpg';
import Footer from '../Components/Body/Footer';
import ContactForm from '../Components/Body/ContactForm';
import Navbar from '../Components/NavBar/NavBar';
const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={Img} title="Contact" btnClass="hide" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
