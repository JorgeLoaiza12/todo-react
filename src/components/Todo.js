import React, { Component } from 'react';
import './Todo.css';
import ToDoAppList from './ToDoAppList';
import AddNewTask from './AddNewTask';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks
    };
    this.updateList = this.updateList.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  updateList(text) {
    let updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({
      tasks: updatedTasks
    });
    this.updateLocalStorage(updatedTasks);
  }

  removeTask(text) {
    let updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({
      tasks: updatedTasks
    });
    this.updateLocalStorage(updatedTasks);
  }

  updateLocalStorage(updatedTasks) {
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
  }

  render() {
    return (
      <div className="Todo">
        <h1>ToDo App</h1>
        <AddNewTask updateList={this.updateList} />
        <ToDoAppList tasks={this.state.tasks} remove={this.removeTask} />
      </div>
    );
  }
}

export default Todo;
