const Sequelize = require('sequelize');

const connection = new Sequelize('askAnswer', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;