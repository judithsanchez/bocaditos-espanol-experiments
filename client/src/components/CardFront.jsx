import React from 'react';

function CardFront({ text, imgSrc }) {
  return (
    <div className="front card">
      <img className="front-card-image" src={imgSrc} alt={text} />
      <p className="card-text">{text}</p>
    </div>
  );
}

export default CardFront;
