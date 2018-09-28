const express = require('express');
const utils = require('utility')
const userModel = require('./operationModule');
const Operation = userModel.getModel('operations');
const operation = express.Router();
// const _filter = {'password':false,__v:false}
operation.get('/list',function (req,res) {
    // Customer.remove({},function () {
    //     return null
    // })
    // Operation.create({name:'嘉文',tel:'15061881504',fee:1000,action:'修理轴承',time:'1天'})
    Operation.find({},function (err,doc) {
        return res.json(doc)
    })
})
operation.get('/all',function (req,res) {
    Operation.find({},function (err,doc) {
        return res.json({code:0,data:doc})
    })
})
operation.post('/operation',function (req,res) {
    const {name}=req.body
    console.log(req.body)
    Operation.findOne({name},function (err,doc) {
        const dataArr=[];
        dataArr.push(doc)
        return res.json({code:0,data:dataArr})
    })
})
operation.post('/addoperation',function (req,res) {
    const {name,tel,fee,action,time}=req.body
    Operation.create({name,tel,fee,action,time},function (err,doc) {
        return res.json({code:0,msg:'添加成功'})
    })
})
module.exports = operation