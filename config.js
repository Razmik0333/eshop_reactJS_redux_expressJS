const mysql = require('mysql2');

const connect = mysql.createPool({
     host     : 'localhost',
     user     : 'root',
     password : '',
     database : 'eshop_new',
}).promise();

async function realyze(queryString, arr ) {
     const [rows, fields] = await  connect.query(queryString, arr); 
     return rows;
     
}

module.exports.realyze = realyze;
