import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './components/Todo';
import registerServiceWorker from './registerServiceWorker';

let taskList = ["Task 1", "Task 2", "Task 3", "Task 4"];
let tasks = localStorage.getItem('storedTasks');
if (tasks) {
	taskList = JSON.parse(tasks);
}

ReactDOM.render(<Todo tasks={taskList} />, document.getElementById('root'));
registerServiceWorker();
