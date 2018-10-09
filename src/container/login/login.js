import React from 'react';
import {checkAdmin}from '../../redux/admin.redux';
import {connect}from 'react-redux';
import {Redirect}from 'react-router-dom'
import {WhiteSpace,WingBlank,List,InputItem,Button,Toast}from 'antd-mobile';
import Logo from '../../components/logo'
import axios from 'axios'

@connect(
    state=>state.adminReducer,
    {checkAdmin}
)
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            password:''
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    handleClick(){
        if(!this.state.user||!this.state.password){
            Toast.info('请输入用户名或密码', 2);
            return null
        }else {
            const user = this.state.user;
            const password = this.state.password;
            const timer = new Date().getTime().toString();
            axios.post('/admin/login?' + timer, {user, password}).then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    this.props.checkAdmin(res)
                } else {
                    Toast.info('用户名或密码错误', 2);
                }

            })
        }

    }
    render (){
        return (
            <div>
                {this.props.redirect?<Redirect to={this.props.redirect} />:null}
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem onChange={value=>this.handleChange('user',value)}>
                            用户名
                        </InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' onChange={value=>this.handleChange('password',value)}>
                            密码
                        </InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.handleClick}>
                            登录</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default Login