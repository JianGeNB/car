import React from 'react';
import {WingBlank,WhiteSpace,List,InputItem,Button}from 'antd-mobile'
import {connect}from 'react-redux'
import {addCustomer}from '../../redux/customers.redux'

@connect(
    state=>state.customersReducer,
    {addCustomer}
)
class CustomerAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            tel:'',
            fee:'',
            address:'',
            car:''
        }
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    handleClick(){
        this.props.addCustomer(this.state)
    }
    render(){
        return(
            <div>
                <WhiteSpace/>
                <WingBlank>
                    <List>
                        <InputItem onChange={value => this.handleChange('name',value)}>姓名</InputItem>
                        <InputItem onChange={value => this.handleChange('tel',value)}>电话</InputItem>
                        <InputItem onChange={value => this.handleChange('fee',value)}>费用</InputItem>
                        <InputItem onChange={value => this.handleChange('address',value)}>地址</InputItem>
                        <InputItem onChange={value => this.handleChange('car',value)}>所用车辆</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={()=>this.handleClick()}>保存</Button>
                </WingBlank>
            </div>
        )
    }
}
export default CustomerAdd