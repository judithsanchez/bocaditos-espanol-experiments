import React, { useState } from 'react';
import './Card.css';

function Card({ imgSrc, spanish, english, dataIndex, id, handleCardClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`cards ${isFlipped ? 'flipped' : ''}`}
      id={dataIndex}
      onClick={() => {
        handleCardClick(dataIndex, id);
        handleCardFlip();
      }}
    >
      <div className="back card">
        <img
          alt="Bocadito's transparent logo"
          className="cards-logos back-card-content let-top-corner"
          src="/client/src/assets/logo-transparent.svg"
        />
        <div className="background-circle back-card-content">
          <img className="back-card-img" src={`/${imgSrc}`} alt="Card" />
        </div>

        <img
          alt="Bocadito's transparent logo"
          className="cards-logos right-bottom-corner back-card-content"
          src="/client/src/assets/logo-transparent.svg"
        />
      </div>

      <div className="front card">
        <img
          className="front-card-image"
          src="/client/src/assets/faces/adorable.svg"
          alt={`${english}`}
        />
        <p className="card-text">{spanish}</p>
      </div>
    </div>
  );
}

export default Card;
