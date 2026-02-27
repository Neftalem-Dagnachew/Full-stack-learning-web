const express = require("express");
const app = express();
const userRoutes = require("./routes/userRouters");
const courseRoutes = require('./routes/courseRoutes');
const aiRoutes = require('./routes/aiRoutes');
const cors = require("cors");
const path = require('path');
app.use(cors());

// require('dotenv').config();
app.use(express.json());

app.use('/api', aiRoutes);
app.use("/users", userRoutes);
app.use('/api/courses', courseRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen( 5000, () => console.log("Server running on port http://localhost:5000"));