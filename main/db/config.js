const dotenv = require("dotenv")
var mysql = require("mysql");
dotenv.config();
let db_ip = process.env.db_ayo_hos
let db_user = process.env.db_ayo_username
let db_pass = process.env.db_ayo_password
let db_port = process.env.db_ayo_port
let db_name = process.env.db_ayo_name


function master() {
    try {
        let _conn = mysql.createConnection({
            host: db_ip,
            user: db_user,
            password: db_pass,
            database: db_name,
            port: db_port,
            dateStrings: true
        });
        _conn.query("SET NAMES UTF8");
        _conn.query('SET GLOBAL connect_timeout=1000000');
        _conn.query('SET GLOBAL interactive_timeout=1000000');
        _conn.query('SET GLOBAL wait_timeout=1000000');

        _conn.on("err", (err) => {
            console.error("Error Connecting To The DataBase");
            console.debug(err.code + " : " + err.message);
            setTimeout(master, 3000);
        });

        //console.log("connect mysql to master success");
        return _conn;
    } catch {
        console.log("con't connect master mysql");
    }
}

function disconnect(conn) {
    conn.end(function(err) {
        if (err) {
            return console.log("error:" + err.message);
        }
        //console.log("Close the database connection.");
    });
}

module.exports = { master, disconnect }