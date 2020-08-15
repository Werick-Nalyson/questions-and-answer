const express = require('express');
const routes = express.Router();

const QuestionController = require('./controllers/QuestionController');
const AnswerController = require('./controllers/AnswerController');

routes.get('/perguntar', QuestionController.index);
routes.post('/perguntar', QuestionController.create);

routes.get('/respostas', AnswerController.index);
routes.post('/responder', AnswerController.create);

module.exports = routes;