const express = require('express');
const Router = express.Router();
const mysqlConn = require('../connect');

Router.get('/select', function(req, res){
    mysqlConn.query("SELECT * FROM PEOPLE", function(err, rows){
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});

Router.post('/insert', function(req, res){
    // res.writeHead(200, {'Conten-Type':'text/html'});
    let name = req.query.name;
    let age = req.query.age;
    mysqlConn.query("INSERT INTO people(Name, Age) VALUES(?, ?)", [name, age], function(err, rows){
        if(!err){
            res.send('New Row Inserted');
        }else{
            console.log(err);
        }
    });
});

module.exports = Router;