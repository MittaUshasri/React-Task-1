import React, { useState } from 'react';

function WordInput({ onInputChange }) {
  const handleChange = (e) => {
    const text = e.target.value;
    onInputChange(text);
  };

  return (
    <div>
      <textarea
        placeholder="Enter text..."
        rows="6"
        onChange={handleChange}
      />
    </div>
  );
}

export default WordInput;
