const express = require('express');

//rotas de validação

//rotas do controller
const userController = require('../controllers/userController');

const route = express.Router();

route.post('/login', userController.insertLogin);
route.post('/register', userController.userRegister)

module.exports = route;