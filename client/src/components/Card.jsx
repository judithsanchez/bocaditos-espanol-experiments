import React, { useState, useEffect } from 'react';
import './Card.css';
import CardFront from './CardFront';
import CardBack from './CardBack';
// Test: added isMatch prop
function Card({ imgSrc, text, handleCardClickCallback, isMatch }) {
  const [isCardFlipped, setCardFlipped] = useState(false);

  const handleCardClick = () => {
    if (isCardFlipped) {
      setCardFlipped(false);
    } else {
      setCardFlipped(true);
      handleCardClickCallback();
    }
  };

  // useEffect(() => {
  //   if (isCardFlipped === true && isMatch === 'not a match') {
  //     setCardFlipped(false);
  //   }
  // }, [isMatch]); // Test

  useEffect(() => {
    if (isCardFlipped && isMatch === 'not a match') {
      setTimeout(() => {
        setCardFlipped(false);
      }, 2000); // Test
    }
  }, [isCardFlipped, isMatch]); // Test

  return (
    <div className="cards" onClick={handleCardClick}>
      {isCardFlipped ? <CardFront text={text} imgSrc={imgSrc} /> : <CardBack />}
    </div>
  );
}

export default Card;
