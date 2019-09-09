import React ,{ Component,Fragment} from 'react';
import TodolistUI from './TodolistUI'
import store from './store/index.js';
// import axios from 'axios';
import {getInitList , getTodoList , getInputChangeAction , getAddItemAction , getDeleteItemAction , initListAction } from './store/actionCreators';
class TodolistTwo extends Component{
    constructor(props){
        super(props);
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
        <TodolistUI
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete= {this.handleItemDelete}
            list={this.state.list}
        />
        )
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    // componentDidMount(){
    //     const action = getTodoList(store);//
    //     // axios.get('/api/todolist')
    //     //     .then((res)=>{
    //     //         const data = res.data;
    //     //         const action = initListAction(data)
    //     //         store.dispatch(action);
    //     //     })
    //     //     .catch(()=>{console.log('error')})
    // }

    // 下面用 redux-saga实现以下，不用 redux-thunk中间实现

    componentDidMount(){
        const action = getInitList(store);
        store.dispatch(action);
        console.log(action);
    }


    handleStoreChange(){
        this.setState(store.getState());
    }
    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

}

export default TodolistTwo;

// 这是 6-3 之前的课程 下一节 6-4 学习redux-thunk 中间件
