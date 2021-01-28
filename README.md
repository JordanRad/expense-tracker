# Expense Tracker Full-Stack Web Application
## *by Jordan Radushev*

#### How to set up the project globally:

1. Open the folder with the project with both front-end and api folders:
```
cd expense-tracker
```
2. Install npm in the folder:
```
cd expense-tracker
```

3. Type the following commands one after another to make the same for the api folder:
```
cd ..
cd expense-tracker-api
npm install
```
4. To start the project locally
* run the following in expense-tracker-api to start the API REST server - port:8000.
```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all --debug
npm start
```
* run the following in expense-tracker to start the react app to start the Expense-trakcer application locally - port:3000.
```
npm start
```

#### After succesffully running the API
check the API endpoints with examples by Swagger-UI on *localhost:8000/api-docs*
   
