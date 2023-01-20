'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      price: Sequelize.DECIMAL(4, 2),
      urlImage: {
        type: Sequelize.STRING,
        field: 'url_image'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('products')
  }
};
