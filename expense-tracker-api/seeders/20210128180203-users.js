module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'Test1',
        lastName: 'Test1',
        email: 'test1@mail.com',
        password: '$2b$10$lNcS7Hgqxvq7P1pbDVa1be1B/dh3AwHVZGzkJJgqeLnXpviOeJTUC',
        status:"ACTIVE",
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        firstName: 'Test2',
        lastName: 'Test2',
        email: 'test2@mail.com',
        password: '$2b$10$lNcS7Hgqxvq7P1pbDVa1be1B/dh3AwHVZGzkJJgqeLnXpviOeJTUC',
        status:"ACTIVE",
        createdAt: new Date(),
      updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};