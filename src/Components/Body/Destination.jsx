import React from 'react';
import Mountain1 from '../../assets/1.jpg';
import Mountain2 from '../../assets/2.jpg';
import Mountain3 from '../../assets/3.jpg';
import Mountain4 from '../../assets/4.jpg';
import './DestinationStyles.css';

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Destination Populaire</h1>
        <p>
          Les visites guidées vous permettent de voir beaucoup de choses, dans
          un cadre restreint.
        </p>
        <div className="first-des">
          <div className="des-text">
            <h2>San Pedro, Côte D'Ivoire</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="image">
            <img alt="img" src={Mountain1} />
            <img alt="img" src={Mountain1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
