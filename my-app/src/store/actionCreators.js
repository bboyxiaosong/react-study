// 创建这个文件 是为了统一管理 action
import axios from 'axios';
import {GET_INIT_LIST , CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DELETE_TODO_ITEM , INIT_LIST_ACTION} from './actionType';


export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getAddItemAction = ()=>({
    type:ADD_TODO_ITEM,
});
export const getDeleteItemAction = (index)=>({
    type:DELETE_TODO_ITEM,
    index
});
export const initListAction = (data)=>({  
    type:INIT_LIST_ACTION,
    data
});

// sagas 用的
export const getInitList = ()=>({  
    type:GET_INIT_LIST,
});

/**
 * 
 * 因为安装了 redux-thunk 所以这边可以 返回一个函数了，
 * 之前都是返回的对象，可以调用 接口了
 *  如果使用 redux-thunk 就把下面的代码打开
 * 在 TodolistTwo 里边引入
 * import {getTodoList , getInputChangeAction , getAddItemAction , getDeleteItemAction , initListAction } from './store/actionCreators';

 * 在这个函数这么使用就ok
    componentDidMount(){
        const action = getTodoList(store);//
    }
 *  */ 
// export const getTodoList = (store)=>{
//     return ()=>{
//         axios.get('/api/todolist') 
//         .then((res)=>{
//             const data = res.data;
//             const action = initListAction(data)
//             store.dispatch(action);
//         })
//         .catch(()=>{console.log('error')})
//     }
// }