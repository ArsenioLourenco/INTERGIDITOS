const mysql = require("mysql");

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysqldb'
});

mysqlConn.connect((err)=>{
    if(err){
        console.log('Connection Failed');
    }else{
        console.log('DB Connected');
    }
});

module.exports = mysqlConn;