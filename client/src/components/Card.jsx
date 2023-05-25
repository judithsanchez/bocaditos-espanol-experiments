import React from 'react';
import './Card.css';
import CardFront from './CardFront';
import CardBack from './CardBack';

function Card({
  imgSrc,
  spanish,
  english,
  dataIndex,
  id,
  isFlipped,
  matched,
  handleCardClick,
}) {
  const handleCardFlip = () => {
    if (!matched) {
      handleCardClick(dataIndex);
    }
  };

  return (
    <div
      className={`cards ${isFlipped ? 'flipped' : ''}`}
      id={dataIndex}
      onClick={handleCardFlip}
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
