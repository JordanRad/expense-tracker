const express = require('express');
const bodyParser = require('body-parser');

//Swager constants for SWAGGER UI
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
      info:{
          title:"Expense-trakcer API",
          version:"1.0.0"
      }
    },
    apis:["app.js"]
  };

 const YAML = require('yamljs') 
const swaggerDocument = YAML.load('./swagger.yaml')

//Controllers
const userController = require('./routes/UserController');
const expenseController = require('./routes/ExpenseController');

//Function acting as a request filter
const tokenRequestFilter =require('./security/tokenRequestFilter');

//init the application server
const app = express();
     
//middleware to parse every request's body to json
app.use(bodyParser.json())
      
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocument))
//middleware to apply JWT filter
app.use(tokenRequestFilter)

app.use('/users',userController);
app.use('/expenses',expenseController);

app.listen(8000);