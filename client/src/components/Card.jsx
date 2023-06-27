import React, { useState, useEffect } from 'react';
import './Card.css';
import CardFront from './CardFront';
import CardBack from './CardBack';

// Data
import { Animals } from './animals';

function Card({
  // Test
  fakeCardClicked,
  cardKey,
  ////////////////////////////////////////////////////////////////
  imgSrc,
  text,
  handleCardClickCallback,
  isMatch,
  disableClicks,
}) {
  const [isCardFlipped, setCardFlipped] = useState(false);
  const [matchedFound, setMatchedFound] = useState(false);
  const [backImageUrl, setBackImageUrl] = useState(
    Animals[Math.floor(Math.random() * Animals.length)].image_url
  );

  const handleCardClick = () => {
    if (disableClicks) return;
    setCardFlipped(true);
    handleCardClickCallback();
  };

  // Test
  useEffect(() => {
    if (fakeCardClicked === cardKey) {
      setCardFlipped(true);
    }
  });
  ////////////////////////////////////////////////////////////////

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
      {isCardFlipped ? (
        <CardFront text={text} imgSrc={imgSrc} />
      ) : (
        <CardBack backImageUrl={backImageUrl} />
      )}
    </div>
  );
}

export default Card;
