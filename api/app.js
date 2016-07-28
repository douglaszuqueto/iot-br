/**
 * Express Instance
 */
const app = require('./config/express');

/**
 * Routes
 */
require('./routes')(app);

module.exports = app;
