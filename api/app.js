/**
 * Modules
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/jwt');

/**
 * MongoDB
 */
const db = require('./config/db.js');

/**
 * Express App
 */
const app = express();

/**
 * Middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

/**
 * Index
 */
app.get('/', (req, res) => res.json('APP is Running'));

/**
 * Routes
 */
app.use('/api/v1', require('./routes'));


module.exports = app;
