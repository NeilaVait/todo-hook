import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, onDoneUndone}) => {
    return (
        <ul>
            {todos.map(t => 
            <TodoItem onDoneUndone={onDoneUndone} item={t} key={t.id} />)}
        </ul>
    )
}
