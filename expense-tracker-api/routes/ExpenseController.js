const express = require('express');
const router = express.Router();
const {
    Expense
} = require('../sequelize');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const dotenv = require("dotenv")
dotenv.config()
const jwt = require("jsonwebtoken");

router.get('/getByDay', async (req, res) => {
    try {
        let expenses = await Expense.findAll({
            where: 
                Sequelize.and({
                    userId: req.query.userId,
                    creationDay:{
                        [Op.like]:`%${req.query.day}%`
                    }
                })
            
        });
        console.log(expenses)
        expenses.length>0?res.json(expenses):res.sendStatus(404)
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
})
router.get('/getByMonth', async (req, res) => {
    try {
        let expenses = await Expense.findAll({
            where: 
                Sequelize.and({
                    userId: req.query.userId,
                    creationDay:{
                        [Op.like]:`%${req.query.month}%`
                    }
                })   
        });
        console.log(expenses)
        expenses.length>0?res.json(expenses):res.sendStatus(404)
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
})
router.get("/getByUserId/:userId", async (req, res) => {
    try {
        let expenses = await Expense.findAll({
            where: {
                userId: req.params.userId
            },
            attributes: {
                exclude: ["userId"]
            }
        })

        expenses.length !== 0 ? res.json(expenses) : res.sendStatus(404)

    } catch (err) {
        res.json(err);
    }

})

router.post("/", async (req, res) => {
    try { 
        let savedExpense = await Expense.create(req.body);
        res.json({
            message: "Successfully created",
            response: savedExpense
        })
    } catch (err) {
        res.json(err)
    }
})
router.get("/:expenseId", async (req, res) => {
    try {
        let expense = await Expense.findOne({
            where: {
                id: req.params.expenseId
            }
        });
        expense!=null?res.json(expense):res.sendStatus(404)
    } catch (err) {
        console.log(err)
        res.sendStatus(404);
    }
})
router.patch("/:expenseId", async (req, res) => {
    try {
        let updatedExpense = await Expense.update(req.body, {
            where: {
                id: req.params.expenseId
            }
        });
        updatedExpense!=null?res.json(updatedExpense):res.sendStatus(404)
    } catch (err) {
        console.log(err)
        res.sendStatus(404);
    }
})
router.delete("/:expenseId", async (req, res) => {
    try {
        //destroy method returns deleted rows number
        let deletedRows = await Expense.destroy({
            where: {
                id: req.params.expenseId
            }
        });
        deletedRows>0?res.json(`Successfully deleted exepnese with ID:${req.params.expenseId}`):res.sendStatus(404)
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
})

module.exports = router;