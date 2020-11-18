import React from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const TodoItem = (props) => (
  <div className={cx('TodoItemWrapper')}>
    <div className={cx('todoCheck')}>
      <input type="checkbox" id={props.todo.id} />
      <label htmlFor={props.todo.id}></label>
      <span>{props.todo.body}</span>
    </div>
    <div className={cx('btnDeleteTodo')}>
      <img src="/img/btn_delete_member.png" alt="투두삭제" className="btnDelete" />
    </div>
  </div >
);


export default TodoItem;
