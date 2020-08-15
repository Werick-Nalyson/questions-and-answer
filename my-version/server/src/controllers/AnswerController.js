const Answer = require('../database/Respostas');
const Question = require('../database/Perguntas');
const { index } = require('./QuestionController');
const { QueryTypes } = require('sequelize');
const sequelize = require('../database/db.mysql');

module.exports = {

    async index(request, response) {

        const { id } = request.headers;

        const [data] = await sequelize.query(`SELECT * from Respostas WHERE Respostas.perguntaId = ${id}`);

        return response.json(data);
    },

    async create(request, response) {
        // const { id } = request.headers;
        const { content, id } = request.body;

        // return response.json({ query: querys });

        try {

            const perguntaId = await Question.findOne({
                attributes: ['id'],
                where: {id: id}
            });

            if (!perguntaId) {
                return response.json({ error: "Question not found" });
            }

            await Answer.create({
                content,
                perguntaId: perguntaId.id
            });
            
            return response.status(201).send();
        } catch(error) {
            return response.json({ error });
        }
    }

}
