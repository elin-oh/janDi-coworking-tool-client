import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles);

class Button extends Component {
  render() {
    let bgColor = this.props.bgColor || '#28B351';
    let color = this.props.color || '#ffffff';
    let alignSelf = this.props.mdSize ? 'center' : 'inherit';
    let border = this.props.border || 'none';
    return (

      < div className={cx('ButtonWrapper')} style={{ backgroundColor: bgColor, color, alignSelf, border }
      }>
        {this.props.children}
      </div >
    );
  }
}


export default Button;
