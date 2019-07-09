
import React ,{ Component,Fragment} from 'react';
import './css.css';
import TodoItem from './TodoItem';
class Todolist extends Component{

    constructor(props){

        super(props);

        this.state = {

            inputValue:'',
            list:[]
        }
        this.hanldeInputChange = this.hanldeInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">点击输入</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.hanldeInputChange}
                    
                    />
                    <button onClick={this.handleBtnClick}>提交</button>    
                </div>
                <ul>
                    {
                       this. getTodoItem() 
                    }
                </ul>
            </Fragment>
        )
    }
    getTodoItem(){
        return (
            this.state.list.map((item,index)=>{
                return (
              <div>
                  <TodoItem 
                  index={index} 
                  content={item}
                  deleteItem={this.handleItemDelete}
                  />

                {/*<li 
                key={index}
                onClick={this.handleItemDelete.bind(this,index)}
                dangerouslySetInnerHTML={{__html:item}}
                >
                </li>*/}
                </div>
                )
                
              })

        )
    }
    hanldeInputChange(e){
        //this.state.inputValue = e.target.value;
        //console.log(e.target.value);

        // this.setState({
        //     inputValue:e.target.value
        // });
        //下面变成函数的形式
        const value = e.target.value;
        this.setState(()=>({
            inputValue:value
        }))
    }

    handleBtnClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleItemDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
        console.log(index);
        
    }
}
export default Todolist