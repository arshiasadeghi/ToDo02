import { action } from "mobx"
import {observable} from 'mobx'

export default class TodoModel{
    store
    id
    @observable title   
    @observable completed
    constructor(store,title,completed,id){
        this.title=title
        this.completed=completed;
        this.id=id
        this.store=store
    }
    @action

    toggle(){
        
        this.completed=!this.completed;
        console.log(this.completed)
    }

    done(){
        this.completed= true;
        console.log('completed')
    }






    boggle(){
        this.completed=true;
    }

    @action
    rrrr(){

    }}
