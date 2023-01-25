const express = require('express');

// rotas de validação

// rotas do controller
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

const route = express.Router();

route.post('/login', userController.insertLogin);
route.post('/register', userController.userRegister);
route.get('/products', productController.getAllProducts);

module.exports = route;