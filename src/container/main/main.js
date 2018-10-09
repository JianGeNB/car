import React from 'react'
import {NavBar,TabBar,SearchBar}from 'antd-mobile'
import {withRouter,Route,Switch}from 'react-router-dom'
import Customer from './customer'
import Parts from './parts'
import Operations from './operations'
import {search}from '../../redux/customers.redux'
import CustomerAdd from './customerAdd'
import CustomerUpdate from './customerUpdate'
import PartAdd from './partsAdd'
import PartUpdate from './partUpdate'
import OperationAdd from './operationAdd'
import OperationUpdate from './operationUpdate'
import './css/main.css'
import {connect}from 'react-redux'
require('jquery')

@withRouter
@connect(
    state=>state.customersReducer,
    {search}
)
class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchVal:''
        }
        this.addClick = this.addClick.bind(this)
    }
    // handleSubmit(value){
    //     this.props.search(value)
    // }
    // onChange= (value) => {
    //     this.setState({ 'searchVal':value });
    // };
    addClick(){
        if(this.props.location.pathname==='/main/customers'){
            this.props.history.push('/main/customeradd')
        }else if(this.props.location.pathname==='/main/parts'){
            this.props.history.push('/main/partsadd')
        }else if(this.props.location.pathname==='/main/operations'){
            this.props.history.push('/main/operationsadd')
        }
    }
    render(){
        const List = [
            {
                key:'/main/customers',
                title:'顾客信息',
                icon:'',
                selectedIcon:'',
                component:Customer,
            },
            {
                key:'/main/customeradd',
                title:'顾客信息',
                icon:'',
                selectedIcon:'',
                component:CustomerAdd,
            },
            {
                key:'/main/customerupdate',
                title:'顾客信息',
                icon:'',
                selectedIcon:'',
                component:CustomerUpdate,
            },
            {
                key:'/main/parts',
                title:'配件信息',
                icon:'',
                selectedIcon:'',
                component:Parts,
                show:true
            },
            {
                key:'/main/partsadd',
                title:'配件信息',
                icon:'',
                selectedIcon:'',
                component:PartAdd,
            },
            {
                key:'/main/partupdate',
                title:'配件信息',
                icon:'',
                selectedIcon:'',
                component:PartUpdate,
            },
            {
                key:'/main/operations',
                title:'修理信息',
                icon:'',
                selectedIcon:'',
                component:Operations,
            },
            {
                key:'/main/operationsadd',
                title:'修理信息',
                icon:'',
                selectedIcon:'',
                component:OperationAdd,
            },
            {
                key:'/main/operationupdate',
                title:'修理信息',
                icon:'',
                selectedIcon:'',
                component:OperationUpdate,
            }
        ]
        const List1 = [
            {
                key:'/main/customers',
                title:'顾客信息',
                icon:'',
                selectedIcon:'',
                component:Customer,
                show:true
            },
            {
                key:'/main/parts',
                title:'配件信息',
                icon:'',
                selectedIcon:'',
                component:Parts,
                show:true
            },
            {
                key:'/main/operations',
                title:'修理信息',
                icon:'',
                selectedIcon:'',
                component:Operations,
                show:true
            }
        ]
        return(
            <div>
                <NavBar mode="dark" className='navbar'
                        rightContent={[
                            <div className='add' key='add' onClick={this.addClick}></div>
                        ]}
                >{List.find(item=>this.props.location.pathname===item.key).title}</NavBar>
                <div className='main'>
                    <Switch>
                    {List.map(item=>(
                        <Route path={item.key} key={item.key}component={item.component}/>
                    ))}
                    </Switch>
                </div>
                <div style={{position:'fixed',bottom:0,width:'100%',height:'9%'}}>
                <TabBar>
                    {List1.map(item=> {
                            return <TabBar.Item
                                title={item.title}
                                key={item.key}
                                icon={{uri: require(`../../images/${item.title}.png`)}}
                                selectedIcon={{uri: require(`../../images/${item.title}-active.png`)}}
                                selected={this.props.location.pathname === item.key}
                                onPress={() => {
                                    this.props.history.push(item.key)
                                }}
                            ></TabBar.Item>


                    })}
                </TabBar>
                </div>
            </div>
        )
    }
}
export default Main