const mysql = require('mariadb');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

const mariadb = require('mariadb');
const pool = mariadb.createPool({host: 'localhost:3307', user: 'root', connectionLimit: 5});
pool.getConnection()
    .then(conn => {
      conn.query("SELECT * from learner_details")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          return conn.query("INSERT INTO learner_details value (?, ?,?)", [1, "001","Ambrose Ogwang","ambroseogwang24@gmail.com","1"]);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          conn.end();
        })
    }).catch(err => {
      //not connected
    });
const port=process.env.PORT||8080;
app.listen(port,()=>console.log(`Listening to port:${port}`));