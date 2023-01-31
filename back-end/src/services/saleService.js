const Sequelize = require('sequelize');
const { User, Sale, SaleProduct, Product } = require('../database/models');
const config = require('../database/config/config');

const env = process.env.NODE_ENV || 'development';

const mapProducts = (products, newSale) => products.map((product) => ({
  saleId: newSale.id, productId: product.id, quantity: product.quantity,
}));

const createSale = async (sale, userId) => {
  const sequelize = new Sequelize(config[env]);
  try {
    const result = await sequelize.transaction(async (t) => {
      const newSale = await Sale.create({
        userId,
        sellerId: 2,
        totalPrice: sale.totalPrice,
        deliveryAddress: sale.deliveryAddress,
        deliveryNumber: sale.deliveryNumber,
      }, { transaction: t });
      const products = mapProducts(sale.products, newSale);
      await SaleProduct.bulkCreate([...products], { transaction: t });
      return newSale;
    });
    return result;
  } catch (error) {
    return error;
  }
};

const getAllSales = async (userId) => {
  const sale = await Sale.findAll({ where: { userId }, 
    include: [{ model: Product,
       as: 'products', 
       attributes: ['id', 'name', 'price'], 
       through: { attributes: ['quantity'] } }], 
}); 
  return sale;
};

const getSaleById = async (id) => {
  const saleById = await Sale.findOne({
<<<<<<< HEAD
    where: { id }, 
    include: [{
      model: User,
      as: 'sellers',
      attributes: ['id', 'name', 'role'],
      // through: { attributes: ['role'] },
     }, 
     { 
      model: Product, 
      as: 'products', 
      attributes: ['id', 'name', 'price'],
      through: { attributes: ['quantity'] },
     },    
    ], 
=======
    where: { id },
    include: {
      all: true,
      attributes: {
        exclude: ['id', 'password'],
      },
    },
>>>>>>> 5a66b941099620abaae39633c294bfba8240cf57
  });
  return saleById;
};

module.exports = { createSale, getAllSales, getSaleById };