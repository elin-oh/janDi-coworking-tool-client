import React from 'react';
import styles from './TodoListWrapper.scss';
import classNames from 'classnames/bind';
import TodoLists from 'components/TodoLists';

const cx = classNames.bind(styles)

const TodoListWrapper = ({ TodoInput, children }) => {
  return (
    <div className={cx('TodoListWrapper')}>
      <TodoLists />
    </div>
  )

}


export default TodoListWrapper;
