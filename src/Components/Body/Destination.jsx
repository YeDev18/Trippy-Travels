import React from 'react';
import Mountain1 from '../../assets/1.jpg';
import Mountain2 from '../../assets/2.jpg';
import Mountain3 from '../../assets/3.jpg';
import Mountain4 from '../../assets/4.jpg';
import Mountain5 from '../../assets/5.jpg';
import Mountain6 from '../../assets/6.jpg';
import './DestinationStyles.css';
import DestinationData from './DestinationData';

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Destination Populaire</h1>
        <p>
          Les visites guidées vous permettent de voir beaucoup de choses, dans
          un cadre restreint.
        </p>
        <DestinationData
          heading="San Pédro, Cote d'Ivoire"
          text="   Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          img1={Mountain1}
          img2={Mountain2}
          className="first-des"
        />

        <DestinationData
          heading="Abgoville, Cote d'Ivoire"
          text="   Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          img1={Mountain3}
          img2={Mountain4}
          className="first-des-reverse"
        />

        <DestinationData
          heading="Île Bouley, Cote d'Ivoire"
          text="   Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          img1={Mountain5}
          img2={Mountain6}
          className="first-des"
        />
      </div>
    </>
  );
};

export default Destination;
