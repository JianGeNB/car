import axios from 'axios';
const SEARCG_SUCCESS = 'SEARCG_SUCCESS';
const ADD_SUCCESS = 'ADD_SUCCESS';
const SEARCHID_SUCCESS = 'SEARCHID_SUCCESS'

const initState={
    data:[],
    msg:''
}
//顾客reducer
export function customersReducer(state=initState,action) {
    switch (action.type) {
        case SEARCG_SUCCESS:
            return {...state,data:action.data,msg:''}
        case ADD_SUCCESS:
            // console.log(...state)
            return {...state,msg:action.msg}
        case SEARCHID_SUCCESS:
            return {data:action.data}
        default:
            return state
    }
}
//顾客action
function searchSuccess(data) {
    return {type:SEARCG_SUCCESS,data:data}
}
function searchIdSuccess(data) {
    return {type:SEARCHID_SUCCESS,data:data}
}
function addSuccess(msg) {
    return {type: ADD_SUCCESS,msg:msg}
}
export function search(name) {
    if(name==='all'||name===''){
        return dispatch=>{
            let timer = new Date().getTime().toString();
            axios.get('/customers/all?'+timer).then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(searchSuccess(res.data.data))
                }
            })
        }
    }else {
        return dispatch=>{
            let timer = new Date().getTime().toString();
            axios.post('/customers/customer?'+timer,{name}).then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(searchSuccess(res.data.data))
                }
            })
        }
    }
}
export function searchId(id) {
    return dispatch=>{
        let timer = new Date().getTime().toString();
        axios.post('/customers/customerId?'+timer,{id}).then(res=>{
            if(res.status===200&&res.data.code===0){
                dispatch(searchIdSuccess(res.data.data))
            }
        })
    }
}
export function addCustomer({name,tel,fee,address,car}) {
    return dispatch =>{
        let timer = new Date().getTime().toString();
        axios.post('/customers/addcustomer?'+timer,{name,tel,fee,address,car}).then(res => {
            if(res.status===200&&res.data.code===0){
                dispatch(addSuccess(res.data.msg))
            }
        })
    }
}
