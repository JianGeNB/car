import React from 'react';
import {WingBlank,WhiteSpace,List,InputItem,Button}from 'antd-mobile'
import {connect}from 'react-redux'
import {addOperation}from '../../redux/operations.redux'

@connect(
    state=>state.operationsReducer,
    {addOperation}
)
class OperationAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            tel:'',
            fee:'',
            action:'',
            time:''
        }
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    handleClick(){
        this.props.addOperation(this.state)
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
                        <InputItem onChange={value => this.handleChange('time',value)}>耗时</InputItem>
                        <InputItem onChange={value => this.handleChange('action',value)}>修理信息</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={()=>this.handleClick()}>保存</Button>
                </WingBlank>
            </div>
        )
    }
}
export default OperationAdd