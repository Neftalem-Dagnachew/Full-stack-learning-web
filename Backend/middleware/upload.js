const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, "uploads/")
    },
    filename: (req, file, cd) => {
        // the file name is not repited use (timestamp + random number)
        const uniqueSuffix = Date.now() + "_" + Math.random(Math.random() * 1E9);
        cd(null, uniqueSuffix + path.extname(file.originalname));
    }
});