var connection = require("connection.js");

var orm = {

    selectAll:function(tablename, callback){
        connection.query("SELECT * FROM " + tablename, function (error, results){
            if (error) throw (error);
            console.log(results);
            callback(results);
        })

    },

    insertOne:function(tablename, callback){
        connection.query("SELECT * FROM " + tablename, function (error, results){
            if (error) throw (error);
            console.log(results);
            callback(results);
        })
    },

    updateOne:function(tablename, callback){
        connection.query("SELECT * FROM " + tablename, function (error, results){
            if (error) throw (error);
            console.log(results);
            callback(results);
        })
    },

};

module.exports=orm;