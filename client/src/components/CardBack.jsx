import React from 'react';

function CardBack({ backImageUrl }) {
  return (
    <div className="back card">
      <img
        alt="Bocadito's transparent logo"
        className="cards-logos back-card-content let-top-corner"
        src="https://cdn.bfldr.com/Z0BJ31FP/at/s3s8fsg57rph3r6hv62h5h/logo-transparent.svg"
      />
      <div className="background-circle">
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
