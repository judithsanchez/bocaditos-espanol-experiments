import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './GameBoard.css';

const GameBoard = ({ game }) => {
  const [text, setText] = useState([]);
  const [cardsClicked, setCardsClicked] = useState({
    first: null,
    second: null,
  });

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

  useEffect(() => {
    if (cardsClicked.first !== null && cardsClicked.second !== null) {
      const first = game.board[cardsClicked.first].image_url;
      const second = game.board[cardsClicked.second].image_url;

      if (game.checkMatch(first, second)) {
        console.log('match');
      } else {
        console.log('not a match');
        setTimeout(() => {
          setCardsClicked({
            first: null,
            second: null,
          });
        }, 1500);
      }
    }
  }, [cardsClicked]);

  useEffect(() => {
    const getText = (list) => {
      const newText = [];
      for (let i = 0; i < list.length; i += 1) {
        let isDuplicate = false;
        for (let j = 0; j < i; j += 1) {
          if (list[i].id === list[j].id) {
            isDuplicate = true;
            break;
          }
        }
        if (isDuplicate) {
          newText.push(list[i].english);
        } else {
          newText.push(list[i].spanish);
        }
      }
      setText(newText);
    };

    getText(game.board);
  }, [game.board]);

  return (
    <div className="gameBoard" id="gameBoard">
      {game.board.map((element, index) => (
        <Card
          key={index}
          imgSrc={element.image_url}
          text={text[index]}
          board={game.board}
          handleCardClickCallback={() => handleCardClickCallback(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
