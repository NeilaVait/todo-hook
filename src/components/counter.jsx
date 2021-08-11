import React from 'react';

function Counter({ counter, handleCount }) {
  // const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <h4>{counter.value}</h4>
      <button onClick={() => handleCount(counter.id, '-')}>-</button>
      <button onClick={() => handleCount(counter.id, '+')}>+</button>
      <button onClick={() => handleCount(counter.id, 'rs')}>Reset</button>
    </div>
  );
}

export default Counter;
