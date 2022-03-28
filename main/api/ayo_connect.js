const axios = require('axios')
const dotenv = require("dotenv");
const main_db = require('../db/main');
const db_main = require('../db/main')
dotenv.config();

const url = process.env.url
var token = process.env.token
var res_main
var config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
    }
}

class ayo_connect {

    static login(g_username, g_password) {
        return new Promise((resolve, reject) => {
            axios.post(url + '/login', {
                username: g_username,
                password: g_password
            }).then(function (response) {
                if (response.data.auth) {
                    // Update Config Authorization
                    config.headers.Authorization = `Bearer ${response.data.token}`
                    resolve({ status: "true", message: response.data.token })
                } else {
                    resolve({ status: "false", message: response.data.message })
                }
            }).catch(function (error) {
                resolve({ status: "false", message: "can't connect api" });
            });
        });
    }

    static getPid() {
        return new Promise((resolve, reject) => {
            axios.post(url + '/api/checkconsent', {}, config).then(async (response) => {
                if (response.data.MessageCode == '200') {
                    // success
                    resolve({ status: "true", message: response.data.result });
                } else {
                    // error
                    console.log("error: ", response.data);
                    resolve({ status: "false", message: "Can't Load Data CID" })
                }
            }).catch(function (error) {
                resolve({ status: "false", message: error.response.data.message });
            });
        });
    }

    // send data
    static async send_std_admission(opt) {
        console.log("start send data table std_admission");
        let data_std_admission = await db_main.get_std_admission(opt);

        return new Promise((resolve, reject) => {
            if (data_std_admission.length) {
                data_std_admission.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_admission', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_admission(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message });
                                } else {
                                    resolve({ status: "true", message: res_main.message });
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            // error
                            resolve({ status: "false", message: error.errorno })
                        });
                });
            } else {
                resolve({ status: "true", message: "Not data std_admission send to datacenter" });
            }
        });

    }

    static async send_std_ipd_diag(opt) {
        console.log("start send data table std_ipd_diag");
        let data_std_ipd_diag = await db_main.get_std_ipd_diag(opt);

        return new Promise((resolve, reject) => {
            if (data_std_ipd_diag.length) {
                data_std_ipd_diag.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_ipd_diag', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_ipd_diag(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({ status: "false", message: error.errorno })
                        });
                });
            } else {
                resolve({ status: "true", message: "Not data std_ipd_diag send to datacenter" })
            }
        });
    }

    static async send_std_ipd_drug(opt) {
        console.log("start send data table std_ipd_drug");
        let data_std_ipd_drug = await db_main.get_std_ipd_drug(opt);

        return new Promise((resolve, reject) => {
            if (data_std_ipd_drug.length) {
                data_std_ipd_drug.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_ipd_drug', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_ipd_drug(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({ status: "false", message: error.errorno })
                        });
                });
            } else {
                resolve({ status: "true", message: "Not data std_ipd_drug send to datacenter" })
            }
        });
    }

    static async send_std_ipd_lab(opt) {
        console.log("start send data table std_ipd_lab");
        let data_std_ipd_lab = await db_main.get_std_ipd_lab(opt);

        return new Promise((resolve, reject) => {
            if (data_std_ipd_lab.length) {
                data_std_ipd_lab.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_ipd_lab', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_ipd_lab(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({ status: "false", message: error.errorno })
                        });
                });
            } else {
                resolve({ status: "true", message: "Not data std_ipd_lab send to datacenter" })
            }
        });
    }

    static async send_std_opd_diag(opt) {
        console.log("start send data table std_opd_diag");
        let data_std_opd_diag = await db_main.get_std_opd_diag(opt);

        return new Promise((resolve, reject) => {
            if (data_std_opd_diag.length) {
                data_std_opd_diag.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_opd_diag', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_opd_diag(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({ status: "false", message: error.errorno })
                        });
                });
            } else {
                resolve({ status: "true", message: "Not data std_opd_diag send to datacenter" })
            }
        });
    }

    static async send_std_opd_drug(opt) {
        console.log("start send data table std_opd_drug");
        let data_std_opd_drug = await db_main.get_std_opd_drug(opt);

        return new Promise((resolve, reject) => {
            if (data_std_opd_drug.length) {
                data_std_opd_drug.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_opd_drug', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_opd_drug(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({ status: "false", message: error.errorno })
                        });
                })
            } else {
                resolve({ status: "true", message: "Not data std_opd_drug send to datacenter" })
            }
        });
    }

    static async send_std_opd_lab(opt) {
        console.log("start send data table std_opd_lab");
        let data_std_opd_lab = await db_main.get_std_opd_lab(opt);

        return new Promise((resolve, reject) => {
            if (data_std_opd_lab.length) {
                data_std_opd_lab.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_opd_lab', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_opd_lab(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({ status: "false", message: error.errorno })
                        });
                })
            } else {
                resolve({ status: "true", message: "Not data std_opd_lab send to datacenter" })
            }
        });
    }

    static async send_std_person(opt) {
        console.log("start send data table std_person");
        let data_person = await db_main.get_std_person(opt);

        return new Promise((resolve, reject) => {
            if (data_person.length) {
                data_person.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_person', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_person(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({ status: "false", message: error.errorno })
                        });
                })
            } else {
                resolve({ status: "true", message: "Not data std_person send to datacenter" })
            }
        });

    }

    static async send_std_refer(opt) {
        console.log("start send data table std_refer");
        let data_std_refer = await db_main.get_std_refer(opt)

        return new Promise((resolve, reject) => {
            if (data_std_refer.length) {
                data_std_refer.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_refer', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_refer(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({ status: "false", message: error.errorno })
                        });
                })
            } else {
                resolve({ status: "true", message: "Not data std_refer send to datacenter" })
            }
        });
    }

    static async send_std_service(opt) {
        console.log("start send data table std_service");
        let data_std_service = await db_main.get_std_service(opt);

        return new Promise((resolve, reject) => {
            if (data_std_service.length) {
                data_std_service.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_service', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_std_service(item)
                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({ status: "false", message: error.errorno })
                        });
                })
            } else {
                resolve("Not data std_service send to datacenter ")
            }
        });
    }

    static async send_data(table, opt) {
        console.log(`start send data table ${table}`);

        // get data in table
        let data_table = await main_db.get_data_table(table, opt)

        return new Promise((resolve, reject) => {
            if (data_table.length > 0) {
                let uri = url + `/api/his_import?table=${table}`
                data_table.forEach(item => {
                    axios.post(uri, [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                res_main = await main_db.update_flag_table(table, item)

                                if (res_main.status == "false") {
                                    resolve({ status: "false", message: res_main.message })
                                } else {
                                    resolve({ status: "true", message: res_main.message })
                                }
                            } else {
                                // error
                                resolve({ status: "false", message: response.data.sqlMessage })
                            }
                        }).catch(function (error) {
                            resolve({status: "false", message: error})
                        });
                });
            } else {
                resolve({status: "true", message: `Not data ${table} send to datacenter`})
            }
        })
    }
}

module.exports = ayo_connect;