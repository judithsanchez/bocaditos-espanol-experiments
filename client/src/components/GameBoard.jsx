import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './GameBoard.css';

const GameBoard = ({ game }) => {
  const [text, setText] = useState([]);
  const [cardsClicked, setCardsClicked] = useState({
    first: null,
    second: null,
  });
  const [isMatch, setIsMatch] = useState(null);

  const handleCardClickCallback = (index) => {
    if (cardsClicked.first === null) {
      setCardsClicked((prevState) => ({
        ...prevState,
        first: index,
      }));
    } else if (cardsClicked.second === null) {
      setCardsClicked((prevState) => ({
        ...prevState,
        second: index,
      }));
    }
  };

  const resetCardsClicked = () => {
    setCardsClicked({
      first: null,
      second: null,
    });

    setIsMatch(null);
  };

  useEffect(() => {
    if (cardsClicked.first !== null && cardsClicked.second !== null) {
      const first = game.board[cardsClicked.first].image_url;
      const second = game.board[cardsClicked.second].image_url;

      if (!game.checkMatch(first, second)) {
        console.log('not a match');
        setIsMatch('not a match');
      } else {
        console.log('match');
        setIsMatch('match');
      }

      setTimeout(() => {
        resetCardsClicked();
      }, 1500);
    }
  }, [cardsClicked]);

  useEffect(() => {
    const getText = (list) => {
      const newText = list.map((element) => element.spanish);
      const english = list.map((element) => element.english);

      newText.forEach((word, index) => {
        const occurrences = newText.filter((w, i) => w === word);
        if (occurrences.length > 1) {
          const englishEquivalent = english[index];
          newText[index] = englishEquivalent;
        }
      });

      setText(newText);
    };

    getText(game.board);
  }, [game.board]);

  return (
    <div className="gameBoard" id="gameBoard">
      {console.log(game.board)}
      {game.board.map((element, index) => (
        <Card
          key={index}
          imgSrc={element.image_url}
          text={text[index]}
          board={game.board}
          handleCardClickCallback={() => handleCardClickCallback(index)}
          isMatch={isMatch}
        />
      ))}
    </div>
  );
};

export default GameBoard;
