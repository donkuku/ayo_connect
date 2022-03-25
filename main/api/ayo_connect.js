const axios = require('axios')
const dotenv = require("dotenv");
const main_db = require('../db/main');
const db_main = require('../db/main')
dotenv.config();

const url = process.env.url
var token = process.env.token
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
                token = response.data.token
                // Update Config Authorization
                config.headers.Authorization = `Bearer ${token}`
                resolve(token)
            }).catch(function (error) {
                resolve("error");
            });
        });
    }

    static getPid() {
        return new Promise((resolve, reject) => {
            axios.post(url + '/api/checkconsent', {}, config).then(async (response) => {
                if (response.data.MessageCode == '200') {
                    // success
                    resolve(response.data);
                } else {
                    // error
                    console.log("error: ", response.data);
                    resolve('error')
                }
            }).catch(function (error) {
                console.log(error);
                resolve("error");
            });
        });
    }

    // send data
    static async send_std_admission(opt) {
        let data_std_admission = await db_main.get_std_admission(opt);

        return new Promise((resolve, reject) => {
            if (data_std_admission.length) {
                data_std_admission.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_admission', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_admission(item)
                                console.log("send_std_admission");
                                resolve("success");
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage);
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error);
                            resolve("error")
                        });
                });
            } else {
                resolve("Not data std_admission send to datacenter");
            }
        });

    }

    static async send_std_ipd_diag(opt) {
        let data_std_ipd_diag = await db_main.get_std_ipd_diag(opt);

        return new Promise((resolve, reject) => {
            if (data_std_ipd_diag.length) {
                data_std_ipd_diag.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_ipd_diag', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_ipd_diag(item)
                                console.log("send_std_ipd_diag");
                                resolve("success");
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage)
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error);
                            resolve("error")
                        });
                });
            } else {
                resolve("Not data std_ipd_diag send to datacenter ")
            }
        });
    }

    static async send_std_ipd_drug(opt) {
        let data_std_ipd_drug = await db_main.get_std_ipd_drug(opt);

        return new Promise((resolve, reject) => {
            if (data_std_ipd_drug.length) {
                data_std_ipd_drug.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_ipd_drug', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_ipd_drug(item)
                                console.log("send_std_ipd_drug");
                                resolve("success");
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage);
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error);
                            resolve("error")
                        });
                });
            } else {
                resolve("Not data std_ipd_drug send to datacenter ")
            }
        });
    }

    static async send_std_ipd_lab(opt) {
        let data_std_ipd_lab = await db_main.get_std_ipd_lab(opt);

        return new Promise((resolve, reject) => {
            if (data_std_ipd_lab.length) {
                data_std_ipd_lab.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_ipd_lab', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_ipd_lab(item)
                                console.log("send_std_ipd_lab");
                                resolve("success");
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage);
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error);
                            resolve("error")
                        });
                });
            } else {
                resolve("Not data std_ipd_lab send to datacenter ")
            }
        });
    }

    static async send_std_opd_diag(opt) {
        let data_std_opd_diag = await db_main.get_std_opd_diag(opt);

        return new Promise((resolve, reject) => {
            if (data_std_opd_diag.length) {
                data_std_opd_diag.forEach((item) => {
                    axios.post(url + '/api/his_import?table=std_opd_diag', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_opd_diag(item)
                                console.log("send_std_opd_diag");
                                resolve("success");
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage);
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error);
                            resolve("error")
                        });
                });
            } else {
                resolve("Not data std_opd_diag send to datacenter ")
            }
        });
    }

    static async send_std_opd_drug(opt) {
        let data_std_opd_drug = await db_main.get_std_opd_drug(opt);

        return new Promise((resolve, reject) => {
            if (data_std_opd_drug.length) {
                data_std_opd_drug.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_opd_drug', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_opd_drug(item)
                                console.log("send_std_opd_drug")
                                resolve("success")
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage);
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error);
                            resolve("error")
                        });
                })
            } else {
                resolve("Not data std_opd_drug send to datacenter ")
            }
        });
    }

    static async send_std_opd_lab(opt) {
        let data_std_opd_lab = await db_main.get_std_opd_lab(opt);

        return new Promise((resolve, reject) => {
            if (data_std_opd_lab.length) {
                data_std_opd_lab.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_opd_lab', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_opd_lab(item)
                                console.log("send_std_opd_lab")
                                resolve("success")
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage);
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error)
                            resolve("error")
                        });
                })
            } else {
                resolve("Not data std_opd_lab send to datacenter ")
            }
        });
    }

    static async send_std_person(opt) {
        let data_person = await db_main.get_std_person(opt);

        return new Promise((resolve, reject) => {
            if (data_person.length) {
                data_person.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_person', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_person(item)
                                console.log("send_std_person");
                                resolve("success");
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage);
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error);
                            resolve("error")
                        });
                })
            } else {
                resolve("Not data std_person send to datacenter ")
            }
        });

    }

    static async send_std_refer(opt) {
        let data_std_refer = await db_main.get_std_refer(opt)

        return new Promise((resolve, reject) => {
            if (data_std_refer.length) {
                data_std_refer.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_refer', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_refer(item)
                                console.log("send_std_refer");
                                resolve("success");
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage);
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error);
                            resolve("error")
                        });
                })
            } else {
                resolve("Not data std_refer send to datacenter ")
            }
        });
    }

    static async send_std_service(opt) {
        let data_std_service = await db_main.get_std_service(opt);

        return new Promise((resolve, reject) => {
            if (data_std_service.length) {
                data_std_service.forEach((item, index, array) => {
                    axios.post(url + '/api/his_import?table=std_service', [item], config)
                        .then(async (response) => {
                            if (response.data.message == '') {
                                // success
                                await main_db.update_std_service(item)
                                console.log("send_std_service");
                                resolve("success");
                            } else {
                                // error
                                console.log("error: ", response.data.sqlMessage);
                                resolve("error")
                            }
                        }).catch(function (error) {
                            console.log(error);
                            resolve("error")
                        });
                })
            } else {
                resolve("Not data std_service send to datacenter ")
            }
        });
    }
}

module.exports = ayo_connect;