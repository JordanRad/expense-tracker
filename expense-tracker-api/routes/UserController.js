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

const generateToken = (email) => {
    return jwt.sign({
        email: email
    }, process.env.JWT_SECRET, {
        expiresIn: "20h"
    })
}

router.get("/", async (req, res) => {
    try {
        let response = await User.findAll();
        res.json(response);
    } catch (err) {
        res.json(err)
    }
})

router.post("/register", async (req, res) => {
    await bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        try {
            let newUser = {
                email: req.body.email,
                password: hash
            }
            let response = await User.create(newUser);
            res.json(response)

        } catch (err) {
            res.json(err)
        }
    })
})

router.post("/login", async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result === true) {
                let response = {
                    id: user.id,
                    email: user.email
                }
                response.token = generateToken(user.email);

                res.json(response)
            } else {
                res.json("Wrong Credentials")
            }
        })
    } catch (err) {
        res.json(err)
    }
})

module.exports = router;