import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.scss'

const cx = classNames.bind(styles)

class TodoItem extends Component {



  render() {
    const { body, isChecked, id, onToggle, onRemove } = this.props;
    return (
      <div className={cx("todoItem")} onClick={() => onToggle(id)}>
        <div className={cx("remove")} onClick={(e) => {
          e.stopPropagation();
          onRemove(id)
        }
        }>&times;</div>
        <div className={`todo-text ${isChecked && 'isChecked'}`}>
          <div>{body}</div>
        </div>
        {
          isChecked && (<div className={cx('checkMark')}>&#x2713;</div>)
        }
      </div>
    );
  }
}
export default TodoItem;