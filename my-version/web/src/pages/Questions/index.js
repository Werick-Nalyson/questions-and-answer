import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

function Questions() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleCreateQuestion(e) {
        e.preventDefault();
        
        api.post('/perguntar', {
            title,
            description
        }).then(() => {
            alert("Cadastrado com sucesso.");
        }).catch((err) => {
            alert(err);
        });
    }

    return(
        <div className="container questions">
            <h1>Realizar pergunta</h1>
            <form onSubmit={ handleCreateQuestion }>
                <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <input
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Descrição</label>
                    <textarea
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" >Enviar pergunta</button>
                </div>

            </form>
        </div>
    );
}

export default Questions;