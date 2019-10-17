/**
 * 创建store，（就是管理员）
 * 
 * 1 import { createStore } from 'redux';
 * 2.import reducer from './reducer' 引入数据（记事本）
 * 3.创建store 之前先创建 reducer 数据管理仓库
 * const store = createStore(reducer);
 * 
 *export default store;
 * 
 * 
 * 
 * 创建好store 在todolistOne引入 store
 * reducer  里边 内容
 * 主要处理数据 怎么处理怎么存
 * /** 
 * 默认数据 ，在store 里边引入
 * const defaultState ={

    }
    export default (state,action)=>{
        return state;
    }
 *  //下面这句话是，浏览器如果安装了（react redux-devtools）插件在创建 store 的时候添加这句代码方便 调试
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()   
    // reduex 创建store 的时候使用中间件
    如果页面内有 ajxa 请求想要把他移除出来，安装redux-thunk
    安装 redux-thunk  使用，redux-thunk，请求ajax

 * 
 * */ 


import {createStore , applyMiddleware , compose} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
)
const store = createStore(
    reducer,
    enhancer,
    // window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()   
);
sagaMiddleware.run(todoSagas);

export default store;