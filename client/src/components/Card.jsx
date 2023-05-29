import React from 'react';
import './Card.css';
import CardFront from './CardFront';
import CardBack from './CardBack';

function Card({ imgSrc, text }) {
  return (
    <div className="cards">
      {/* <CardBack /> */}
      <CardFront text={text} imgSrc={imgSrc} />
    </div>
  );
}

export default Card;
