import React, { Component } from "react"
import TodoItem from '../TodoItem/TodoItem'
//import axios from 'axios'

class TodoItemList extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.todos !== nextProps.todos;
  // }
  // axios = () => {
  //   axios.get('http://localhost:5000/todolist')
  // }


  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(({ id, body, isChecked }) => (
      <TodoItem id={id} body={body} isChecked={isChecked} onToggle={onToggle} onRemove={onRemove} key={id}
      />))

    return (
      < div >
        {todoList}
      </div >
    );
  }
}
export default TodoItemList;