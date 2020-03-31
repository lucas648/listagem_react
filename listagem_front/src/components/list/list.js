import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './list.css'
import api from '../../services/api';



function List() {
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        async function loadTasks() {
            const response = await api.get('/list-tasks');
            setTasks(response.data);
        }
        loadTasks();
    },[]);

    async function doTask(_id) {
        try{
            await api.delete(`/tasks/${_id}`);
            alert('Tarefa concluida')
            setTasks(tasks.filter(task => task._id !== _id))
        }catch(err){
            alert('Erro ao concluir Tarefa')
        }
    }

    return(
        <main className="list-container">
            <div className="title-container">
               <strong className="list-title">Lista de Tarefas</strong>
            </div>
                <ul className="task-list">
                    {tasks.map( task => (
                    <li key={task._id} className="task-item">
                        <label className= "list-item-title">Descrição da Tarefa: </label>
                        <p>{task.description}</p>
                        <label className= "list-item-title">Responsável: </label>
                        <p>{task.reponsible}</p>
                        <button className="task-item-button" onClick={() => doTask(task._id)}>Concluir Tarefa</button>
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
