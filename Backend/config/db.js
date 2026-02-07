
const mysql = require("mysql2");


const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "iconic_Neftalem3",
    database: "main_learn_app_v2"

});

db.connect((err) => {

    if(err) throw err
    return console.log("MySQL Connected...")

});

module.exports = db;