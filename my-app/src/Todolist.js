
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
                        onChange={this.hanldeInputChange.bind(this)}
                    
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>    
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                          return (
                        <div>
                            <TodoItem 
                            index={index} 
                            content={item}
                            deleteItem={this.handleItemDelete.bind(this)}
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
                    }
                </ul>
            </Fragment>
        )
    }
    hanldeInputChange(e){
        //this.state.inputValue = e.target.value;
        //console.log(e.target.value);
        this.setState({
            inputValue:e.target.value
        })
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