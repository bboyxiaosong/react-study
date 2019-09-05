import React ,{ Component,Fragment} from 'react';
import TodolistUI from './TodolistUI'
import store from './store/index.js';
import axios from 'axios';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators';
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
    componentDidMount(){
        axios.get('/api/todolist')
            .then((res)=>{
                console.log(res);
            })
            .catch(()=>{console.log('error')})
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