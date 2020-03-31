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
            await api.delete(`task/${_id}`);

        }catch(err){
            alert('Erro ao concluir Tarefa')
        }
    }

    return(
        <main>
            <strong>Lista de Tarefas</strong>
                <ul>
                    {tasks.map( task => (
                    <li key={task._id} className="task-item">
                        <label className= "list-item-title">Descrição da Tarefa: </label>
                        <p>{task.description}</p>
                        <label className= "list-item-title">Responsável: </label>
                        <p>{task.reponsible}</p>
                        <button onClick={() => doTask(task._id)}>Deletar Task</button>
                        <input className="list-item-checkbox" type="checkbox"></input>
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
