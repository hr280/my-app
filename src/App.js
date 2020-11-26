import React, { Component } from 'react';


// import firebase from 'firebase/app'

import './App.css'

class Header extends Component{
  render(){
    return(
      <div className="header">
         <h1>Todo App</h1>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [""],
      value: '',

    }
  }
  add_todo = () => {
    let obj = { title: this.state.value }
    //  firebase.database().ref('/').child("todos").push(obj)
    this.setState({
      todos: [...this.state.todos, obj],
      value: ''
    })
  }
  delete_todo = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
  }
  edit_todo = (index, val) => {
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })
  }
  change = (e, index) => {
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos
    })

  }
  update = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos,
      value: ''
    })
  }

  render() {
    let { todos, value } = this.state;
    return (
      <div className="container">
        <Header />
        <input className="inp" value={value} onChange={(e) => this.setState({ value: e.target.value })} type="text" placeholder="My todos" />
        <button className="addToDo" onClick={this.add_todo}>Add Item</button>
        <ul>
          {todos.map((v, i) => {
            return <li key={i}>{v.edit ? <input value={v.title} type="text" onChange={(e) => this.change(e, i)} /> : v.title}

              {v.edit ?
                <button  onClick={() => this.update(i)}>Update</button> :
                <button onClick={() => this.edit_todo(i, v.title)}>Edit</button>
              }
              <button onClick={() => this.delete_todo(i)}>Delete</button>
            </li>


          })}
        </ul>
      </div>
    )
  }
}


export default App;
