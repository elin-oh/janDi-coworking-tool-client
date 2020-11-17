import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles);

class Button extends Component {
  // props.bgColor 지정시 버튼 배경색으로 지정, 입력없을시 기본컬러 #28B351
  // props.color 지정시 버튼 폰트컬러로 지정, 입력없을시 기본컬러 #ffffff
  // props.mdSize 지정시 버튼 middle Size 버튼으로 변경, 기본 사이즈 Full
  // props.border 지정시 버튼 테두리 설정, 초기값은 none
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
