var mysql = require ("mysql");
var connection = mysql.createConnection({
    host: "database-burger.cbsysftdozvr.us-east-2.rds.amazonaws.com",
    user: "arek",
    password: "password",
    database: "burgers_db"
});

connection.connect();

module.exports=connection;