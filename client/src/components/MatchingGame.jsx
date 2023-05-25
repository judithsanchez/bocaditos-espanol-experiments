import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './MatchingGame.css';

const MatchingGame = ({ list }) => {
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

  const [gameBoard, setGameBoard] = useState(() =>
    shuffleElements(duplicateElements(list))
  );
  const [foundMatches, setFoundMatches] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameStatus, setGameStatus] = useState('in progress');

  useEffect(() => {
    if (foundMatches === gameBoard.length / 2) {
      setGameStatus('won');
    }
  }, [foundMatches, gameBoard]);

  const handleCardClick = (index) => {
    const flippedCard = gameBoard[index];

    if (flippedCard.matched || flippedCard.isFlipped) {
      return;
    }

    const updatedGameBoard = gameBoard.map((card, i) =>
      i === index ? { ...card, isFlipped: true } : card
    );

    const flippedCards = updatedGameBoard.filter(
      (card) => card.isFlipped && !card.matched
    );

    if (flippedCards.length === 2) {
      setTimeout(() => checkMatch(flippedCards), 1000);
    }

    setGameBoard(updatedGameBoard);
  };

  const checkMatch = (flippedCards) => {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.id === secondCard.id) {
      const updatedGameBoard = gameBoard.map((card) =>
        card.id === firstCard.id
          ? { ...card, matched: true, isFlipped: true }
          : card
      );

      setGameBoard(updatedGameBoard);
      setFoundMatches(foundMatches + 1);

      if (foundMatches + 1 >= gameBoard.length / 2) {
        setGameStatus('won');
      }
    } else {
      const updatedGameBoard = gameBoard.map((card) =>
        card.isFlipped && !card.matched ? { ...card, isFlipped: false } : card
      );

      setGameBoard(updatedGameBoard);
    }

    setAttempts(attempts + 1);
  };

  return (
    <div className="gameBoard" id="gameBoard">
      {gameBoard.map((element, index) => (
        <Card
          key={index}
          imgSrc={element.image_url}
          spanish={element.spanish}
          english={element.english}
          dataIndex={index}
          id={element.id}
          isFlipped={element.isFlipped}
          matched={element.matched}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default MatchingGame;
