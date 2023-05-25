import React from 'react';

function CardFront({ imgSrc, spanish }) {
  return (
    <div className="front card">
      <img className="front-card-image" src={imgSrc} alt={spanish} />
      <p className="card-text">{spanish}</p>
    </div>
  );
}

export default CardFront;
