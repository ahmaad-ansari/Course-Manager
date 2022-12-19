const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cms",
  port: "3306",
});

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
