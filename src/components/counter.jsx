import React from 'react';

function Counter({ onIncrement, counter }) {
  // const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <h4>{counter.value}</h4>
      <button onClick={console.log('c')}>-</button>
      <button onClick={() => onIncrement(counter.id)}>+</button>
      <button>Reset</button>
    </div>
  );
}

export default Counter;
