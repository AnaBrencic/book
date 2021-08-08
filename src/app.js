'use strict'

import express, { json, urlencoded } from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';
import './server.js';
import '../src/database/index.js';


const app = express();

dotenv.config();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(routes)

app.set('port', process.env.PORT);


export default app;