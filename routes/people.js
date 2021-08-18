const express = require('express');
const Router = express.Router();
const mysqlConn = require('../connect');

Router.get('/select', function(req, res){
    mysqlConn.query("SELECT * FROM people", function(err, rows){
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});

Router.put('/insert', function(req, res){
    mysqlConn.query("INSERT INTO people(Name, Age) VALUES('Gerson', '35')", function(err, rows){
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = Router;