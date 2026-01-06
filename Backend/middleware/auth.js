const jwt = require("jsonwebtoken");
const JWT_SECTET = "b3f9cA7xP!2kL8mZqR#WvD1E@6yN0H4sJtUo";

module.exports = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if(!authHeader) return res.status(401).json({ message: "No token provide"});

    const token = authHeader.split(" ")[1];
    if(!token) return res.status(401).json({ message: "Invalid token"});

    try {

        const decode = jwt.verify(token, JWT_SECTET);
        req.user = decode;
        next()

    } catch (err) {
        return res.status(401).json({ message: "Invalid token"});
    }

}