import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Task.css';
import api from '../../services/api';
import Swal from 'sweetalert2'

function Task() {
    const [description, setDescription] = useState('');
    const [reponsible, setResponsible] = useState('');

    async function addTask(e) {
        e.preventDefault()

        try {
            const response = await api.post('/tasks', {
                description,
                reponsible,
            });
            Swal.fire({
                title: 'Cadastro Realizado',
                text:'Tarefa Cadastrada com sucesso.',
                icon:'success'
            });
        }catch (err) {
            alert('Erro ao cadastrar tente novamente.');
        }

        setDescription('');
        setResponsible('');
    };

    return (
        <aside className="task-container">
            <strong className="task-title">Cadastrar Tarefa</strong>
            <form className="task-form" onSubmit={addTask} >
                <div className="task-field">
                    <label className="task-field-label" htmlFor="description">Descrição da Tarefa:</label>
                    <textarea 
                      name="description" 
                      id="description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      required
                    />
                </div>
                <div className="task-field">
                    <label className="task-field-label" htmlFor="reponsible">Responsável pela Tarefa:</label>
                    <input
                      className="task-field-input" 
                      name="reponsible" 
                      id="reponsible"
                      value={reponsible}
                      onChange={e => setResponsible(e.target.value)}
                      required
                    />
                </div>
                <button className="task-field-button" type="submit">Salvar</button>
                <Link to="/list-tasks" className="back-link">
                    Ir para lista de tarefas 
                </Link>
            </form>
        </aside>
    )
}

export default Task;
