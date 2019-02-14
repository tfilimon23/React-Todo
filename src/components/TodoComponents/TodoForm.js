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
        <button type ="submit">Add Todo</button>
        <button type ="submit">Clear Completed</button>
        </form>
    );
};

export default TodoForm;