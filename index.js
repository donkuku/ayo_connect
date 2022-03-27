const express = require('express')
const sessions = require('express-session')
const axios = require('axios')
const dotenv = require("dotenv")
const cron = require('node-cron')
const api_axios = require('./main/api/ayo_connect')
const main_db = require('./main/db/main')
const app = express()

app.use(express.json())
app.use(sessions({
    secret: 'ayo_connect',
    resave: false,
    saveUninitialized: false,
}))
app.use(
    express.urlencoded({
        extended: true
    })
)

dotenv.config();

const username = process.env.user
const password = process.env.pass
const db_name_his = process.env.db_name_his
var token = process.env.token
const port = process.env.PORT

var time_job = '00 00 00 * * *';

// Send Data Auto
cron.schedule(time_job, () => {
    console.log("Run task send data to data center");
    axios.post(`http://localhost:${port}/send_data`)
        .then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
}, {
    scheduled: true,
    timezone: "Asia/Bangkok"
});

// refer
// Static folder
app.use(express.static(__dirname + "/public/"));
// Handle SPA
app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));


// Check Login
app.post('/login', check_login, async (req, res) => {
    res.send("login success")
})

// Check Transfer Data
app.post('/check_pid', check_login, transfer_his_ayo_connect, async (req, res) => {
    res.send("check_pid and transfer data: success")
})

// Send Data
app.post('/send_data', check_login, transfer_his_ayo_connect, async (req, res) => {
    opt = { cid: req.body.cid };

    try {
        res_send = await sendData(opt)
        console.log("send success");
        res.send("success")
    } catch (error) {
        console.log(error)
        res.send("error falid")
    }
})

// Middleware
async function check_login(req, res, next) {
    console.log("login");
    res_login = await api_axios.login(username, password);

    if(res_login.status == "true"){
        req.session.user_token = token
        next();
    }else{
        console.log(res_login.message)
        res.send(res_login.message)
    }
}

async function transfer_his_ayo_connect(req, res, next) {
    console.log("Transfer data his to ayo_connect");
    var cid = req.body.cid
    if (cid) {
        // insert data his to ayo_connect all cid
        res_main = await main_db.transfer_data(db_name_his, cid)
        if(res_main.status == "true"){
            next()
        }else{
            res.send(res_main.message)
        }
    } else {
        // get cid for api
        var res_api = await api_axios.getPid();
        if (res_api.status == 'true') {  
            data_cid = res_api.message;
            
            // insert table std_cid_check
            for (let i = 0; i < data_cid.length; i++) {
                cid = data_cid[i].person_cid   
                res_main = await main_db.ins_std_cid_check(cid)
                if(res_main.status == "false"){
                    break
                }                 
            }

            // check status insert table std_cid_check
            if(res_main.status == "false"){
                res.send(res_main.message)
            }else{
                // check std_cid_check
                res_main = await main_db.check_cid(db_name_his)

                if(res_main.status == "false"){
                    res.send(res_main.message)
                }else{
                    for (let i = 0; i < data_cid.length; i++) {
                        cid = data_cid[i].person_cid
                        res_main = await main_db.transfer_data(db_name_his, cid)
                        if(res_main.status == "false"){
                            break
                        }
                    }

                    if(res_main.status == "false"){
                        res.send(res_main.message)
                    }else{
                        console.log("end transfer_his_ayo_connect");
                        next()
                    }
                }
            }
        } else {
            res.send(res_api.message)
        }
    }
}

// Function

async function sendData(opt) {
    console.log("start send data");
    res_sta_std_admission = await api_axios.send_std_admission(opt)
    res_sta_std_ipd_diag = await api_axios.send_std_ipd_diag(opt)
    res_sta_std_ipd_drug = await api_axios.send_std_ipd_drug(opt)
    res_sta_std_std_ipd_lab = await api_axios.send_std_ipd_lab(opt)
    res_sta_std_opd_diag = await api_axios.send_std_opd_diag(opt)
    res_sta_std_opd_drug = await api_axios.send_std_opd_drug(opt)
    res_sta_std_opd_lab = await api_axios.send_std_opd_lab(opt)
    res_sta_std_person = await api_axios.send_std_person(opt)
    res_sta_std_refer = await api_axios.send_std_refer(opt)
    res_sta_std_service = await api_axios.send_std_service(opt)
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})