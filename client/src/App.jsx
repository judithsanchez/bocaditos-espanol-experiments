import React, { useState, useEffect } from 'react';
import MatchingGame from './components/MatchingGame.jsx';
import './App.css';

function App() {
  const [adjectives, setAdjectives] = useState([]);

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
    <div>{adjectives.length > 0 && <MatchingGame list={adjectives} />}</div>
  );
}

export default App;
