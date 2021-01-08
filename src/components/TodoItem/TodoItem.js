import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';
import { deleteTodo,modifyTodoCheck } from 'actions';
import axios from 'axios';
import { server_path } from 'modules/path';
const cx = classNames.bind(styles);
class TodoItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      todoList:{}
    }
  }
  
  componentDidMount() {
    this.setState({
      todoList:this.props.todoList
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todoList !== this.props.todoList) {
      this.setState({
        todoList:this.props.todoList
      })
    }
  }
  
  

  changeCheck(id, e) {
    let checked = e.target.checked;
    axios.put(server_path + '/todolistchange', {
      id,
      IsChecked: checked
    }, { withCredentials: true }).then(res => {
      this.props.modifyTodoCheck(res.data.id, checked);
      this.setState((prevState)=>({
        todoList:{
          ...prevState.todoList,
          IsChecked:checked
        }
      }))
    }).catch(error => {
      console.error(error)
    })
  }
  
  
  deleteTodo(id){
    axios.delete(server_path + '/todolistdelete', {
      data: {id},
      withCredentials: true
    }).then(res => {
      this.props.deleteTodo(id);
    }).catch(error => {
      if (error.response && error.response.status === 401) {
        this.props.history.push('/login');
      }
    })
  }
  render() {
    return (
      <div className={cx('TodoItemWrapper')}>
        <div className={cx('todoCheck')}>
          <input type="checkbox" id={`todo${this.state.todoList.id ||''}`} onChange={this.changeCheck.bind(this, this.state.todoList.id||'')} checked={this.state.todoList.IsChecked||''} />
          <label htmlFor={`todo${this.state.todoList.id||''}`}></label>
          <span>{this.state.todoList.body||''}</span>
        </div>
        <div className={cx('btnDeleteTodo')} onClick={this.deleteTodo.bind(this, this.state.todoList.id||'')}>
          <img src="/img/btn_delete_member.png" alt="투두삭제" className="btnDelete" />
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id)=>dispatch(deleteTodo(id)),
  modifyTodoCheck: (id,checked)=>dispatch(modifyTodoCheck(id,checked))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
