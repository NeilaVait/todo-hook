import React, { useState, useEffect } from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import { TodoList } from './components/TodoList';
import allTodos from './db/todos';

function App() {
  // console.log(allTodos());
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(4);

  const setDoneUndone = (id) => {
    // console.log('setDoneUndone', id);
    // id yra id to todo itemo kurio done dali norim pakeisti i ptriesinga
    // pasidarom todos kopija
    // surasti ta todo objekta
    // pakeisti jo done dali
    // nustatom todos su setTodos i kopija

    // one way
    // const todosCopy = [...todos];
    // const foundTodo = todosCopy.find(i => i.id === id);
    // foundTodo.done = !foundTodo.done;
    // setTodos(todosCopy)

    // second way
    const todosCopy = todos.map((i) => {
      return i.id === id ? { ...i, done: !i.done } : { ...i };
    });
    setTodos(todosCopy);
  };

  const handleAddTodo = (title) => {
    // pridedam nauja item i todos nemodifikuodammi esamo
    setTodos([...todos, { id: todoId, title, done: false }]);
    setTodoId(todoId + 1);
  };

  const handleEditTodo = (id, title) => {
    // pakeisti esamo todos masyvo objekta kurio id yra lygus argumento id
    // title i title gauta argumentu.
    const todosCopy = todos.map((t) => {
      return t.id === id ? { ...t, title } : { ...t };
    });
    setTodos(todosCopy);
  };

  const handleDeleteTodo = (id) => {
    const todosAfterDelete = todos.filter((t) => t.id !== id);
    setTodos(todosAfterDelete);
  };

  useEffect(() => {
    setTodos(allTodos());
  }, []);

  return (
    <div className="App">
      <h2>Todo list</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      {todos.length ? (
        <TodoList
          onDeleteTodo={handleDeleteTodo}
          onEditTodo={handleEditTodo}
          todos={todos}
          onDoneUndone={setDoneUndone}
        />
      ) : (
        <h3>No todos to show</h3>
      )}
    </div>
  );
}

export default App;
