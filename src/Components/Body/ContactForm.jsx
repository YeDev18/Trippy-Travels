import React from 'react';
import './ContactFormStyles.css';

const ContactForm = () => {
  return (
    <>
      <div className="from-container">
        <h1>Envoyez-un message to us</h1>
        <form>
          <input placeholder="Non" />
          <input placeholder="Email" />
          <input placeholder="Sujet " />
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Envoyez Message</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
