import axios from 'axios';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERR_SUCCESS = 'ERR_SUCCESS'
const CLEAR_SUCCESS = 'CLEAR_SUCCESS'

const initState = {
    isLogin:false,
    user:'',
    password:''
}
export function adminReducer(state=initState,action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state,isLogin: true,...action.payload,msg:action.msg,redirect:'/main/customers'}
        case ERR_SUCCESS:
            return {...state,isLogin: false,msg:action.msg}
        case CLEAR_SUCCESS:
            return {...state,msg:''}
        default:
            return state
    }
}
function errSuccess(msg) {
    return {type:ERR_SUCCESS,msg:msg}
}
function loginSuccess(msg,data) {
    return{type: LOGIN_SUCCESS,msg:msg,payload:data}
}
function clearSuccess() {
    return {type:CLEAR_SUCCESS}
}
export function checkAdmin(res) {
        return dispatch=> {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(loginSuccess(res.data.msg, res.data.data))
                } else {
                    dispatch(errSuccess(res.data.msg))
                }


        }

}