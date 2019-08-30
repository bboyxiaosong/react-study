
import React from 'react';
import PropTypes from 'prop-types'
class TodoItem extends React.Component{
    
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        const { content, test } =  this.props;
         // JSX -> createElemet -> 虚拟DOM（js 对象）-> 真实对象
        return (
        <div onClick={this.handleClick}>
            {test} - {content}
        </div>
        )
       
        // return React.createElement('div',{},'item',React.createElement('span',{})) 更接近底层
    }
    // 他会接受两个参数 
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content != this.props.content){
            return true
        }else{
            return false; 
        }
       
    }
     //一个组件 要从父组件接受参数 
    // 只要父组件render 函数 被执行了，子组件的这个生命周期函数就会被执行
    // 如果第一次存在存在父组件中不会被执行，第二次才会被执行
    
    componentWillReceiveProps(){
        //console.log('componentWillReceiveProps')
    }
    // 当子组件被销毁的过程
    componentWillUnmount(){
        //console.log('child componetWillUnmount')
    }
    handleClick(){
        //console.log(this.props.index);
        const { deleteItem,index } =  this.props;
        deleteItem(index);

    }

}
// 引入这个就是对tudoitem 做 传递数据类型的校验
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,//必须要传 不然会警告 下面 arrayOf(PropTypes.string,PropTypes.number),
    content:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps= {
    test:'hello world'
}
export default TodoItem;