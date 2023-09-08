const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "162.0.211.93",
    user: "admin",
    password: "Hl6wzC87EMcw5OK43g",
    database: "dehack"
  });

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;