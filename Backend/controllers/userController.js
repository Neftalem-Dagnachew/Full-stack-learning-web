
const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.getUsers = (req, res) => {

    const sql = "SELECT * FROM users"
    db.query(sql, (err, result) => {

        if(err) return res.status(500).json({ message: "DB error"});
        res.json(result)

    })

}

exports.registerUsers = async (req, res) => {

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

exports.loginUsers = (req, res) => {

    const {email, password} = req.body;
    const sql = "SELECT * FROM users WHERE email = ?"

    db.query(sql, [email], async (err, result) => {

        if(err) {
            console.error("Login error:", err)
            return res.sendStatus(500)
        }
        
        if(result.length === 0){
            return res.status(400).json({ message: "Invalid email"})
        }

        const user = result[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid password"});
        }

        res.json({ 
            message: "Login successfully",
            user: {
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                identity: user.identity
            }
        })

    })

}