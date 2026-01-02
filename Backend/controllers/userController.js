
const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {

    const { email, password, first_name, last_name, nickname, phone_numer, identity } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (email, password, first_name, last_name, nickname, phone_numer, identity) VALUES (?, ?, ?, ?, ?, ?, ?)"

    db.query(sql, [email, hashed, first_name, last_name, nickname, phone_numer, identity], (err, result) => {

        if(err) {

            if(err.code === "ER_DUP_ENTRY") {
                return res.status(409).json({ message: "Email already exists"});
            }

            return res.status(500).json({ error: err.message});

        }

        res.json({message: "User registered successfully"})

    })

}