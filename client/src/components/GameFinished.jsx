import React from 'react';
import './GameFinished.css';

function GameFinished() {
  return (
    <div className="gameFinished">
      <img
        src="https://cdn.bfldr.com/Z0BJ31FP/at/43s6h5f79pc55mk9fc4gwg7r/bruja-game-won.svg"
        alt="Won Game"
      />
      <p>I suppose you won...</p>
    </div>
  );
}

export default GameFinished;
