import React from 'react';
import './Todo.css'

const Todo = props => {
    return (
     <div>
         <h3>{props.todo.task}</h3>
     </div>
    );
};


export default Todo;