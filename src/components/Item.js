import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value);
  }
  editItem = (e) => {
    //your code here
    const location = prompt('enter location');
    this.props.store.editItem(this.props.item.name, location);
  }
  deleteItem = (e) => {
    //your code here
    this.props.store.deleteItem(this.props.item.name);
  }
  render() {
    let item = this.props.item
    return (
        <div className = {item.completed ? "crossed": null}>
          <input type="checkbox" onClick={this.checkItem} value={item.name}/>
            {item.name} : {item.location}
          <input type="button" onClick={this.editItem} value='edit'/>
          <input type="button" onClick={this.deleteItem} value='delete'/>
        </div>)
  }
}

export default observer(Item)