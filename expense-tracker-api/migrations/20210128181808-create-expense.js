'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      creationDay: {
        type: Sequelize.STRING,
        defaultValue: new Date().toLocaleDateString("en-US")
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId:{
        type:Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id',
          as: 'userId',
        }
      }
    });
  }, 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Expenses');
  }
};