import React from 'react';
import './Card.css';

function Card({ imgSrc }) {
  return (
    <div className="cards">
      <div className="front card"></div>
      <div className="back card">
        <img className="card-img" src={`/${imgSrc}`} alt="Card" />
      </div>
    </div>
  );
}

export default Card;
