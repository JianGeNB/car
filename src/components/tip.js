import React from 'react';
import PropTypes from 'prop-types';
import {Toast}from 'antd-mobile'
class Tip extends React.Component{
    static proTypes = {
        info:PropTypes.string
    }
    constructor(props){
        super(props);
        this.infoTip=this.infoTip.bind(this)
    }
    infoTip(info){
        Toast.info(info, 2);
    }
    render(){
        return(
            <div>{this.infoTip('用户名或密码错误')}</div>
        )
    }
}
export default Tip