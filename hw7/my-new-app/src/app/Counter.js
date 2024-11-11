// src/app/Counter.js

"use client"; // Add this line at the top

import React, { useState } from 'react';

const Counter = ({ incrementBy, buttonColor }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count + incrementBy > 10) {
      setCount(0); // Reset to 0 if count exceeds 10
    } else {
      setCount(count + incrementBy);
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={increment}
        style={{ backgroundColor: buttonColor, padding: '10px', border: 'none', color: '#fff', cursor: 'pointer' }}
      >
        Increment by {incrementBy}
      </button>
    </div>
  );
};

export default Counter;

