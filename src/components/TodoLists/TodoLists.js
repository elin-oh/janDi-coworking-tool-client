import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoLists.scss';
import TodoItem from 'components/TodoItem';

const cx = classNames.bind(styles);


const TodoLists = (props) => (
  <div className="TodoListsWrapper">
    {/* <span className={cx('title')}>{props.name}의 오늘의 할 일</span> */}
    {
      props.todoLists &&
      props.todoLists.map(item => (
        <TodoItem todo={item} key={item.id} />
      ))
    }

  </div>
);

export default TodoLists;
