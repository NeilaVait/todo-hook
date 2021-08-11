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

  const handleCount = (counterId, operation) => {
    // console.log('id', counterId, 'op', operation);

    const countersCopy = [...counters];
    const found = countersCopy.find((c) => c.id === counterId);

    const count = found.value;
    const diff = found.isSpecial ? 2 : 1;
    const countFix = isNaN(count) ? 0 : count;

    if (operation === '-') found.value = countFix - diff;
    if (operation === '+') found.value = countFix + diff;
    if (operation === 'rs') {
      found.isSpecial ? (found.value = 'start over') : (found.value = 0);
      found.value = found.isSpecial ? 'start over' : 0;
    }

    setCounters(countersCopy);
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
