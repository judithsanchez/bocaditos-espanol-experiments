import React, { useState } from 'react';

const MatchingGame = ({ list }) => {
  const [firstCard, setFirstCard] = useState(undefined);
  const [secondCard, setSecondCard] = useState(undefined);
  const [foundMatches, setFoundMatches] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [foundElements, setFoundElements] = useState([]);
  const [gameStatus, setGameStatus] = useState('in progress');
  const [gameBoard, setGameBoard] = useState(() =>
    shuffleElements(duplicateElements(list))
  );

  const duplicateElements = (list) => {
    return [...list, ...list];
  };

  const shuffleElements = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    return list;
  };

  const getCardInfo = (element) => {
    if (!firstCard && !secondCard) {
      setFirstCard(element);
      return;
    }

    if (firstCard && !secondCard) {
      setSecondCard(element);
    }
  };

  const checkMatch = (firstElement, secondElement) => {
    if (firstElement === null || secondElement === null) {
      return;
    }

    setAttempts(attempts + 1);

    if (firstElement === secondElement) {
      setFoundElements([...foundElements, firstElement]);
      setFoundMatches(foundMatches + 1);

      if (foundMatches + 1 >= gameBoard.length / 2) {
        setGameStatus('won');
      }

      setFirstCard(null);
      setSecondCard(null);
      return true;
    }

    setFirstCard(null);
    setSecondCard(null);
    return false;
  };

  return (
    <div>
      {/* Render your game board and handle the game logic */}
      {gameBoard.map((element, index) => (
        <Card
          key={index}
          imgSrc={element.image_url}
          spanish={element.spanish}
          english={element.english}
          dataIndex={`data${index}`}
          id={element.id}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default MatchingGame;
