import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard.jsx';
import './App.css';
import MatchingGame from './matchingGame.js';
import NoResponsive from './components/NoResponsive.jsx';

function App() {
  const [adjectives, setAdjectives] = useState([]);
  const newGame = new MatchingGame(adjectives);

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="app">
      {/* <NoResponsive /> */}
      {newGame && <GameBoard game={newGame} />}
    </div>
  );
}

export default App;
