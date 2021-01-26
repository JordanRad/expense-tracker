const Sequelize = require('sequelize')
const UserModel = require('./models/User')
const ExpenseModel = require('./models/Expense')
const sequelize = new Sequelize({
  dialect:'sqlite',
  storage:'./database.sqlite'
})

const User = UserModel(sequelize, Sequelize)
const Expense = ExpenseModel(sequelize,Sequelize);
User.hasMany(Expense);
//{ force: true }
sequelize.sync()
  .then(() => {
    console.log("Loading...")
    console.log(`Connected to the SQLite`)
  })

module.exports = {
  User,Expense
}