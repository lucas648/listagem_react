import React, { useEffect, useState } from 'react';
import './list.css'
import api from '../../services/api';
import Task from '../task/task';



function list() {
    const [tasks, setTasks] = useState([]);

    task = new Task;

    useEffect(() =>{
        async function loadTasks() {
            const response = await api.get('/list-tasks');
             setTasks(response.data);
        }
        loadTasks();
    },[]);

    return(
        <main>
            <ul>
                {tasks.map( task => (
                    <li key={task.id} className="task-item">
                        <p>{Task.description}</p>
                        <p>{Task.responsible}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default List;
