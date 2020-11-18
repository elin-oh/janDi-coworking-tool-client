import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';
import { deleteTodo } from 'actions';
const cx = classNames.bind(styles);
class TodoItem extends Component {
  handleDeleteTodo(id) {
    this.props.deleteTodo(id);
  }
  render() {
    return (
      <div className={cx('TodoItemWrapper')}>
        <div className={cx('todoCheck')}>
          <input type="checkbox" id={this.props.todoList.id} />
          <label htmlFor={this.props.todoList.id}></label>
          <span>{this.props.todoList.body}</span>
        </div>
        <div className={cx('btnDeleteTodo')} onClick={this.handleDeleteTodo.bind(this, this.props.todoList.id)}>
          <img src="/img/btn_delete_member.png" alt="투두삭제" className="btnDelete" />
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  // works: state.workReducer.works,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
