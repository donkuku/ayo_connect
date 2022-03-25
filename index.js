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
app.post('/login', async (req, res) => {
    token = await api_axios.login(username, password);
    req.session.user_token = token
    res.send(token);
})

// Check Transfer Data
app.post('/check_pid', check_login, async (req, res) => {
    var res_api = await api_axios.getPid();
    if (res_api != 'error') {
        data_cid = res_api.result;
        /*
        data_cid.forEach(element => {
            cid = element.person_cid;
            // insert table std_cid_chekc
            main_db.ins_std_cid_check(cid);

            // insert data his to ayo_connect all cid
            main_db.transfer_data(db_name_his, cid);
        });
        */
        res.send(data_cid);
    } else {
        res.send('check_pid error');
    }
})

// Send Data
app.post('/send_data', check_login, transfer_his_ayo_connect, async (req, res) => {
    console.log("start send data");
    //var cid = (req.body.cid)? req.body.cid : '';
    opt = { cid: req.body.cid };

    try {
        await sendData(opt)
        console.log("end send data");
        res.send("success")
    } catch (error) {
        console.log(error)
        res.send("error falid")
    }
})

// Middleware
async function check_login(req, res, next) {
    console.log("start login");
    token = await api_axios.login(username, password);
    req.session.user_token = token
    console.log("end login");
    next();
}

async function transfer_his_ayo_connect(req, res, next) {
    console.log("start transfer_his_ayo_connect");
    var cid = req.body.cid
    if (cid) {
        // insert data his to ayo_connect all cid
        status_transfer = await main_db.transfer_data(db_name_his, cid)
        console.log("end transfer_his_ayo_connect");
        next()
    } else {
        var res_api = await api_axios.getPid();
        console.log(res_api);
        if (res_api != 'error') { 
            data_cid = res_api.result;

            // inset std_cid_check
            await data_cid.forEach(async (element) => {
                cid = element.person_cid
                // insert table std_cid_check
                await main_db.ins_std_cid_check(cid);
            });

            // check std_cid_check
            await main_db.check_cid(db_name_his)
            
            // Transfer data
            await data_cid.forEach(async (element) => {
                cid = element.person_cid
                await main_db.transfer_data(db_name_his, cid)
            });
            console.log("end transfer_his_ayo_connect");
            next()
        } else {
            res.send("reload data cid faild")
        }
    }
}

async function sendData(opt) {
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