import React, { useState, useEffect } from 'react';
import { MatchingGame } from './components/matchingGame';
import Card from './components/Card';

import './App.css';

function App() {
  const [adjectives, setAdjectives] = useState([]);
  const [newGame, setNewGame] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (adjectives.length > 0) {
      const game = new MatchingGame(adjectives);
      setNewGame(game);
      // console.log(newGame);
    }
  }, [adjectives]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api');
      const data = await response.json();
      setAdjectives(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="gameBoard" id="gameBoard">
      {/* <img src="./assets/faces/adorable.svg" alt="Face" /> */}
      {newGame &&
        newGame.gameBoard.map((element, index) => (
          <Card
            key={index}
            imgSrc={element.img_url}
            spanish={element.spanish}
            english={element.english}
          />
        ))}
    </div>
  );
}

export default App;
