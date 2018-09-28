import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import {Provider}from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers'
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import Login from './container/login/login';
import Main from './container/main/main'
import RouteConfirm from './container/RouteConfirm';
import './config'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducers,compose(applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():()=>{}));
document.getElementById('root').style.height=window.innerHeight+'px';
document.getElementById('root').style.position='relative';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <RouteConfirm/>
                <Switch>
                    {/*<Route path='/' component={Login}/>*/}
                    <Route path='/login' component={Login}/>
                    <Route path='/main' component={Main}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
