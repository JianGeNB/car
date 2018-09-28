const mongoose =require('mongoose');
const utils = require('utility')
const DB_URL = 'mongodb://localhost:27017/car';
mongoose.connect(DB_URL);
//测试连接
// mongoose.connection.on('connected',function () {
//     console.log('connect success')
// })
const models = {
    admin:{
        'user':{'type':String,'require':true},
        'password':{'type':String,'require':true},
    }
}
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
// mongoose.model('admin').create({user:'zj',password:utils.md5('123')})
module.exports = {
    getModel:function (name) {
        return mongoose.model(name)
    }
};
