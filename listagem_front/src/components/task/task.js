import React, {useState} from 'react';
import './task.css';
import api from '../../services/api';

function task() {
    const [description, setDescription] = useState('');
    const [responsible, setResponsible] = useState('');
     
    async function addTask(e) {
        const response = await api.post('/tasks', {
            description,
            responsible,
        });
    };

    return (
        <aside>
            <strong>Cadastrar Tarefa</strong>
            <form onSubmit={addTask}>
                <div className="task-field">
                    <label htmlFor="description">Descrição da Tarefa:</label>
                    <input 
                      name="description" 
                      id="description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      required
                    />
                </div>
                <div className="task-field">
                    <label htmlFor="responsible">Responsável pela Tarefa:</label>
                    <input 
                      name="responsible" 
                      id="responsible"
                      value={responsible}
                      onChange={e => setResponsible(e.target.value)}
                      required
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </aside>
    )
}

export default Task;
