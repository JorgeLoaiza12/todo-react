import React, { Component } from 'react';

class ToDoAppList extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove(elem) {
    const value = elem.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }

  render() {
    const items = this.props.tasks.map((elem, index)=>{ 
      return (
        <li key={index}>
          <span>{elem}</span>
          <button onClick={this.remove}>X</button>
        </li>);
    });
    return (
      <div className="ToDoAppList">
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default ToDoAppList;
