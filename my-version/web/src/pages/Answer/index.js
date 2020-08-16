import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { FaQuestion, FaRegQuestionCircle } from 'react-icons/fa';

import Button from '../../components/Button';

import './styles.css';

function Questions() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    function listQuestions () {
        api.get('perguntar').then(response => {
            setQuestions(response.data[0].perguntas);
            setAnswers(response.data[1].respostas);
        });
    }

    useEffect(() => {
        listQuestions();
    }, []);

    async function handleCreateAsk(e) {
        e.preventDefault();

        try {
            await api.post('/responder', {
                content: e.target.resposta.value, 
                id: e.target.id.value
            });

            listQuestions ();
        } catch(err) {
            alert("Erro ao enviar")
        }
    }

    return(        
        <div className="container-fluid toAsk">
        {/* <button type="button" onClick={() => filterRespotas(2)}>Clique aqui</button> */}
            <div className="toQuestions">
                <h1>{"Perguntas & Respostas"}</h1>
                <Link to="/perguntar" className="link-ask">Faça uma pergunta <FaQuestion /> </Link>
            </div> 

            <div className="container ask-container">

                {questions.map(question => (
                    <div key={question.id} className="content p-3 rounded">
                    <div className="group">
                        <h3><FaRegQuestionCircle /> &nbsp; {question.title }</h3>
                        <a className="btn btn-dark" data-toggle="collapse" href={`#collapseExample${question.id}`} role="button" aria-controls="collapseExampl">
                            Responder
                        </a>

                    </div>
                    <p className="description mt-2">
                        { question.description }
                    </p>

                    <div className="collapse text-dark" id={`collapseExample${question.id}`}>
                        <div className="card card-body qts">

                                {answers.map(answer => {
                                    if (question.id === answer.perguntaId) {
                                        return (
                                            <p key={answer.id}>
                                                {answer.content}
                                            </p>
                                        );
                                    }
                                    return "";
                                })}
                           
                        </div>
                        <div className="group2">
                            <form onSubmit={ handleCreateAsk }>
                                <input type="hidden" className="input-id" name="id" value={question.id} disabled="" />
                                <input placeholder="Escreva sua resposta aqui" name="resposta" autoComplete="off" />
                                <Button type="submit" name="Enviar" />
                            </form>
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </div>
    );
}

export default Questions;