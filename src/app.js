'use strict'

require('dotenv/config')
require('../src/database/index.js')
const express = require('express')
const routes = require('./routes/index.js')
require('./database/index.js')

const app = express()

app.use(express.json())
app.use(routes)

module.exports = app
