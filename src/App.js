import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import {observer} from 'mobx-react';
import TodoEntry from './components/todoEntry';
import TodoItems from './components/todoItems';
import { observable } from 'mobx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';




@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
  render(){
  return (
    <div className="todoapp" id="todoapp">
        <TodoEntry   />
        <TodoItems />
    </div>
  );}
}

export default App;
