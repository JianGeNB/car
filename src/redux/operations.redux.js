import axios from 'axios';
const SEARCG_SUCCESS = 'SEARCG_SUCCESS';
const ADD_SUCCESS = 'ADD_SUCCESS'

const initState={
    data:[],
    msg:''
}
//修理reducer
export function operationsReducer(state=initState,action) {
    switch (action.type) {
        case SEARCG_SUCCESS:
            return {...state,data:action.data,msg:''}
        case ADD_SUCCESS:
            console.log(...state)
            return {...state,msg:action.msg}
        default:
            return state
    }
}
//修理action
function searchSuccess(data) {
    return {type:SEARCG_SUCCESS,data:data}
}
function addSuccess(msg) {
    return {type: ADD_SUCCESS,msg:msg}
}
export function search(name) {
    if(name==='all'||name===''){
        return dispatch=>{
            let timer = new Date().getTime().toString();
            axios.get('/operations/all?'+timer).then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(searchSuccess(res.data.data))
                }
            })
        }
    }else {
        return dispatch=>{
            let timer = new Date().getTime().toString();
            axios.post('/operations/operation?'+timer,{name}).then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(searchSuccess(res.data.data))
                }
            })
        }
    }
}
export function addOperation({name,tel,fee,action,time}) {
    return dispatch =>{
        let timer = new Date().getTime().toString();
        axios.post('/operations/addoperation?'+timer,{name,tel,fee,action,time}).then(res => {
            if(res.status===200&&res.data.code===0){
                dispatch(addSuccess(res.data.msg))
            }
        })
    }
}