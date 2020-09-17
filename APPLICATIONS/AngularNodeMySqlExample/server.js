// {go to the application dir and issue the cmd} npm install express
var express = require('express');
var application = express();
application.use(express.static(__dirname + "/public"));

// {go to the application dir and issue the cmd} npm install log4js
var log4js = require('log4js');
log4js.configure({
    appenders: [
        {type: 'console'},
        {type: 'file', filename: 'log/express.log', category: 'dev'}
    ]
});
var logger = log4js.getLogger('dev');
logger.setLevel('ALL');
application.use(log4js.connectLogger(logger, {level: log4js.levels.DEBUG}));


//https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/
var mysql = require('mysql');

/**
 * Single Connection with mysql
 * @type {*}
 */
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'adarsh',
    password: 'adarsh',
    database: 'test'
});

application.get("/api/tablesList", function (request, response) {
    connection.connect();
    connection.query('select * from information_schema.tables', function (err, rows, fields) {
        connection.end();
        if (!err) {
            logger.log('The solution is: ', rows);
            response.json("data" + rows);
        } else {
            logger.log('Error while performing Query.');
        }
    });
});

/**
 * Connection pool with mysql
 * @type {*}
 */
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'adarsh',
    password: 'adarsh',
    database: 'test',
    debug: true
});
application.get("/api/tables", function (request, response) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            response.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("select * from information_schema.tables", function (err, rows) {
            connection.release();
            if (!err) {
                response.json(rows);
            }
        });

        connection.on('error', function (err) {
            response.json({"code": 100, "status": "Error in connection database"});
            return;
        });
    });
});

application.get("/api/dbs", function (request, response) {

    pool.getConnection(function (err, connection) {
        if (err) {
            logger.error("Error in connection database");
            connection.release();
            response.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        logger.info('connected as id ' + connection.threadId);
        connection.query("SELECT table_name FROM information_schema.tables WHERE table_type = 'base table'"
            , function (err, rows) {
                connection.release();
                if (!err) {
                    logger.info("Data Fetch Successfully From Db");
                    response.json(rows);
                }
            });

        connection.on('error', function (err) {
            logger.error("Error in connection database");
            response.json({"code": 100, "status": "Error in connection database"});
            return;
        });
    });

});

application.listen(3000, 'localhost');
logger.info("localhost:3000");