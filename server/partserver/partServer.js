const express = require('express');
const utils = require('utility')
const userModel = require('./partModule');
const Part = userModel.getModel('part');
const part = express.Router();
// const _filter = {'password':false,__v:false}
part.get('/list',function (req,res) {
    // Part.remove({},function () {
    //     return null
    // })
    // Part.create({name:'保险杠',brand:'悍马',cost:300,address:'解放街59号'})
    Part.find({},function (err,doc) {
        return res.json(doc)
    })
})
part.get('/all',function (req,res) {
    Part.find({},function (err,doc) {
        return res.json({code:0,data:doc})
    })
})
part.post('/part',function (req,res) {
    const {name}=req.body
    console.log(req.body)
    Part.findOne({name},function (err,doc) {
        const dataArr=[];
        dataArr.push(doc)
        return res.json({code:0,data:dataArr})
    })
})
part.post('/addpart',function (req,res) {
    const {name,cost,brand,address}=req.body
    Part.create({name,brand,cost,address},function (err,doc) {
        return res.json({code:0,msg:'添加成功'})
    })
})
module.exports = part