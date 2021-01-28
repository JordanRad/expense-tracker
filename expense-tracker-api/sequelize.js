const Sequelize = require('sequelize')
const UserModel = require('./models/User')
const ExpenseModel = require('./models/Expense')
const dotenv = require("dotenv")
dotenv.config()
let sequelize; 

const env = process.env.NODE_ENV || 'development';
if (process.env.MODE != "TEST") {
  console.log("Development DB")
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })  
} else {
  console.log("Test DB")
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })

}
const User = UserModel(sequelize, Sequelize)
const Expense = ExpenseModel(sequelize, Sequelize);
//User.hasMany(Expense);
//{ force: true }
// const seed = async () => {
//   try {
//     let user = await User.create({
//       email: "dani.radushev@gmail.com",
//       password: "$2b$10$lNcS7Hgqxvq7P1pbDVa1be1B/dh3AwHVZGzkJJgqeLnXpviOeJTUC",
//       firstName: "Jordan",
//       lastName: "Radushev",
//       status: "ACTIVE"
//     })
//     let e1 = await Expense.create({
//       "name": "Cola 330ml",
//       "price": 1.77,
//       "category": "food",
//       "UserId": user.id
//     })
//     let e2 = await Expense.create({
//       "name": "Sprite 330ml",
//       "price": 1.99,
//       "category": "food",
//       "UserId": user.id
//     })
//     let e3 = await Expense.create({
//       "name": "T-shirt",
//       "price": 19.99,
//       "category": "clothes",
//       "UserId": user.id
//     })
//     let e4 = await Expense.create({
//       "name": "Sandwich",
//       "price": 4.5,
//       "category": "food",
//       "UserId": user.id 
//     })
//     console.log("User created.")
//     for (let i = 1; i <= 4; i++) {
//       console.log(`Expense has been added to ${user.firstName}'s account`)
//     }
//   } catch (err) {
//     console.log(err)
//   }

// }
// // sequelize.sync({
// //     force: true
// //   })
// //   .then(() => {
// //     console.log("Loading...")
// //     console.log(`Connected to the SQLite`)
// //     seed().then()
// //   })
 
module.exports = {
  User,
  Expense
}