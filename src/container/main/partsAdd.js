import React from 'react';
import {WingBlank,WhiteSpace,List,InputItem,Button}from 'antd-mobile'
import {connect}from 'react-redux'
import {addPart}from '../../redux/parts.redux'

@connect(
    state=>state.customersReducer,
    {addPart}
)
class PartAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            cost:'',
            address:'',
            brand:''
        }
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    handleClick(){
        this.props.addPart(this.state)
    }
    render(){
        return(
            <div>
                <WhiteSpace/>
                <WingBlank>
                    <List>
                        <InputItem onChange={value => this.handleChange('name',value)}>配件名</InputItem>
                        <InputItem onChange={value => this.handleChange('brand',value)}>品牌</InputItem>
                        <InputItem onChange={value => this.handleChange('cost',value)}>价格</InputItem>
                        <InputItem onChange={value => this.handleChange('address',value)}>店铺地址</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={()=>this.handleClick()}>保存</Button>
                </WingBlank>
            </div>
        )
    }
}
export default PartAdd