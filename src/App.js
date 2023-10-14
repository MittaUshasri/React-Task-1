import React, { useState } from 'react';
import './App.css';
import WordInput from './WordInput';
import WordCounter from './WordCounter';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  return (
    <div className="App">
      <h1>Word Counter App</h1>
      <WordInput onInputChange={handleInputChange} />
      <WordCounter count={wordCount} />
    </div>
  );
}

export default App;
