import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './GameBoard.css';

const GameBoard = ({ game }) => {
  const [text, setText] = useState([]);

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
        />
      ))}
    </div>
  );
};

export default GameBoard;

//   // Handler function for card clicks
//   const handleCardClick = (index) => {
//     // Position of the card on the array
//     const flippedCard = gameBoard[index];

//     // If the card is already matched or flipped, return early
//     if (flippedCard.matched || flippedCard.isFlipped) {
//       return;
//     }

//     // Update the game board by flipping the clicked card
//     const updatedGameBoard = gameBoard.map((card, i) =>
//       i === index ? { ...card, isFlipped: true } : card
//     );

//     // Find the flipped cards (cards that are flipped but not matched)
//     const flippedCards = updatedGameBoard.filter(
//       (card) => card.isFlipped && !card.matched
//     );

//     // If two cards are flipped, check if they match after a delay
//     if (flippedCards.length === 2) {
//       setTimeout(() => checkMatch(flippedCards), 1000);
//     }

//     // Update the game board state
//     setGameBoard(updatedGameBoard);
//   };

//   // Function to check if the flipped cards match
//   const checkMatch = (flippedCards) => {
//     const [firstCard, secondCard] = flippedCards;

//     // If the IDs of the cards match, it's a match
//     if (firstCard.id === secondCard.id) {
//       // Update the game board to mark the cards as matched
//       const updatedGameBoard = gameBoard.map((card) =>
//         card.id === firstCard.id
//           ? { ...card, matched: true, isFlipped: true }
//           : card
//       );

//       // Update the game board and foundMatches state
//       setGameBoard(updatedGameBoard);
//       setFoundMatches(foundMatches + 1);

//       // If all matches are found, set the game status to 'won'
//       if (foundMatches + 1 >= gameBoard.length / 2) {
//         setGameStatus('won');
//       }
//     } else {
//       // If the cards don't match, flip them back to hidden state
//       const updatedGameBoard = gameBoard.map((card) =>
//         card.isFlipped && !card.matched ? { ...card, isFlipped: false } : card
//       );

//       // Update the game board state
//       setGameBoard(updatedGameBoard);
//     }

//     // Increment the attempts state
//     setAttempts(attempts + 1);
//   };

//   // Rendering the game board and cards
//   return (
//     <div className="gameBoard" id="gameBoard">
//       {gameBoard.map((element, index) => (
//         <Card
//           key={index}
//           imgSrc={element.image_url}
//           spanish={element.spanish}
//           english={element.english}
//           dataIndex={index}
//           id={element.id}
//           isFlipped={element.isFlipped}
//           matched={element.matched}
//           handleCardClick={handleCardClick}
//         />
//       ))}
//     </div>
//   );
// };
