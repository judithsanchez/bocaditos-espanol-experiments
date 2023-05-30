import React, { useState, useEffect } from 'react';
import './Card.css';
import CardFront from './CardFront';
import CardBack from './CardBack';
function Card({ imgSrc, text, handleCardClickCallback, isMatch }) {
  const [isCardFlipped, setCardFlipped] = useState(false);
  const [matchedFound, setMatchedFound] = useState(false);

  const handleCardClick = () => {
    setCardFlipped(true);
    handleCardClickCallback();
  };

  useEffect(() => {
    if (matchedFound === true) {
      return;
    }

    if (isCardFlipped) {
      if (isMatch === 'not a match') {
        setTimeout(() => {
          setCardFlipped(false);
        }, 2000);
      } else if (isMatch === 'match') {
        setMatchedFound(true);
      }
    }
  }, [isCardFlipped, isMatch]);

  return (
    <div className="cards" onClick={handleCardClick}>
      {isCardFlipped ? <CardFront text={text} imgSrc={imgSrc} /> : <CardBack />}
    </div>
  );
}

export default Card;
