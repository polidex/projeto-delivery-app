
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATETIME,
    status: DataTypes.STRING(50)
  }, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  })

  User.associate = (models) => {
    User.belongsTo(models.User, {
      foreignKey: 'UserId', as: 'buyers'
    }),
    User.belongsTo(models.User, {
      foreignKey: 'sellerId', as: 'sellers'
    })
  }

  return Sale
}