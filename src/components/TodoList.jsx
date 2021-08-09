import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map(t => 
            <TodoItem item={t} key={t.id} />)}
        </ul>
    )
}
