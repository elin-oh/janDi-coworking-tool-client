import React from 'react';
import classNames from 'classnames/bind';
import styles from './JandiHana.scss';
const cx = classNames.bind(styles);

const JandiHana = (props) => {
  let bgColor = '#F3F3F4';
  if (!props.count) {
    bgColor = '#F3F3F4';
  } else if (props.count >= 7) {
    bgColor = '#155529'
  } else if (props.count >= 5) {
    bgColor = '#30A14E'
  } else if (props.count >= 3) {
    bgColor = '#40C463'
  } else if (props.count >= 1) {
    bgColor = '#9BE9A8'
  }

  return (
    <div className={cx('JandiHanaWrapper')}>
      <div className={cx('content')} style={{ backgroundColor: bgColor }} data-key={props.dataKey ? props.dataKey : null}>
      </div>
    </div >
  );
}

export default JandiHana;
