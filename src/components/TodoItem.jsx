import React from 'react'

export const TodoItem = ({item, onDoneUndone}) => {
    return (
        <li onClick={() => onDoneUndone(item.id)} >
            <span className={item.done ? 'item-done': ''}>{item.title}</span>
        </li>
    )
}

