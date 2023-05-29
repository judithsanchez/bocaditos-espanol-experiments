import React, { useState } from 'react';
import './Card.css';
import CardFront from './CardFront';
import CardBack from './CardBack';

function Card({ imgSrc, text }) {
  const [isCardFlipped, setCardFlipped] = useState(false);

  const handleCardClick = () => {
    setCardFlipped(true);
  };

  return (
    <div className="cards" onClick={handleCardClick}>
      {isCardFlipped ? <CardFront text={text} imgSrc={imgSrc} /> : <CardBack />}
    </div>
  );
}

export default Card;
