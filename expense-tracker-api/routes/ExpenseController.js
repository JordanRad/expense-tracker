const express = require('express');
const router = express.Router();
const {
    Expense
} = require('../sequelize');


router.get("/getByUserId/:userId", async (req, res) => {
    try{
        let expenses = await Expense.findAll({where:{userId:req.params.userId}})
        res.json(expenses)
    }catch(err){
        res.json(err);
    }
})

router.post("/", async (req, res) => {
    try{
        // let expense = {
        //     name:req.body.name,
        //     category:req.body.category,
        //     price:req.body.price

        // } 
        let savedExpense = await Expense.create(req.body);
        
        res.json({message:"Successfully created",response:savedExpense})
    }catch(err){
        res.json(err)
    }
})


module.exports = router;