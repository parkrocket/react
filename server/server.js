
const express = require('express')
const app = express()
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);


app.set('port', process.env.PORT || 4000);


app.get('/', (req, res) => {
    res.send('Root')
})



app.get('/users', (req, res) => {
    //connection.connect();

    connection.query("SELECT * FROM g5_member WHERE mb_id = 'admin'", (error, rows) => {
        //if (error) throw error;
        //console.log('User info is: ', rows);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows);
    });

    //connection.end();
});







app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});