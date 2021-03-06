const mongoose =require('mongoose');
const utils = require('utility')
const DB_URL = 'mongodb://localhost:27017/car';
mongoose.connect(DB_URL);
//测试连接
// mongoose.connection.on('connected',function () {
//     console.log('connect success')
// })
const models = {
    operations:{
        'name':{'type':String,'require':true},
        'tel':{'type':String,'require':true},
        'fee':{'type':String,'require':true},
        'action':{'type':String,'require':true},
        'time':{'type':String,'require':true},
    }
}
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
// mongoose.model('customers').create({name:'郑健',tel:'15061881502',fee:0,address:'江苏',car:'保时捷'})
module.exports = {
    getModel:function (name) {
        return mongoose.model(name)
    }
};
