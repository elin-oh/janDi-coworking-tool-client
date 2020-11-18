import React from 'react';
import styles from './TodoList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const TodoList = ({ TodoInput, children }) => {
  return (
    <main className={cx("TodoList")}>
      <section className={cx("TodoInputWrapper")}>
        {TodoInput}
      </section>
      <section className={cx("todosWrapper")}>
        {children}
      </section>
    </main>
  )

}


export default TodoList;
