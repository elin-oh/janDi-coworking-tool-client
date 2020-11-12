import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.scss';
const cx = classNames.bind(styles);

const Header = (props) => (
  <div className={cx('HeaderWrapper')}>
    <div className={cx('logoWrapper')}>
      <Link to="/" className={cx('headerLogo')}>
        < img src="/img/headerLogo.png" alt="잔디헤더로고" />
      </Link >
    </div>
    <div className={cx('menuBarWrap')}>
      < img src="/img/menuBar.png" alt="메뉴바" />
    </div>
  </div >
);


export default Header;
