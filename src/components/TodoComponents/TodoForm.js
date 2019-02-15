import React from 'react';
import './Todo.css'

const TodoForm = props => {
    return (
        <form onSubmit ={props.addTodo}>
        <input
        type ="text"
        value={props.task}
        name ="task"
        onChange = {props.handleChanges}
        placeholder = "ToDo..."
        />
        <div>
        <button >Add ToDo</button>
        <button onClick = {props.clearCompleted}>Clear Completed</button>
        </div>
        </form>
    );
};

export default TodoForm;