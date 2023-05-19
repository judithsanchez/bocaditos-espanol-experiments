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

  const handleCardClick = (dataIndex, id) => {
    if (newGame.firstCard === undefined && newGame.firstCardId === undefined) {
      newGame.firstCard = dataIndex;
      newGame.firstCardId = id;
      newGame.getCardId(newGame.firstCardId);
      setNewGame({ ...newGame });
      return;
    }

    newGame.secondCard = dataIndex;
    newGame.secondCardId = id;
    newGame.getCardId(newGame.secondCardId);
    setNewGame({ ...newGame });

    if (newGame.checkMatch(newGame.firstCard, newGame.secondCard)) {
      const foundElements = document.querySelectorAll(
        `[dataindex="${
          newGame.foundElements[newGame.foundElements.length - 1]
        }"]`
      );

      foundElements.forEach((element) => {
        element.style.cursor = 'auto';
        element.removeAttribute('onclick');
      });

      newGame.firstCard = undefined;
      newGame.firstCardId = undefined;
      newGame.secondCard = undefined;
      newGame.secondCardId = undefined;
      setNewGame({ ...newGame });
    } else {
      const gameBoard = document.querySelector('#gameBoard');
      gameBoard.classList.add('no-click');

      setTimeout(() => {
        newGame.firstCard = undefined;
        newGame.firstCardId = undefined;
        newGame.secondCard = undefined;
        newGame.secondCardId = undefined;
        setNewGame({ ...newGame });

        gameBoard.classList.remove('no-click');
      }, 1500);
    }
  };

  return (
    <div className="gameBoard" id="gameBoard">
      {newGame &&
        newGame.gameBoard.map((element, index) => (
          <Card
            key={index}
            imgSrc={element.img_url}
            spanish={element.spanish}
            english={element.english}
            dataIndex={element.dataindex}
            id={element.id}
            handleCardClick={handleCardClick}
          />
        ))}
    </div>
  );
}

export default App;
