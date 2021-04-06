# Expense Tracker Full-Stack Web Application
🟡 *This project is still not fully completed since only the server side is ready.*

## Case
Building a full-stack expense tracker was one of my first group projects in the university. Then I wanted to make "translate" it from its pure PHP (backend) and standard HTML, CSS & JS (frontend) to modern NodeJs & React JS project.

## API Endpoints & Models
![.](https://github.com/JordanRad/expense-tracker/blob/main/images/api.png)

![.](https://github.com/JordanRad/expense-tracker/blob/main/images/models.png)
## About the stack
As a full-stack app, my expense-tracker needs front-end and back-end part. I use the following technologies:
* Front-end application:
   * React.js
   * Materlial UI
* Back-end server part:
   * Node.js
   * Express.js
* Database:
   * SQLite3 file database
* Other:
   * Swagger UI

## How to set up the project globally:

1. Open the folder with the project with both front-end and api folders:
```
cd expense-tracker
```
2. Install npm in the folder:
```
npm install
```

3. Type the following commands one after another to make the same for the api folder:
```
cd ..
cd expense-tracker-api
npm install
```
4. To run the project locally
* run the following in expense-tracker-api to start the API - port:8000.
```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all --debug
npm start
```
* run the following in expense-tracker to start the react app to start the Expense-trakcer application locally - port:3000.
```
npm start
```

## After succesffully running the API
check the API endpoints with examples by Swagger-UI on *localhost:8000/api-docs*

