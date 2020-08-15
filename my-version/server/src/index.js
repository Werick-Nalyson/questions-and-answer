const express = require('express');
const cors = require('cors');
const Routes = require('./routes');
const connection = require('./database/db.mysql');
const PerguntaModel = require('./database/Perguntas');
const RespostaModel = require('./database/Respostas');

const app = express();
app.use(express.json());
app.use(cors());
app.use(Routes);

connection
    .authenticate()
    .then(() => {
        console.log("Conectado ao banco de dados.");
    }).catch((err) => {
        console.log("Erro ao se conectar ao banco: " + err);
    });


app.listen(3333);