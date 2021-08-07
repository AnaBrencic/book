const express = require('express');
const routes = require('./routes/index.js');
const app = express();
require('./server.js');
require('../src/database/index.js');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

app.set('port', process.env.PORT);


module.exports = app;