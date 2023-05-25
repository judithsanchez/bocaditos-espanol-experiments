import React, { useState } from 'react';
import './Card.css';
import CardFront from './CardFront';
import CardBack from './CardBack';

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
      {isFlipped ? (
        <CardFront imgSrc={imgSrc} spanish={spanish} />
      ) : (
        <CardBack />
      )}
    </div>
  );
}

export default Card;
