import React, { useState } from 'react'
import './styles.css'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() === '') return;
        setTodos((todos)=>todos.concat({
            text:inputValue,
            id:Math.floor(Math.random() * 10)
        }));
        setInputValue('');
    }

    const handleRemove = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }

  return (
    <div>

        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleSubmit}>Add Item</button>
        {
            todos.map((todo)=>{
                return(
                    <div key={todo.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'10px'}}>
                        <h1>{todo.text}</h1>
                        <button onClick={() => handleRemove(todo.id)}>X</button>
                    </div>
                )
            })
        }

        
      
    </div>
  )
}

export default Todo
