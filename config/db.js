
var mysql = require('mysql');

var connection = mysql.createConnection({
  //properties
  host: 'localhost',
  user: 'root',
  password: 'a5f7c674',
  database: 'log'
});
connection.connect(function (error) {
  if (!!error) {
    console.log('Error' + error);
  }
  else {
    console.log('connected');
  }
});

module.exports.connection = connection;