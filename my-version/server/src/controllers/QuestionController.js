const Question = require('../database/Perguntas');
const Answer = require('../database/Respostas');

module.exports = {
    async index(request, response) {
        let dados = [];
        const data = await Question.findAll({
            order: [ ['id', 'DESC'] ]
        });

        const data2 = await Answer.findAll({
            order: [['perguntaId', 'DESC']]
        });

        dados.push({ perguntas: data });
        dados.push({ respostas: data2 });

        return response.json(dados);
    },

    async create(request, response) {
        const { title, description } = request.body;

        try {
            await Question.create({
                title,
                description
            });

            return response.status(201).send();
        } catch (error) {
            return response.json({ error });
        }
    }

}