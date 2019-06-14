const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database/helpers/user-model.js");

//register
router.post("/register", async (req, res) => {
    let { username, password } = req.body;
    if (!username || !password) {
        res.status(401).json({ message: "Please enter valid credentials" });
    } else {
        password = bcrypt.hashSync(password, 8);
        try {
            const newUser = await db.create({ username, password });
            if (newUser) {
                res.status(201).json(newUser);
            }
        } catch (error) {
            res.status(500).json({ message: `Your user could not be created ${error}.` });
        }
    }
});