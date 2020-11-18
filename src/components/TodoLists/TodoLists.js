import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoLists.scss';
import TodoItem from 'components/TodoItem';

const cx = classNames.bind(styles);


const TodoLists = (props) => (
  <div className="TodoListsWrapper">
    <span className={cx('title')}>김코딩의 오늘의 할 일</span>

    <TodoItem id="2" />
  </div>
);

export default TodoLists;
