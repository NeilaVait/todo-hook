import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <h4>{counter}</h4>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button>Reset</button>
    </div>
  );
}

export default Counter;
