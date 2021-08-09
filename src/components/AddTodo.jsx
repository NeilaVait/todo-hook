import React, {useState} from 'react'

export default function AddTodo() {
    // state su useState
    const [title, setTitle] = useState('')
    return (
        <div>
            <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                type="text" placeholder="Add new todo" />
            <button>Add</button>
        </div>
    )
}
