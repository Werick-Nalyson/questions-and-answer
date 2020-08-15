const { Sequelize, DataTypes } = require('sequelize');
const connection = require('./db.mysql');

const Pergunta = connection.define('Perguntas', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

Pergunta.sync({ force: false }).then(() => {});

module.exports = Pergunta;