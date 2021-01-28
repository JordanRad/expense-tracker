module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Expenses', [{
      "name": "Cola 330ml",
      "price": 1.77,
      "category": "food",
      "UserId": 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        "name": "Sprite 330ml",
      "price": 1.77,
      "category": "food",
      "UserId": 1,
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Expenses', null, {});
  }
};