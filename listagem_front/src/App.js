import React from 'react';
import Task from './components/task/task'
import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <div className="app-wellcome">
        <h1>Bem vindo</h1>
        <a href="/tasks">Casdastrar nova Tarefa</a>
        <a href="/list-tasks">Ver lista de Tarefas</a>
      </div>
    </div>
  );
}

export default App;
