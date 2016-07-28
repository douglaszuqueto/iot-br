const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 * Middlewares
 */
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

module.exports = app;