/**
 * 这组件是 拆分之前的组件 ，拆分之后是 TodolistTwo 与 todolistUI 
 * 又名 聪明组件 与傻瓜组件 就是 逻辑组件与 UI 组件
 * 下一步 是 无状态组件 
 * 无状态组件就是一个
 * 
 * 
// 这个主要是 利用antd进行布局 实现 todolist
// antd 这个框架是 reatct ui 组件库
 
 * 首先引入样式文件，用什么组件就引入什么组件
 例如
 import 'antd/dist/antd.css';
    import {Input,Button,List} from 'antd';
 * 
*/
 

import React ,{ Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
import store from './store/index.js';

import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators';
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionType';

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing  wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class TodolistOne extends Component{
    constructor(props){
        super(props);
        this.state = store.getState()
        console.log(store.getState());
        // console.log(store);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);// 订阅store的改变，就是store发生改变这个方法就会被执行
    }
    render(){
        return (
        <div style={{marginLeft:'10px',marginTop:'10px'}}>
            <div>
                <Input onChange={this.handleInputChange} value={this.state.inputValue} placeholder="todo info" style={{width:'300px',marginRight:'10px'}}/>
                <Button onClick={this.handleBtnClick}>提交</Button>
            </div>
            <List
            style={{width:'300px',marginTop:'10px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => (
                <List.Item onClick={this.handleItemDelete.bind(this,index)}>
                    {item}
                </List.Item>
            )}
            />
        </div>
        )
    }
    handleInputChange(e){
    // 拆分action ，创建actionCreator  ；（把创建action 封装到actionCreator）
        // const action = {
        //     'type':CHANGE_INPUT_VALUE,
        //     'value':e.target.value
        // }  
        // 如果不引入，配合 引入的 actionType 一起使用
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    handleStoreChange(){
        // console.log('storgeCHange');
        this.setState(store.getState());
    }
    handleBtnClick(){
        // const action = {
        //     type:ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        // const action = {
        //     type:DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }


}

export default TodolistOne;