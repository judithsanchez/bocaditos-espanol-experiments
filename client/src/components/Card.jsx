import React from 'react';
import './Card.css';

function Card({ imgSrc, spanish, english }) {
  return (
    <div className="cards">
      <div className="back card">
        <img
          alt="Bocadito's transparent logo"
          className="cards-logos"
          src="/client/src/assets/logo-transparent.svg"
        />
        <div className="background-circle">
          <img className="back-card-img" src={`/${imgSrc}`} alt="Card" />
        </div>

        <img
          alt="Bocadito's transparent logo"
          className="cards-logos right-bottom-corner"
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
