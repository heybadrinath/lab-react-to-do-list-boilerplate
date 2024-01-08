import React from 'react'
import { Component } from 'react'
import List from './list';

class Todo extends Component{
  constructor() {
    super();
    this.state = {
      input: "",
      todo: [],

    }
  }

  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  formSubmit = (e) => {
    e.preventDefault()
    if(this.state.input.length > 0){
        this.setState({
            todo: [...this.state.todo, this.state.input],
            input:""
        })
        console.log(this.state.todo)
    }
  }

  deleteitem = (index) => {
    let data = this.state.todo
    data.splice(index, 1)
    this.setState({
        todo:data
    })
  }

  update = (newitem,index) => {
    let data = this.state.todo
    data.splice(index,1,newitem)
    this.setState({
        todo :data
    })
  }

  render() {
    return(
      <>
        <form onSubmit={this.formSubmit}>
          <input type="text" placeholder='Enter The Task' value={this.state.input} onChange={this.inputChange}/>
          <button type='submit'>Add Item</button>
        </form>  
        <h3>{this.state.input}</h3>
        <div>
            <h2>To Do List</h2>
            {
                this.state.todo.length == 0 ? (
                    <h5>No Tasks To Be Done</h5>
                ) : (
                    this.state.todo.map((item, i) =>{
                        return (
                            <div>
                                <List element = {item} index = {i} update = {this.update} deleteitem = {this.deleteitem}/>
                            </div>

                        )
                    })
                )
            }
        </div>
      </>
    )
  }


}

export default Todo