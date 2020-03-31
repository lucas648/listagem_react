import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './list.css'
import api from '../../services/api';
import Task from '../task/task';



function List() {
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        async function loadTasks() {
            const response = await api.get('/list-tasks');
             setTasks(response.data);
        }
        loadTasks();
    },[]);

    return(
        <main>
            <strong>Lista de Tarefas</strong>
                <ul>
                    {tasks.map( task => (
                    <li key={task.id} className="task-item">
                        <label>Descrição da Tarefa: </label>
                        <p>{task.description}</p>
                        <label>Responsável: </label>
                        <p>{task.reponsible}</p>
                        <input type="checkbox"></input>
                    </li>
                    ))}
                </ul>
            <Link to="/" className="back-link">
                Cadastrar nova tarefa 
            </Link>
        </main>
    )
}

export default List;
