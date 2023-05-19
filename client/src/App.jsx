import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [adjectives, setAdjectives] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api'); //
      const data = await response.json();
      setAdjectives(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <div className="gameBoard" id="gameBoard"></div>;
}

export default App;
