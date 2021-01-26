const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./routes/UserController');
const expenseController = require('./routes/ExpenseController');
//init the application server
const app = express();

//middleware to parse every request's body to json
app.use(bodyParser.json())
app.use('/users',userController);
app.use('/expenses',expenseController);

app.listen(8000);