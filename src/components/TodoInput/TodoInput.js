import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const TodoInput = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className={cx("TodoInput")}>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className={cx("create-button")} onClick={onCreate}>
        추가
      </div>
    </div>
  );
};


export default TodoInput;
