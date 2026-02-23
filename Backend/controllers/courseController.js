const db = require('../config/db');

exports.getCoursesByFilter = (req, res) => {
    const { grade_level, subject_name } = req.query;

    const sql = `
        SELECT 
            u.id AS unit_id,
            u.unit_number,
            u.unit_title,
            l.id AS lesson_id,
            l.lesson_title,
            l.video_url,
            l.description
        FROM subjects s
        JOIN units u ON s.id = u.subject_id
        LEFT JOIN lessons l ON u.id = l.unit_id
        WHERE s.grade_level = ? AND s.subject_name = ?
        ORDER BY u.unit_number, l.id;
    `;

    db.query(sql, [grade_level, subject_name], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        const organizedData = results.reduce((acc, curr) => {
            let unit = acc.find(u => u.unit_id === curr.unit_id);
            
            if (!unit) {
                unit = {
                    unit_id: curr.unit_id,
                    unit_number: curr.unit_number,
                    unit_title: curr.unit_title,
                    lessons: []
                };
                acc.push(unit);
            }

            if (curr.lesson_id) {
                unit.lessons.push({
                    id: curr.lesson_id,
                    title: curr.lesson_title,
                    video_url: curr.video_url,
                    description: curr.description
                });
            }
            return acc;
        }, []);

        res.status(200).json(organizedData);
    });
};

exports.addLesson = (req, res) => {
    const { unit_id, lesson_title, video_url, description, thumbnail } = req.body;

    const sql = "INSERT INTO lessons (unit_id, lesson_title, video_url, description, thumbnail) VALUES (?, ?, ?, ?, ?)";
    
    db.query(sql, [unit_id, lesson_title, video_url, description, thumbnail], (err, result) => {
        if (err) return res.status(500).json({ error: "can't register lesson" });
        
        res.json({ message: "Lesson registered successfully", id: result.insertId });
    });
};