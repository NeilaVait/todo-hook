import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter';

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, special: false },
    { id: 2, value: 0, special: false },
    { id: 3, value: 0, special: true },
  ]);

  const handleIncrement = (id) => {
    console.log(counters, id);
    const countersCopy = counters.map((c) => {
      if (id === c.id && c.special === true) {
        return { ...c, value: c.value + 2 };
      } else if (id === c.id && c.special === false) {
        return { ...c, value: c.value + 1 };
      }
      return { ...c };
    });
    setCounters(countersCopy);
  };

  return (
    <div className="App">
      {counters.map((c) => (
        <Counter key={c.id} counter={c} onIncrement={handleIncrement} />
      ))}
    </div>
  );
}

export default App;
