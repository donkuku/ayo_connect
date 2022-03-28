var mysql = require("./config");
const disconnect = mysql.disconnect;

class main_db {

    static ins_std_cid_check(cid) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = "INSERT IGNORE INTO std_cid_check (cid, flag) VALUES (?, ?)";
            _conn.query(sql, [cid, 0], (err, res) => {
                if (err) {
                    resolve({ status: "false", message: "insert std_cid_check error code => " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "call std_cid_check: success" });
                }
            });
        })
    }

    static check_cid(db_name) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = "CALL std_cid_check(?); ";
            _conn.query(sql, [db_name], (err, res) => {
                if (err) {
                    resolve({ status: "false", message: "CALL std_cid_check error code => " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "CALL std_cid_check: success" });
                }
            })
        })
    }

    static transfer_data(db_name, cid) {
        let _conn = mysql.master();

        return new Promise((resolve, reject) => {
            var sql = "CALL std_insert_table_all(?, ?); ";
            _conn.query(sql, [db_name, cid], (err, res) => {
                if (err) {
                    resolve({ status: "false", message: "call std_insert_table_all: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "call std_insert_table_all: success" });
                }
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
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_admission: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_admission: success" });
                }
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
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_ipd_diag: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_ipd_diag: success" });
                }
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
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_ipd_drug: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_ipd_drug: success" });
                }
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
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_ipd_lab: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_ipd_lab: success" });
                }
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
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_opd_diag: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_opd_diag: success" });
                }
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
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_opd_drug: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_opd_drug: success" });
                }
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
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_opd_lab: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_opd_lab: success" });
                };
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
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_opd_lab: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_opd_lab: success" });
                };
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

    static async update_std_refer(opt) {
        let _conn = mysql.master();
        return new Promise((resolve, reject) => {
            var sql = `UPDATE std_refer SET flag=1 WHERE hoscode = '${opt.hoscode}' and cid = '${opt.cid}' and date_refer = '${opt.date_refer}' `;
            _conn.query(sql, (err, res) => {
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_refer: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_refer: success" });
                };
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
                if (err) {
                    resolve({ status: "false", message: "UPDATE std_refer: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE std_refer: success" });
                };
            })
        })
    }


    // auto
    static select_table_all() {
        let _conn = mysql.master()
        return new Promise((resolve, reject) => {
            var sql = "SELECT c.TABLE_NAME table_name FROM information_schema.`TABLES` AS c WHERE c.TABLE_SCHEMA = 'ayo_connect'  and c.TABLE_NAME like 'std_%' and c.TABLE_NAME != 'std_cid_check' "
            _conn.query(sql, (err, res) => {
                if (err) {
                    resolve({ status: "false", message: "SELECT TABLE_NAME: " + err.errorno })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: res });
                };
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

    static select_key(table_name) {
        let _conn = mysql.master()
        return new Promise((resolve, reject) => {
            var sql = "SELECT c.COLUMN_NAME column_name FROM information_schema.KEY_COLUMN_USAGE AS c  WHERE c.TABLE_SCHEMA = 'ayo_connect' and c.TABLE_NAME = ? "
            _conn.query(sql, [table_name], (err, res) => {
                if (err) throw err
                disconnect(_conn)
                resolve(res)
            })
        })
    }

    static async get_data_table(table, opt) {

        var select = await this.select_all(table);
        let _conn = mysql.master()

        return new Promise((resolve, reject) => {
            var sql = `SELECT ${select} FROM ${table} WHERE 1 `;
            if (opt.cid) { sql += "and cid = " + opt.cid + " "; }
            sql += " and flag = 0 "
            _conn.query(sql, (err, res) => {
                if (err) throw err;
                disconnect(_conn);
                resolve(res)
            })
        })
    }

    static async update_flag_table(table, opt) {
        let _conn = mysql.master()
        var col_key = await this.select_key(table)

        return new Promise((resolve, reject) => {

            var sql = `UPDATE ${table} SET flag=1 WHERE 1 `

            let name_opt = Object.getOwnPropertyNames(opt)
            let val_opt = Object.values(opt)

            for (let i = 0; i < col_key.length; i++) {
                var key = col_key[i].column_name

                for (let k = 0; k < name_opt.length; k++) {
                    if (key == name_opt[k]) {
                        sql += `and ${key} = '${val_opt[k]}' `
                    }
                }
            }

            _conn.query(sql, (err, res) => {
                if (err) {
                    resolve({ status: "false", message: "UPDATE false" })
                } else {
                    disconnect(_conn);
                    resolve({ status: "true", message: "UPDATE success" });
                };
            })
        })
    }
}

module.exports = main_db;