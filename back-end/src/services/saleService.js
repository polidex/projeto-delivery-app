const Sequelize = require('sequelize');
const { Sale, SaleProduct } = require('../database/models');
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

module.exports = { createSale };