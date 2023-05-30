import React, { useState, useEffect } from 'react';
import './Card.css';
import CardFront from './CardFront';
import CardBack from './CardBack';
// Test: added isMatch prop
function Card({ imgSrc, text, handleCardClickCallback, isMatch }) {
  const [isCardFlipped, setCardFlipped] = useState(false);
  const [matchedFound, setMatchedFound] = useState(false);

  const handleCardClick = () => {
    if (isCardFlipped) {
      setCardFlipped(false);
    } else {
      setCardFlipped(true);
      handleCardClickCallback();
    }
  };

  useEffect(() => {
    if (matchedFound === true) {
      // Test
      return;
    }

    if (isCardFlipped) {
      if (isMatch === 'not a match') {
        setTimeout(() => {
          setCardFlipped(false);
        }, 2000); // Test
      } else if (isMatch === 'match') {
        // Test
        setMatchedFound(true);
      }
    }
  }, [isCardFlipped, isMatch]); // Test

  return (
    <div className="cards" onClick={handleCardClick}>
      {isCardFlipped ? <CardFront text={text} imgSrc={imgSrc} /> : <CardBack />}
    </div>
  );
}

export default Card;
