import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, onDoneUndone, onEditTodo}) => {
    return (
        <ul>
            {todos.map(t => 
            <TodoItem onEditTodo={onEditTodo} onDoneUndone={onDoneUndone} item={t} key={t.id} />)}
        </ul>
    )
}
