var mysql = require("./config");
const disconnect = mysql.disconnect;

class main_db {
    static ins_std_cid_check(cid) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = "INSERT IGNORE INTO std_cid_check (cid, flag) VALUES (?, ?)";
            _conn.query(sql, [cid, 0], (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve("success");
            });
        })
    }

    static check_cid(db_name) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = "CALL std_cid_check(?); ";
            _conn.query(sql, [db_name], (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve("success");
            })
        })
    }

    static transfer_data(db_name, cid) {
        console.log("start call std_insert_table_all");
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = "CALL std_insert_table_all(?, ?); ";
            _conn.query(sql, [db_name, cid], (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                console.log("end call std_insert_table_all");
                resolve("success");
            })
        })
    }

    static async get_std_admission(opt) {
        var select = await this.select_all('std_admission');
        let _conn = mysql.master();

        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_admission WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res);
            })
        })
    }

    static update_std_admission(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = "UPDATE std_admission SET flag=1 WHERE 1 ";
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve("success");
            })
        })
    }

    static async get_std_ipd_diag(opt) {
        var select = await this.select_all('std_ipd_diag');
        let _conn = mysql.master();

        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_ipd_diag WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res);
            })
        })
    }

    static update_std_ipd_diag(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_ipd_diag SET flag=1 WHERE hoscode = '${opt.hoscode}' and cid = '${opt.cid}' and date_serv = '${opt.date_serv}' and vsttime = '${opt.vsttime}' and diagcode = '${opt.diagcode}' `;
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve("success");
            })
        })
    }

    static async get_std_ipd_drug(opt) {
        var select = await this.select_all('std_ipd_drug');
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_ipd_drug WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res);
            })
        })
    }

    static update_std_ipd_drug(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_ipd_drug SET flag=1 WHERE hoscode = '${opt.hoscode}' and cid = '${opt.cid}' and date_serv = '${opt.date_serv}' and vsttime = '${opt.vsttime}' and disstd = '${opt.disstd}' `;
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve("success");
            })
        })
    }

    static async get_std_ipd_lab(opt) {
        var select = await this.select_all('std_ipd_lab');
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_ipd_lab WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res);
            })
        })
    }

    static update_std_ipd_lab(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_ipd_lab SET flag=1 WHERE hoscode = '${opt.hoscode}' and cid = '${opt.cid}' and date_serv = '${opt.date_serv}' and vsttime = '${opt.vsttime}' and labtest = '${opt.labtest}' `;
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve("success");
            })
        })
    }

    static async get_std_opd_diag(opt) {
        var select = await this.select_all('std_opd_diag');
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_opd_diag WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res);
            })
        })
    }

    static update_std_opd_diag(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_opd_diag SET flag=1 WHERE hoscode = '${opt.hoscode}' and  cid = '${opt.cid}' and date_serv = '${opt.date_serv}' and vsttime = '${opt.vsttime}' and diagcode = '${opt.diagcode}' and flag = '0' `;
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve("success");
            })
        })
    }

    static async get_std_opd_drug(opt) {
        var select = await this.select_all('std_opd_drug');
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_opd_drug WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res);
            })
        })
    }

    static update_std_opd_drug(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_opd_drug SET flag=1 WHERE hoscode = '${opt.hoscode}' and cid = '${opt.cid}' and date_serv = '${opt.date_serv}' and vsttime = '${opt.vsttime}' and disstd = '${opt.disstd}' and flag = '0' `;
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve('success');
            })
        })
    }

    static async get_std_opd_lab(opt) {
        var select = await this.select_all('std_opd_lab');
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_opd_lab WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res);
            })
        })
    }

    static update_std_opd_lab(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_opd_lab SET flag=1 WHERE hoscode = '${opt.hoscode}' and cid = '${opt.cid}' and date_serv = '${opt.date_serv}' and vsttime = '${opt.vsttime}' and labtest = '${opt.labtest}' `;
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve("success");
            })
        })
    }

    static async get_std_person(opt) {
        var select = await this.select_all('std_person');
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_person WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res);
            })
        })
    }

    static update_std_person(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_person SET flag=1 WHERE cid = '${opt.cid}' `;
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve("success");
            })
        })
    }

    static async get_std_refer(opt) {
        var select = await this.select_all('std_refer');
        let _conn = mysql.master()
        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_refer Where 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err
                disconnect(_conn)
                resolve(res);
            })
        })
    }

    static async update_std_refer(opt){
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_refer SET flag=1 WHERE hoscode = ${opt.hoscode} and cid = ${opt.cid} and date_refer = ${opt.date_refer} `;
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                //console.log("update std_service success");
                resolve("success");
            })
        })
    }

    static async get_std_service(opt) {
        var select = await this.select_all('std_service');
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM std_service WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res);
            })
        })
    }

    static update_std_service(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_service SET flag=1 WHERE cid = '${opt.cid}' and date_serv = '${opt.date_serv}' and time_serv = '${opt.time_serv}' `;
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                //console.log("update std_service success");
                resolve("success");
            })
        })
    }

    static select_all(table_name) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = "SELECT GROUP_CONCAT( COLUMN_NAME ) select_sql FROM information_schema.`COLUMNS` AS c WHERE c.TABLE_SCHEMA = 'ayo_connect' AND c.TABLE_NAME = ? AND c.COLUMN_NAME != 'flag' ";
            _conn.query(sql, [table_name], (err, res) => {
                if (err) throw err
                disconnect(_conn)
                resolve(res[0].select_sql)
            })
        })
    }
}

module.exports = main_db;