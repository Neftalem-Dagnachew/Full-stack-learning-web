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

exports.addCourse = (req, res) => {
    const { grade_level, subject_name, title, video_url, description } = req.body;

    const sql = "INSERT INTO courses (grade_level, subject_name, title, video_url, description) VALUES (?, ?, ?, ?, ?)";
    
    db.query(sql, [grade_level, subject_name, title, video_url, description], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Error the course not added" });
        }
        res.json({ message: "successfully add the cours!", id: result.insertId });
    });
};