import React, { useState } from 'react';
import './App.css';
import { data } from './data'

const randomIndex = () => {
  return Math.floor(Math.random() * data.length);
}

function App() {
  const [wordIndex, setNewIndex] = useState(randomIndex());
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="word">{data[wordIndex]}</h1>
        <button
          className="random-btn"
          onClick={() => {
            setNewIndex(randomIndex())
          }}
          >Random</button>
        <a
          className="App-link"
          href={`https://www.oxfordlearnersdictionaries.com/search/english/?q=${data[wordIndex].split(' ').join('+')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Search this word
        </a>
      </header>
    </div>
  );
}

export default App;
