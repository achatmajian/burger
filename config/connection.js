var mysql = require ("mysql");
var connection;

if(process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "database-burger.cbsysftdozvr.us-east-2.rds.amazonaws.com",
        user: "arek",
        password: "password",
        database: "burgers_db"
})
};



connection.connect();

module.exports=connection;