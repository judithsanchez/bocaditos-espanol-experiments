import React from 'react';
import './GameFinished.css';

function GameFinished() {
  const handleReload = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="gameFinished">
      <img
        src="https://cdn.bfldr.com/Z0BJ31FP/at/43s6h5f79pc55mk9fc4gwg7r/bruja-game-won.svg"
        alt="Won Game"
      />
      <div className="textButton">
        <p>I suppose you won...</p>
        <button onClick={handleReload}>¡Otra vez!</button>
      </div>
    </div>
  );
}

export default GameFinished;
