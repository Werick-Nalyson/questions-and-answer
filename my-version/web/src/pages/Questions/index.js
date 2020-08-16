import React, { useState } from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { FaQuestion, FaArrowLeft } from 'react-icons/fa';

import Footer from '../../components/Footer';

import './styles.css';

function Questions() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();

    function handleCreateQuestion(e) {
        e.preventDefault();
        
        api.post('/perguntar', {
            title,
            description
        }).then(() => {
            history.push('/');
        }).catch((err) => {
            alert(err);
        });
    }

    return(
        <div className="container questions">
            <Link to="/" className="back"><FaArrowLeft /></Link>
            <h1>Realizar pergunta &nbsp; <FaQuestion /></h1>
            <form onSubmit={ handleCreateQuestion }>
                <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <input
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Descrição</label>
                    <textarea
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn button-send text-light btn-block">Enviar pergunta</button>
                </div>

            </form>
            <Footer />
        </div>
    );
}

export default Questions;