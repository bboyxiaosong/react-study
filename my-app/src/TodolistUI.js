import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
/**
 * 下面这个例子就是 无状态组件，无状态组件就是一个函数
 * 
 * 当一个函数只有一个render函数的时候就可以修改成无状态组件
 * 
 * 无状态 性能比较高 ，他就是一个函数
 * 
 * 
 *  */ 
const TodiListUI = (props)=>{
    return (
        <div style={{marginLeft:'10px',marginTop:'10px'}}>
        <div>
            <Input 
            onChange={props.handleInputChange} 
            value={props.inputValue} 
            placeholder="todo info" 
            style={{width:'300px',marginRight:'10px'}}
            />
            <Button onClick={props.handleBtnClick}>提交</Button>
        </div>
        <List
        style={{width:'300px',marginTop:'10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (
            <List.Item onClick={(index)=>{props.handleItemDelete(index)}}>
                {item}
            </List.Item>
        )}
        />
    </div> 
    )
}

// class TodiListUI extends Component{
//     render(){
//         return (
//             <div style={{marginLeft:'10px',marginTop:'10px'}}>
//             <div>
//                 <Input 
//                 onChange={this.props.handleInputChange} 
//                 value={this.props.inputValue} 
//                 placeholder="todo info" 
//                 style={{width:'300px',marginRight:'10px'}}
//                 />
//                 <Button onClick={this.props.handleBtnClick}>提交</Button>
//             </div>
//             <List
//             style={{width:'300px',marginTop:'10px'}}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item,index) => (
//                 <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>
//                     {item}
//                 </List.Item>
//             )}
//             />
//         </div> 
//         )
//     }
// }
export default TodiListUI;