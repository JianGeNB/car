import {combineReducers}from 'redux'
import {adminReducer} from './admin.redux'
import {customersReducer}from './customers.redux'
import {partsReducer}from './parts.redux'
import {operationsReducer}from './operations.redux'
export default  combineReducers({adminReducer,customersReducer,partsReducer,operationsReducer})