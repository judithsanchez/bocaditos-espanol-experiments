import React, { useState, useEffect } from 'react';
import MatchingGame from './components/MatchingGame.jsx';
import Card from './components/Card.jsx';
import './App.css';

function App() {
  const [adjectives, setAdjectives] = useState([]);
  const [newGame, setNewGame] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (adjectives.length > 0) {
      setNewGame(<MatchingGame list={adjectives} />);
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

  const handleCardClick = () => {};

  return (
    <div className="gameBoard" id="gameBoard">
      {newGame &&
        newGame.props.list.map((element, index) => (
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
}

export default App;
