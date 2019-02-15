import React from 'react';
import './Todo.css'

const Todo = props => {
    return (
     <div className = {`todo${props.todo.completed ? ' completed' : ''}`}
     onClick ={() => props.toggleToDo(props.todo.id)} >
         <h3>{props.todo.task}</h3>
     </div>
    );
};


export default Todo;