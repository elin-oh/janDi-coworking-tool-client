import React from 'react';
import classNames from 'classnames/bind';
import styles from './JandiHana.scss';
const cx = classNames.bind(styles);

const JandiHana = (props) => {
  let bgColor = '#F3F3F4';
  if (props.count > 1) {
    console.log(props.count > 2)
    bgColor = '#9BE9A8'
  } else if (props.count > 3) {
    bgColor = '#40C463'
  } else if (props.count > 5) {
    bgColor = '#30A14E'
  } else if (props.count > 5) {
    bgColor = '#216E39'
  }
  return (
    <div className={cx('JandiHanaWrapper')}>
      <div className={cx('content')} style={{ backgroundColor: bgColor }}>
      </div>
    </div >
  );
}

export default JandiHana;
