import React, { Component } from 'react'

export default class List extends Component {
    constructor() {
        super();

    }
    

  render() {
    let {element,index,update,deleteitem} = this.props
    
    return (
      <div>
        <input type="text" onChange={(e) => update(e.target.value,index)} value={element}/>
        <button onClick={(e) => deleteitem(index)}>Delete Item</button>
      </div>
    )
  }
}
