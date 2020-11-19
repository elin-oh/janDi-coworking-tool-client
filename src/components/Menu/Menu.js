import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Menu.scss';
import { withCookies } from 'react-cookie';


const Menu = (props) => {
  let { cookies } = props;
  function onHandleLogout() {
    cookies.remove('userId');
    this.props.history.push('/login');
  }
  if (cookies.get('userId') === undefined) {
    return <Redirect to="/login" />
  } else {
    return (
      <ul className="MenuWrapper">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
        <li>
          <a className="btnLogout" href="/login" onClick={onHandleLogout.bind(this, props)}>로그아웃</a>
        </li>
        <li className="btnClose" onClick={props.onCloseMenu}>
          <img src="/img/btn_close.png" alt="메뉴닫기" />
        </li>
      </ul>
    );
  }

}

export default withCookies(Menu);
