'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        field: 'user_id'
      },
      sellerId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        field: 'seller_id'
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_price'
      },
      deliveryAddress: {
        type: Sequelize.STRING(100),
        field: 'delivery_address'
      },
      deliveryNumber: {
        type: Sequelize.STRING(50),
        field: 'delivery_number'
      },
      saleDate: {
        type: Sequelize.DATE,
        field: 'sale_date'
      },
      status: Sequelize.STRING(50)
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('sales')
  }
};
