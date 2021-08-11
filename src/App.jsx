import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter';

function App() {
  const counterData = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 4, isSpecial: true },
  ];
  const [counters, setCounters] = useState(counterData);

  const handleCount = (id, operation) => {
    console.log('id', id, 'op', operation);
    // const countersCopy = counters.map((c) => {
    //   const difference = special ? 2 : 1;
    //   const countFix = isNaN(count) ? 0 : count;

    //   if (operation === '-') return setCount(countFix - difference);
    //   if (operation === '+') return setCount(countFix + difference);
    //   if (operation === 'rs') return special ? setCount('start over') : setCount(0);
    // });
  };

  const resetAll = () => {
    const countersCopy = counters.map((c) => {
      return (c.value = 0);
    });
    setCounters(countersCopy);
  };

  return (
    <div className="App">
      <button onClick={resetAll}>Reset all</button>
      {(counters || []).map((c) => (
        <Counter special={c.isSpecial} key={c.id} counter={c} handleCount={handleCount} />
      ))}
    </div>
  );
}

export default App;
