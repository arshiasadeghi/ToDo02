import React,{ Component } from "react";
import {observer} from 'mobx-react';
import TodoModel from '../stores/TodoModel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TodoItems from './todoItems'
// or less ideally



var initialState = {
    
};


@observer
class TodoItem extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.checked);

    }

    
    onToggle= ()=>{
        this.props.todo.toggle()
    }


    render(){
        const { todo } =this.props;

        return(

            <li  className={todo.completed ? 'completed':''}>    
                <div className="view row m-2">
               
                    <input  
                    type="checkbox" 
                    className="toggle" 
                    value="on" 
                    defaultChecked={""}
                    checked={(todo.completed) ? "checked":''}
                    onChange={this.onToggle.bind(this)}/>
                
                    <label  className="jj">
                        {todo.title} 
                          
                    </label>
                    <button type="button" className="btn btn-danger btn-sm m-2 mb-3 mt-3 " onClick={()=>this.props.onDelete(this.props.item.id,this.props.item)} >Delete {todo.title}</button>   
                    
                    
                </div>
                <hr/>


               

            </li>    
          
        )
    }
}




export default TodoItem;