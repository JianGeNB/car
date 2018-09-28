const express = require('express');
const utils = require('utility')
const userModel = require('./customerModule');
const Customer = userModel.getModel('customers');
const customer = express.Router();
// const _filter = {'password':false,__v:false}
customer.get('/list',function (req,res) {
    // Customer.remove({},function () {
    //     return null
    // })
    //  Customer.create({name:'嘉文',tel:'15061881504',fee:0,address:'德玛西亚',car:'赤兔'})
    Customer.find({},function (err,doc) {
        return res.json(doc)
    })
})
customer.get('/all',function (req,res) {
    Customer.find({},function (err,doc) {
        return res.json({code:0,data:doc})
    })
})
customer.post('/customer',function (req,res) {
    const {name}=req.body
    console.log(req.body)
    Customer.findOne({name},function (err,doc) {
        const dataArr=[];
        dataArr.push(doc)
        return res.json({code:0,data:dataArr})
    })
})
customer.post('/addcustomer',function (req,res) {
    const {name,tel,fee,address,car}=req.body
    Customer.create({name,tel,fee,address,car},function (err,doc) {
        return res.json({code:0,msg:'添加成功'})
    })
})
module.exports = customer