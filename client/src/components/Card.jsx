import React, { useState, useEffect } from 'react';
import './Card.css';
import { Animals } from './animals';

function Card({ imgSrc, spanish, english, dataIndex, id, handleCardClick }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [backImageUrl, setBackImageUrl] = useState('');
  const [animals, setAnimals] = useState(Animals);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const randomAnimal = animals[randomIndex];
    setBackImageUrl(randomAnimal.image_url);
  }, [animals]);

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
      <div className="back card">
        <img
          alt="Bocadito's transparent logo"
          className="cards-logos back-card-content let-top-corner"
          src="https://cdn.bfldr.com/Z0BJ31FP/at/s3s8fsg57rph3r6hv62h5h/logo-transparent.svg"
        />
        <div className="background-circle back-card-content">
          <img className="back-card-img" src={backImageUrl} alt="Card" />
        </div>

        <img
          alt="Bocadito's transparent logo"
          className="cards-logos right-bottom-corner back-card-content"
          src="https://cdn.bfldr.com/Z0BJ31FP/at/s3s8fsg57rph3r6hv62h5h/logo-transparent.svg"
        />
      </div>

      <div className="front card">
        <img className="front-card-image" src={imgSrc} alt={english} />
        <p className="card-text">{spanish}</p>
      </div>
    </div>
  );
}

export default Card;
