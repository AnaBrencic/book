'use strict'

const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const Book = require('../models/Book.js')
const Quote = require('../models/Quote.js')

const database = new Sequelize(dbConfig)

database.authenticate().then(() => {
  console.log('Connected to the database!')
}).catch((err) => {
  console.log('Error' + err)
})

Book.init(database)
Quote.init(database)

Quote.associate(database.models)
Book.associate(database.models)

module.exports = database
