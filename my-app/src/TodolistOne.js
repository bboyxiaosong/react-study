import React ,{ Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
import store from './store/index.js';

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
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render(){
        return (
        <div style={{marginLeft:'10px',marginTop:'10px'}}>
            <div>
                <Input onChange={this.handleInputChange} value={this.state.inputValue} placeholder="todo info" style={{width:'300px',marginRight:'10px'}}/>
                <Button>提交</Button>
            </div>
            <List
            style={{width:'300px',marginTop:'10px'}}
            bordered
            dataSource={this.state.list}
            renderItem={item => (
                <List.Item>
                    {item}
                </List.Item>
            )}
            />
        </div>
        )
    }
    handleInputChange(e){
        const action = {
            'type':'change_input_value',
            'value':e.target.value
        }
        store.dispatch(action)
    }

}

export default TodolistOne;