import React, { useState } from 'react';
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

  const handleCardClick = (index) => {
    const updatedGameBoard = [...gameBoard];
    const clickedCard = updatedGameBoard[index];

    if (clickedCard.matched) {
      return;
    }

    clickedCard.isFlipped = true;

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
      const updatedGameBoard = gameBoard.map((card) => {
        if (card.id === firstCard.id) {
          return { ...card, matched: true };
        }
        return card;
      });

      setGameBoard(updatedGameBoard);
      setFoundMatches(foundMatches + 1);

      if (foundMatches + 1 >= gameBoard.length / 2) {
        setGameStatus('won');
      }
    } else {
      const updatedGameBoard = gameBoard.map((card) => {
        if (card.isFlipped && !card.matched) {
          return { ...card, isFlipped: false };
        }
        return card;
      });

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
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default MatchingGame;
