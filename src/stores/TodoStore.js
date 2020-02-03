import { observable, action } from "mobx";
import TodoItems from "./../components/todoItems";
import  TodoModel  from "./TodoModel";
class TodoStore{
    @observable todos=[

    ];
    lastId=0

    @action addTodo(title){
        this.todos.push(new TodoModel(this,title,false,this.lastId ++))
    }

}

const store=new TodoStore();
export default store;