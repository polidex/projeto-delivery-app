const express = require('express');
const tokenValidation = require('../auth/tokenValidation');

// rotas de validação

// rotas do controller
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const saleController = require('../controllers/saleController');

const route = express.Router();

route.post('/login', userController.insertLogin);
route.post('/register', userController.userRegister);
route.get('/products', productController.getAllProducts);
route.post('/orders', tokenValidation, saleController.createSale);
route.get('/customer/sales', tokenValidation, saleController.getAllSales);
route.get('/sales/:id', saleController.getSaleById);
route.get('/seller/orders', tokenValidation, saleController.getAllSellers);
route.put('/sales/:id', saleController.updateStatus);
route.post('/admin/register', tokenValidation, userController.adminRegisterUser);
route.delete('/user/:id', tokenValidation, userController.removeUser);
route.get('/users', userController.findAllUsers);
module.exports = route;