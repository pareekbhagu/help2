var mysql = require('mysql');
var config = {
    host     : 'localhost',
    user     : 'root',
    password : 'a5f7c674',
    database : 'log',
    debug: ['ComQueryPacket'/*, 'RowDataPacket'*/],
    multipleStatements: true
  }

class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }
    query(sql, args, single) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows, fields) => {
                if (err)
                    return reject(err);
                    var result = single?rows[0]:rows;
                //    console.log(sql);

                     if (rows.length) resolve(rowtojson(result));
                     resolve([])
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}
const database = new Database(config);
if(database.query){
    module.exports.database = database;
}
