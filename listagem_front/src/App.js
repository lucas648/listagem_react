import React from 'react';
import Task from './components/task/task'
import api from './services/api'
import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <aide>
        <Task />
      </aide>
    </div>
  );
}

export default App;
