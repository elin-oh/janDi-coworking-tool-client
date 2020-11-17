import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import axios from 'axios';



const Menu = (props) => {

  return (<ul className="MenuWrapper">
    <li>
      <Link to="/">홈</Link>
    </li>
    <li>
      <Link to="/mypage">마이페이지</Link>
    </li>
    <li>
      <a className="btnLogout" href="/login">로그아웃</a>
    </li>
    <li className="btnClose" onClick={props.onCloseMenu}>
      <img src="/img/btn_close.png" alt="메뉴닫기" />
    </li>
  </ul>)
};


export default Menu;
