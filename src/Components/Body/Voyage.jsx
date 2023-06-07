import React from 'react';
import './VoyageStyles.css';
import VoyageData from './VoyageData';
import Voyage1 from '../../assets/5.jpg';
import Voyage2 from '../../assets/8.jpg';
import Voyage3 from '../../assets/6.jpg';

const Voyage = () => {
  return (
    <>
      <div className="trip">
        <h1>Récent Voyages</h1>
        <p>Tu peux decouvrir les coin unique en utilisant Google Maps</p>
        <div className="tripcard">
          <VoyageData
            image={Voyage1}
            heading="Voyage á Babi"
            text="It is a long established fact that a reader will be distracted by the readable content of
             a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here, content here', making it look"
          />
          <VoyageData
            image={Voyage2}
            heading="Voyage á Bouake"
            text="It is a long established fact that a reader will be distracted by the readable content of
             a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here, content here', making it look"
          />
          <VoyageData
            image={Voyage3}
            heading="Voyage á Man"
            text="It is a long established fact that a reader will be distracted by the readable content of
             a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here, content here', making it look"
          />
        </div>
      </div>
    </>
  );
};

export default Voyage;
