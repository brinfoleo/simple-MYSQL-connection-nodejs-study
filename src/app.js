const mysql = require("mysql2");
require('dotenv').config({ path: "./src/.env" })
//console.log(process.env);
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect((err)=> {
    if (err) throw err;
    connection.query("SELECT * FROM users",  (err, result)=> {
      if (err) throw err;
      console.log(result);
    });
  });
