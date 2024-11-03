import { useState } from 'react';

export default function Counter() {
  // Define a piece of state to hold the count value
  const [count, setCount] = useState(0);

  // Functions to handle incrementing and decrementing the count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

