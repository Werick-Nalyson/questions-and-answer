const { Sequelize, DataTypes } = require('sequelize');
const connection = require('./db.mysql');

const Resposta = connection.define('Respostas', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    perguntaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Resposta.sync({ force: false });

module.exports = Resposta;