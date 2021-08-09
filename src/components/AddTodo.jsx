import React, {useState} from 'react'

export default function AddTodo({onAddTodo}) {
    // state su useState
    const [title, setTitle] = useState('')
    
    function sendTodo() {
        // mini validation 
        if (!title) return console.error('enter title')
        onAddTodo(title);
        // isvalyti ivesties lauka
        setTitle('');
    }

    return (
        <div>
            <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                type="text" placeholder="Add new todo" />
            <button onClick={sendTodo} >Add</button>
        </div>
    )
}
