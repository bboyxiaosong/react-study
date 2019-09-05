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
//     'Man charged over missing wedding girl.',
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
        store.subscribe(this.handleStoreChange);
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
        // const action = {
        //     'type':CHANGE_INPUT_VALUE,
        //     'value':e.target.value
        // }  
        // 如果不引入配合 引入的 actionType 一起使用
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