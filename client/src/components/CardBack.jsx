import React, { useState, useEffect } from 'react';
import { Animals } from './animals';

function CardBack() {
  const [backImageUrl, setBackImageUrl] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Animals.length);
    const randomAnimal = Animals[randomIndex];
    setBackImageUrl(randomAnimal.image_url);
  }, []);

  return (
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
  );
}

export default CardBack;
