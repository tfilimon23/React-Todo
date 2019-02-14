import React from 'react';

import './components/TodoComponents/Todo.css'
import './App.css'

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const data = [
  {
   task: 'Pick up milk',
   id: Date.now(),
   completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      data: data,
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newTodo],
      task: '', 
    });
   };
   
   handleChanges = e => {
     console.log(e.target);
    this.setState({
     [e.target.name]: e.target.value
    });
   };

   toggleToDo = toDoId => {
     this.setState({
       data: this.state.data.map(todo=>{
         if (toDoId === todo.id) {
           return {
             ...todo,
             completed: !todo.completed
           };
         }
         return todo;
       })
     });
   };

   clearCompleted = e => {
     e.preventDefault();
     this.setState ({
      data: this.state.data.filter(todo => !todo.completed)
     });
   };

  render() {
    return (
      <div className ="container">
      <div className ="app">
        <h2>Get Your ToDos... Done!</h2>
        <div className ="todo-list">
        <TodoList
        data={this.state.data}
        id={this.state.id} 
        toggleToDo ={this.toggleToDo}
        />
        </div>
        <TodoForm
        addTodo ={this.addTodo}
        task = {this.state.task}
        id ={this.state.id}
        handleChanges = {this.handleChanges}
        completed ={this.state.completed}
        clearCompleted = {this.clearCompleted}
         />
      </div>
      </div>
    );
  }
}

export default App;
