import axios from 'axios';
const SEARCG_SUCCESS = 'SEARCG_SUCCESS';
const ADD_SUCCESS = 'ADD_SUCCESS'

const initState={
    data:[],
    msg:''
}
//配件reducer
export function partsReducer(state=initState,action) {
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
//配件action
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
            axios.get('/parts/all?'+timer).then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(searchSuccess(res.data.data))
                }
            })
        }
    }else {
        return dispatch=>{
            let timer = new Date().getTime().toString();
            axios.post('/parts/part?'+timer,{name}).then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(searchSuccess(res.data.data))
                }
            })
        }
    }
}
export function addPart({name,cost,brand,address}) {
    return dispatch =>{
        let timer = new Date().getTime().toString();
        axios.post('/parts/addpart?'+timer,{name,cost,brand,address}).then(res => {
            if(res.status===200&&res.data.code===0){
                dispatch(addSuccess(res.data.msg))
            }
        })
    }
}