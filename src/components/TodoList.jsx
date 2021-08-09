import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = (props) => {
    return (
        <ul>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    )
}
