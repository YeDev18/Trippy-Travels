import React from 'react';
import './VoyageStyles.css';

const VoyageData = props => {
  return (
    <>
      <div className="t-card">
        <div className="t-image">
          <img src={props.image} />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default VoyageData;
