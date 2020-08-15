import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

function Questions() {
    const [questions, setQuestions] = useState([]);
    const [content, setContent] = useState('');
    const [respostas, setRespostas] = useState([]);


    useEffect(() => {
        api.get('perguntar').then(response => {
            setQuestions(response.data);
            console.log(questions);
        });
    }, []);

    

    function handleCreateAsk(e) {
        e.preventDefault();

        api.post('/responder', {
            content: e.target.resposta.value, 
            id: e.target.id.value
            
        }).then(() => {
            alert("resposta enviada com sucesso")
        }).catch(err => {
            alert("Erro ao enviar")
        })
    }

    return(

        
        <div className="container-fluid toAsk">
        {/* <button type="button" onClick={() => filterRespotas(2)}>Clique aqui</button> */}
            <div className="toQuestions">
                <h1>Perguntas</h1>
                <Link to="/perguntar" className="link-ask">Clique aqui para fazer uma pergunta</Link>
            </div> 

            <div className="container ask-container">

                {questions.map(question => (
                    <div key={question.id} className="content p-3 rounded bg-primary text-light">
                    <div className="group">
                        <h3>{ question.title }</h3>
                        <a className="btn btn-primary" data-toggle="collapse" href={`#collapseExample${question.id}`} role="button" aria-controls="collapseExampl">
                            Responder
                        </a>

                    </div>
                    <p className="description">
                        { question.description }
                    </p>

                    <div className="collapse text-dark" id={`collapseExample${question.id}`}>
                        <div className="card card-body qts">

                           
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </p>
                           
                        </div>
                        <div className="group2">
                            <form onSubmit={ handleCreateAsk }>
                                <input type="hidden" className="input-id" name="id" value={question.id} disabled="" />
                                <input placeholder="Escreva sua resposta aqui" name="resposta" />
                                <button type="submit">
                                    Enviar
                                </button>
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