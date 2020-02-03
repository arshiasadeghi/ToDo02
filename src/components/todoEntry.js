import React,{ Component } from "react";
import TodoStore from '../stores/TodoStore';
import TodoItems from './todoItems'
class TodoEntry extends Component{



    state={
        value:''
    }

    handleKeyDown=event=>{
        if(event.keyCode!==13){
            return;
        }
        event.preventDefault();
        TodoStore.addTodo(this.state.value);
        this.setState({
            value:''
        })
    }



    render(){
        return(
            <header className="header"   >
                <h1>to Do</h1>
                <input type="text" className="new-todo" placeholder="what needsto be done"
                onChange={event=>this.setState({value:event.target.value})}
                onKeyDown={
                    event=>this.handleKeyDown(event)
                }
                value={this.state.value}
                />
                
                 
            </header  >     
        )
    }




}


export default TodoEntry;