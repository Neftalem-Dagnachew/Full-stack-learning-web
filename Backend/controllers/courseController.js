const db = require('../config/db');

exports.getCoursesByFilter = (req, res) => {
    const { grade, subject } = req.query;

    const sql = "SELECT * FROM courses WHERE grade_level = ? AND subject_name = ?";
    
    db.query(sql, [grade, subject], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database error occurred" });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "don't have courses" });
        }
        res.json(results);
    });
};