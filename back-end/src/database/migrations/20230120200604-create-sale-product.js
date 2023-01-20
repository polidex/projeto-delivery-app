'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('salesProducts', {
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
    return queryInterface.dropTable('salesProducts')
  }
};
