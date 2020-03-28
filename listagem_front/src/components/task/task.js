import React from 'react';
import './task.css';

function task() {
    return (
        <aside>
            <strong>Cadastrar Tarefa</strong>
            <form>
                <div className="task-field">
                    <label htmlFor="description">Descrição da Tarefa:</label>
                    <input name="description" id="description" required/>
                </div>
                <div className="task-field">
                    <label htmlFor="responsible">Responsável pela Tarefa:</label>
                    <input name="responsible" id="responsible" required/>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </aside>
    )
}

export default Task;
