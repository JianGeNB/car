const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const admin = require('./adminserver/adminServer');
const customer = require('./customerserver/customerSerevr')
const part =require('./partserver/partServer')
const operation = require('./operationserver/operationServer')
// const mongoose = require('./module')
// mongoose.connection.on('connected',function () {
//     console.log('connect success')
// })
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/admin',admin);
app.use('/customers',customer)
app.use('/parts',part)
app.use('/operations',operation)
app.listen(9090,function () {
    console.log('server is start')
})