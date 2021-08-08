'use strict'

import Sequelize from 'sequelize'
import dbConfig from '../config/database.js'

const database = new Sequelize(dbConfig)

database.authenticate().then(() => {
  console.log('Connected to the database!')
}).catch((err) => {
  console.log('Erro' + err)
})

export default database
