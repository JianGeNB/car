import React from 'react';
import {WhiteSpace,WingBlank,List,InputItem,Button,Toast}from 'antd-mobile'
import {connect}from 'react-redux'
import {searchId}from '../../redux/customers.redux'
import axios from 'axios'

@connect(
    state=>state.customersReducer,
    {searchId}
)
class customerUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            tel:'',
            fee:'',
            address:'',
            car:''

        }
    }
    componentWillMount(){
        let searchId = this.props.location.search.split('?')[1];
        //console.log(searchId)
        this.setState({
            id:searchId
        })
        this.props.searchId(searchId)

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            name:nextProps.data[0].name,
            tel:nextProps.data[0].tel,
            fee:nextProps.data[0].fee,
            address:nextProps.data[0].address,
            car:nextProps.data[0].car
        })
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    handleClick() {
        let timer = new Date().getTime().toString();
        axios.post('/customers/updatecustomer?'+timer,{...this.state}).then(res=>{
            if(res.status===200&&res.data.code===0){
                Toast.success('修改成功 !', 2);
            }
        })
    }

    render(){
        return(
            <div>
                <WingBlank>
                    <List>
                        <List>
                            <InputItem onChange={value => this.handleChange('name',value)} value={this.state.name}>姓名</InputItem>
                            <InputItem onChange={value => this.handleChange('tel',value)} value={this.state.tel}>电话</InputItem>
                            <InputItem onChange={value => this.handleChange('fee',value)} value={this.state.fee}>费用</InputItem>
                            <InputItem onChange={value => this.handleChange('address',value)} value={this.state.address}>地址</InputItem>
                            <InputItem onChange={value => this.handleChange('car',value)} value={this.state.car}>所用车辆</InputItem>
                        </List>
                        <WhiteSpace/>
                        <Button type='primary' onClick={()=>this.handleClick()}>确认修改</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default customerUpdate