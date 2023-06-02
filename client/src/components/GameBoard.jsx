import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './GameBoard.css';
import GameFinished from './GameFinished.jsx';

const GameBoard = ({ game }) => {
  const [text, setText] = useState([]);
  const [cardsClicked, setCardsClicked] = useState({
    first: null,
    second: null,
  });
  const [isMatch, setIsMatch] = useState(null);
  const [matches, setMatches] = useState(null);
  const [isWon, setIsWon] = useState(false);

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
        setIsMatch('not a match');
      } else {
        setIsMatch('match');
        setMatches(game.matches.length);
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

      if (matches === 1) {
        setTimeout(() => {
          setIsWon(true);
        }, 1500);
      }
    };

    getText(game.board);
  }, [game.board, matches]);

  return (
    <>
      {isWon ? (
        <GameFinished />
      ) : (
        <div className="gameBoard" id="gameBoard">
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
      )}
    </>
  );
};

export default GameBoard;
