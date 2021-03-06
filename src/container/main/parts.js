import React from 'react'
import {search}from '../../redux/parts.redux'
import {connect}from 'react-redux'
import {Card, SearchBar, WhiteSpace, WingBlank} from "antd-mobile";

@connect(
    state=>state.partsReducer,
    {search}
)
class Parts extends React.Component{
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
        this.props.history.push('/main/partupdate?'+id)
    }
    render(){
        return(
            <div>
                <div className='search'>
                    <SearchBar placeholder="请输入查找的配件名称"
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
                                extra={<span>{item.brand}</span>}
                            />
                            <Card.Body>
                                <div>
                                    <p>价格:{item.cost}</p>
                                    <p>商铺地址:{item.address}</p>
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
export default Parts