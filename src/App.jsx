import React, {useState} from 'react'

import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])
  
  return (
    <div className="App">
      <h2>Todo list</h2>
      <TodoList />
    </div>
  );
}

export default App;
