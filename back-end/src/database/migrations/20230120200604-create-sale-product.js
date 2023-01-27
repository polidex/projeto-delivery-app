'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('sales_products', {
      saleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'sale_id'
      },
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'product_id'
      },
      quantity: Sequelize.INTEGER,
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('sales_products')
  }
};
