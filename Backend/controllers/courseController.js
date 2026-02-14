const db = require('../config/db');

// controllers/courseController.js
exports.getCoursesByFilter = (req, res) => {
    const { grade_level, subject_name } = req.query;

    const sql = "SELECT * FROM courses WHERE grade_level = ? AND subject_name = ?";
    
    db.query(sql, [grade_level, subject_name], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        
        res.status(200).json(results);
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