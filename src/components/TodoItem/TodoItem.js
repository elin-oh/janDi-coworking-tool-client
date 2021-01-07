import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';
import { deleteTodo } from 'actions';
import axios from 'axios';
import { server_path } from 'modules/path';
const cx = classNames.bind(styles);
class TodoItem extends Component {
  changeCheck(id, e) {
    axios.put(server_path + '/todolistchange', {
      id,
      IsChecked: e.target.checked
    }, { withCredentials: true }).then(res => {
      this.props.onLoadData();
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
          <input type="checkbox" id={this.props.todoList.id} onChange={this.changeCheck.bind(this, this.props.todoList.id)} checked={this.props.todoList.IsChecked} />
          <label htmlFor={this.props.todoList.id}></label>
          <span>{this.props.todoList.body}</span>
        </div>
        <div className={cx('btnDeleteTodo')} onClick={this.deleteTodo.bind(this, this.props.todoList.id)}>
          <img src="/img/btn_delete_member.png" alt="투두삭제" className="btnDelete" />
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id)=>dispatch(deleteTodo(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
