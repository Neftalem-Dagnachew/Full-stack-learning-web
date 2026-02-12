
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECTET = "b3f9cA7xP!2kL8mZqR#WvD1E@6yN0H4sJtUo";

exports.getUsers = (req, res) => {

    const sql = "SELECT * FROM users"
    db.query(sql, (err, result) => {

        if(err) return res.status(500).json({ message: "DB error"});
        res.json(result)

    })

}

exports.getMe = (req, res) => {

    const userId = req.user.id
    const sql = "SELECT email, first_name, last_name, nickname, identity, phone_numer, profile_image, cover_image, created_at FROM users WHERE id = ?"
    db.query(sql, [userId], (err, result) => {

        console.error(err)
        if(err) return res.status(500).json({ message: "DB error"});

        if(result.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(result[0])

    })

}

exports.registerUsers = async (req, res) => {
  const { email, password, first_name, last_name, nickname, phone_numer, identity } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const sql = `
    INSERT INTO users (email, password, first_name, last_name, nickname, phone_numer, identity)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [email, hashed, first_name, last_name, nickname, phone_numer, identity], (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ message: "Email already exists" });
      }
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "User registered successfully" });
  });
};

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

        const token = jwt.sign(
            {
             
                id: user.id,
                email: user.email,
                identity: user.identity
                
            },
            JWT_SECTET,
            {expiresIn: "1h"}
        )

        res.json({ 
            message: "Login successfully",
            user: {
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                identity: user.identity,
                phone_numer: user.phone_numer,
                profile_image: user.profile_image,
                cover_image: user.cover_image
            },
            token: token,
        })

    })

}


exports.updateProfilePhoto = (req, res) => {
    const userId = req.user.id;

    if (!req.file) {
        return res.status(400).json({ message: "the photo its not chose" });
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    const sql = "UPDATE users SET profile_image = ? WHERE id = ?";

    db.query(sql, [imageUrl, userId], (err, result) => {
        if (err) return res.status(500).json({ message: "Database error" });
        
        res.json({ 
            message: "Profile photo updated successfully!",
            profile_image: imageUrl
        });
    });
};

exports.updateCoverPhoto = (req, res) => {
    const userId = req.user.id;
    const coverPath = `/uploads/${req.file.filename}`;

    const sql = "UPDATE users SET cover_image = ? WHERE id = ?";
    db.query(sql, [coverPath, userId], (err, result) => {
        if (err) return res.status(500).json({ message: "Database error" });
        res.json({ message: "Cover updated", cover_image: coverPath });
    });
};