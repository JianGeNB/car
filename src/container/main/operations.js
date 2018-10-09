import React from 'react';
import {WingBlank, WhiteSpace, Card, SearchBar} from 'antd-mobile';
import {connect}from 'react-redux'
import {search}from '../../redux/operations.redux'

@connect(
    state=>state.operationsReducer,
    {search}
)
class Operations extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchVal:''
        }
        this.onUpdate=this.onUpdate.bind(this)
    }
    componentDidMount(){
        this.props.search('all')
    }
    handleSubmit(value){
        this.props.search(value)
    }
    onChange= (value) => {
        this.setState({ 'searchVal':value });
    };
    onUpdate(id){
        this.props.history.push('/main/operationupdate?'+id)
    }
    render(){
        return(
            <div>
                <div className='search'>
                    <SearchBar placeholder="请输入查找的顾客姓名"
                               ref={ref => this.autoFocusInst = ref}
                               onSubmit={value=>{this.handleSubmit(value)}}
                               onChange={this.onChange}
                               value={this.state.searchVal}
                    />
                </div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    {this.props.data.map(item=>(
                        <Card key={item._id}>
                            <Card.Header
                                title={item.name}
                                extra={<span>{item.tel}</span>}
                            />
                            <Card.Body>
                                <div>
                                    <p>费用:{item.fee}</p>
                                    <p>耗时:{item.time}</p>
                                    <p>修理信息:{item.action}</p>
                                </div>
                            </Card.Body>
                            <Card.Footer  extra={<div onClick={()=>this.onUpdate(item._id)} style={{color:'red',fontSize:'1rem'}}>修改</div>} />
                        </Card>
                    ))
                    }
                </WingBlank>
            </div>
        )
    }
}
export default Operations