import axios from 'axios';
import {Toast}from'antd-mobile'
axios.interceptors.request.use(function (config) {
    Toast.loading('加载中',5)
    return config
})
axios.interceptors.response.use(config=>{
    Toast.hide()

    return config
})