/*import React ,{useState} from 'react';
import {useTodos} from './ToDoContext';

const ToDoInput=()=>{
    const[text,setText]=useState('');
    const {addTodo}=useTodos();

    const handleAdd=()=>{
        if(text.trim()){
            addTodo(text);
            setText('');
        }
    };

    return(
        <div>
            <input type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)} placeholder="Enter a new task"/
            
            >
                <button onClick={handleAdd}>Add ToDo</button>
        </div>
    )
};
export default ToDoInput;*/