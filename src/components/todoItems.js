import React,{ Component } from "react";
import TodoItem from './todoItem'
import TodoStore from '../stores/TodoStore'
import { observer } from "mobx-react";



@observer
class TodoItems extends Component{



state={
    items:TodoStore.todos,
    backgrounds:''
}
handleDelete=(itemId,v)=>{
    console.log(v)
    const asghar=this.state.items.filter(item=>item.id == itemId)
    var index = this.state.items.indexOf(v)
    console.log(index)
    this.state.items.splice(index,1)
}

deleteAll=()=>{
    this.state.items.splice(0,1000)
}

close=()=>{
    var i;
    var backgrounds="completed";
    for (i = 0; i < this.state.items.length; i++) {
        this.state.items[i].completed =true;
        TodoStore.todos[i].done();

    }
    this.setState({
        backgrounds: 'checked'
      });
  
    
}

closed=()=>{
    var i;
    var backgrounds="completed";
    for (i = 0; i < this.state.items.length; i++) {
        this.state.items[i].completed ='';
           }
    this.setState({
        backgrounds: ''
      });

}


    render(){
        
        return(

            <section className="main">
                   <button  className="btn btn-warning ml-3" style={{}}  onClick={this.deleteAll}>Delete All</button>
                   <button  className="btn btn-warning ml-3" style={{}}  onClick={this.close}>Complete  All</button>
                   <button  className="btn btn-warning ml-3" style={{}}  onClick={this.closed}>unComplete  All</button>
                <ul className="todo-list"> 
               
                    {
                        this.state.items.map(todo=>{
                            return(
                                <div className="jj">
                                    <TodoItem todo={todo} id={todo.id}  checked={this.state.backgrounds}  onDelete={this.handleDelete} item={todo} kk={this.ll} /> 
                                </div>
                            )
                        })

                        


                   
                        
                        
                    }
                    




                    <li>
                        <div className="view">
                            <input type="checkbox" className="toggle" defaultChecked=""/>
                            <button className="destry"/>
                        </div>
                    </li>
                </ul>
             </section> 
        )
    }
}


export default TodoItems;