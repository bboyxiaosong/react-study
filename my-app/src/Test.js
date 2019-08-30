import React ,{Component} from 'react';
// 当 父组件的render函数被执行时，他的子组件render都将重新运行
class Test extends Component {
    render (){
        return (
            <div>{this.props.content}</div>
        )
    }
}

export default Test;

// 虚拟dom 

/** 
 * 1. state 数据
 * 2.JSX 模板
 * 3.数据 + 模板 结合 生成真实的Dom
 * 4.state 发生改变
 * 5. 数据 + 模板 结合 吗，生成真的 DOM 替换原始的DOM
 * 缺陷
 * 
 * 第一次生成完整的DOM 片段
 * 第二次生成完整DOM片段
 * 第二次替换第一次的DOM 非常耗性能
 *1.state 数据
 2.JSX 模板
 3 数据 + 模板 结合 生成真实的 DOM来显示
 *  4.state 发生改变
 5.数据 + 模板 结合，生成真实的DOM，不直接替换原始dom
 6.新的DOM 和 原始的DOm 做对比 找差异
 7 找出input 框发生了变化
 8 只用新的dom 中的input 元素，替换掉老的 Dom 中的input 元素
 缺陷  
 性能的提升并不明显
 1 state 数据
 2Jsx 模板

 3 数据 + 模板 结合生成真实DOM  来显示
 <div id="abc"><span>hello world</span></div>
 4 生成虚拟的DOM （虚拟 DOM就是一个 js 对象 用它来描述真实的DOM）

 ['div',{id:'abc'},['span',{},'hello world']]

 5 state 发生改变
 6 生成新的虚拟DOM 
['div',{id:'abc'},['span',{},'by by']]
 7 比较原始DOM和 新的虚拟DOM的区别找到区别是span内的内容

 8 直接操作DOM 改变span 中 的内容

优点：
1.性能提升了
2. 它使得跨端应用得以实现


安装 交互工具 

yarn add axios
*/