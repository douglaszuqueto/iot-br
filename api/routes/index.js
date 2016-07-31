const express = require('express');
const router = express.Router();

/**
 * Index
 */
router.get('/', (req, res) => res.json('API is Running'));

/**
 * Login
 */
router.post('/login', require('./user/controllers/login'));

/**
 * User
 */
router.use('/users', require('../config/middlewares/jwt'), require('./user/user'));

/**
 * Protected Route
 */
router.get('/secret', require('../config/middlewares/jwt'), (req, res) => res.json('ok'));


module.exports = router;
