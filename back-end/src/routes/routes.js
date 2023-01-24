const express = require('express');

// rotas de validação

// rotas do controller
const loginController = require('../controllers/loginController');

const route = express.Router();

route.post('/login', loginController.insertLogin);

module.exports = route;