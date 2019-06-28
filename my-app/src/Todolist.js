
import React ,{ Component,Fragment} from 'react';

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
                    <input 
                        value={this.state.inputValue}
                        onChange={this.hanldeInputChange.bind(this)}
                    
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>    
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                          return <li>{item}</li>  
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
}
export default Todolist