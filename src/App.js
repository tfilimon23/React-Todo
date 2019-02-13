import React from 'react';

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
      task: '',
      id: '',
      completed: ''
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      data: [...this.state.data, newTodo],
      task: '',
      id: '',
      completed: ''    
    });
   };
   
   handleChanges = e => {
     console.log(e.target.value);
    this.setState({
     [e.target.task]: e.target.value
    });
   };

  render() {
    return (
      <div>
        <h2>Get Your ToDos Done</h2>
        <div className ="todo-list">
        <TodoList
        data={this.state.data}
        id={this.state.id} 
        />
        </div>
        <TodoForm
        addTodo ={this.addTodo}
        task = {this.state.task}
        id ={this.state.id}
        handleChanges = {this.handleChanges}
        completed ={this.state.completed}
         />
      </div>
    );
  }
}

export default App;
