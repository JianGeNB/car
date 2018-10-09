import React from 'react';
import axios from 'axios';
import{withRouter}from 'react-router-dom';

@withRouter
class RouteConfirm extends React.Component{
    componentDidMount(){
        let timer=new Date().getTime().toString();
        axios.get('/admin/admin?'+timer).then(res=>{
            if(res.data.code!==0){
                this.props.history.push('/login')
            }else {
                this.props.history.push('/main/customers')
            }
        })
    }
    render (){
        return(
            <div></div>
        )
    }
}
export default RouteConfirm