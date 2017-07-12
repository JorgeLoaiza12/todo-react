import React, { Component } from 'react';

class AddNewTask extends Component {
  constructor(props) {
    super(props);

    this.justSubmitted = this.justSubmitted.bind(this);
  }

  justSubmitted(event) {
    event.preventDefault();

    let input = event.target.querySelector('input');
    let value = input.value;
    input.value = '';

    this.props.updateList(value);
  }

  render() {
    return (
      <div className="AddNewTask">
      <form onSubmit={this.justSubmitted}>
        <input type="text" />
      </form>
      </div>
    );
  }
}

export default AddNewTask;
