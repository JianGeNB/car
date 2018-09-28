const express = require('express');
const utils = require('utility')
const userModel = require('./adminModule');
const Admin = userModel.getModel('admin');
const admin = express.Router();
const _filter = {'password':false,__v:false}
admin.get('/list',function (req,res) {
    // Admin.remove({},function () {
    //     return null
    // })
    // Admin.create({user:'zj',password:mdf('123')})
    Admin.find({},function (err,doc) {
        return res.json(doc)
    })
})
admin.get('/admin',function (req,res) {
    const cookieUserId = req.cookies.userId;
    if(!cookieUserId){
        return res.json({code:1})
    }else {
        const {user,psd,type} = req.body;
        Admin.findOne({_id:cookieUserId},_filter,function (err,doc) {
            if(err){
                return res.json({code:1})
            }else {
                return res.json({code:0,data: doc})
            }
        })
    }
})
admin.post('/login',function (req,res) {
    // console.log(req.body);
    const {user,password} = req.body;
    Admin.findOne({user,password:mdf(password)},_filter,function (err,doc) {
        if(doc){
            console.log(doc)
            res.cookie('userId',doc._id)
            return res.json({msg:'登录成功',code:0,data:doc})
        }else {
            return res.json({msg:'用户名或密码错误',code:1})
        }

    })
})
function mdf(psd){
    let psdImportant = 'zj123!@#$zy';
    return utils.md5(utils.md5(psd+psdImportant))
}
module.exports = admin