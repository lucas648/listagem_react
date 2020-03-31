import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './task.css';
import api from '../../services/api';

function Task() {
    const [description, setDescription] = useState('');
    const [reponsible, setResponsible] = useState('');
     
    const history = useHistory();

    async function addTask(e) {
        e.preventDefault()

        try {
            await api.post('/tasks', {
                description,
                reponsible,
            });
            alert('Tarefa Cadastrada com sucesso.');
            history.push('/list-tasks')
        }catch (err) {
            alert('Erro ao cadastrar tente novamente.');
        }




        setDescription('');
        setResponsible('');

        //setTasks([...tasks, response.data]);
    };

    return (
        <aside>
            <strong>Cadastrar Tarefa</strong>
            <form onSubmit={addTask} >
                <div className="task-field">
                    <label htmlFor="description">Descrição da Tarefa:</label>
                    <textarea 
                      name="description" 
                      id="description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      required
                    />
                </div>
                <div className="task-field">
                    <label htmlFor="reponsible">Responsável pela Tarefa:</label>
                    <input 
                      name="reponsible" 
                      id="reponsible"
                      value={reponsible}
                      onChange={e => setResponsible(e.target.value)}
                      required
                    />
                </div>
                <button type="submit">Salvar</button>
                <Link to="/list-tasks" className="back-link">
                    Ir para lista de tarefas 
                </Link>
            </form>
        </aside>
    )
}

export default Task;
