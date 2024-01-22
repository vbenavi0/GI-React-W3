import React from 'react'
import './App.css';
import TaskList from './components/taskList';
import Nav from './components/nav';

export default function TaskApp() {
  return (
    <div className="App">
      <Nav/>
      <h1>Task App</h1>
      <TaskList/>
    </div>
  );
}