
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth")
const upload = require("../middleware/upload")

// for uplode photo
router.put("/update-photo", auth, upload.single("image"), userController.updateProfilePhoto)

// get user
router.get("/get", userController.getUsers)
router.get("/getMe", auth, userController.getMe)

// Register & login
router.post("/register", userController.registerUsers);
router.post("/login", userController.loginUsers)




module.exports = router;