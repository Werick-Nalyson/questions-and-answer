const Question = require('../database/Perguntas');

module.exports = {
    async index(request, response) {
        const data = await Question.findAll({
            order: [ ['id', 'DESC'] ]
        });
        return response.json(data);
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