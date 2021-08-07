const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const database = new Sequelize(dbConfig);

database.authenticate().then(() => {
    console.log('Connected to the database!')
}).catch((err) => {
    console.log('Erro' +err)
});


module.exports = database;