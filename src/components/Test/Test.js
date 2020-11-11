import React from 'react';
import styles from './Test.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const List = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}></div>
    </div>
  );
};

export default List;
