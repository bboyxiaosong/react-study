
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionType';
const defaultState = {
    inputValue:'',
    list:[]
};
//reducer 可以接受 state 但是不能修改 state;
// reducer必须是纯函数 有固定的输入就会有固定的输出，不会就副作用 
//如果函数体内有 settimeout 或是 setinterval  ajax 就不是纯函数了
export default (state = defaultState,action)=>{

    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}