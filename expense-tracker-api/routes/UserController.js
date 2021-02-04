const express = require('express');
const router = express.Router();
const {
    User
} = require('../sequelize'); 

const bcrypt = require('bcrypt');
const saltRounds = 10;

const dotenv = require("dotenv")
dotenv.config()
const jwt = require("jsonwebtoken");

const Sequelize = require('sequelize');


  
const generateToken = (email) => {
    return jwt.sign({
        email: email
    }, process.env.JWT_SECRET, {
        expiresIn: "20h"
    })
}

router.get("/:id", async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        user!==null?res.json(user):res.sendStatus(404)
    } catch (err) {
        res.sendStatus(500).json(err)
    }
})

router.post("/register", async (req, res) => {
    await bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        try {
            let newUser = {
                email: req.body.email,
                password: hash,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                status: "ACTIVE"
            }
            let response = await User.create(newUser);
            res.json(response)
        } catch (err) {
            res.sendStatus(409).json(err)
        }
    })
})
router.post("/login", async (req, res) => {
    try {
        let user = await User.findOne({
            where: Sequelize.or({
                email: req.body.email,
                status: "ACTIVE"
            })
        })
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result === true) {
                let response = {
                    id: user.id,
                    email: user.email,
                    firstName:user.firstName
                }
                response.token = generateToken(user.email);

                res.json(response)
            } else {
                res.sendStatus(404)
            }
        })
    } catch (err) {
        res.json("Wrong Credentials")
    }
})       
router.put("/:id", async (req, res) => {
    try {
        await bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
                if (!err) {
                    let user = {};
                    try {
                        user = await User.update({
                            email: req.body.email,
                            password: hash,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName
                        }, {
                            where: {
                                id: req.params.id
                            }
                        })
                        res.json({
                            message: "User updated",
                            user: user,
                        })
                    } catch (err) {
                        res.json("Email already exists")
                    }
                }
            }

        )
    } catch (err) {
        res.json({
            message: "Error",
            error: err
        })
    }
})
   
router.delete("/:id", async (req, res) => {
    try {
        user = await User.update({
            status: "DEACTIVATED"
        }, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            message: "Account deactivated"
        })
    } catch (err) {
        res.json({
            message: "Error"
        })
    }
})
router.patch("/activate/:id", async (req, res) => {
    try {
        user = await User.update({
            status: "ACTIVE"
        }, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            message: "Account Activated"
        })
    } catch (err) {
        res.json({
            message: "Error"
        })
    }
})

module.exports = router;