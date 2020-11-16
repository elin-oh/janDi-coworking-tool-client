import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from 'styles/Login.css';
import { Link } from 'react-router-dom';
import Button from 'components/Button'
//import Fblogin from 'components/Fblogin' 페이스북 로그인

const cx = classNames.bind(styles);


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: "",
      password: "",
      errorMessage: "",
      test: ""
    };


  }


  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });

  };

  handleLogin = () => {
    const { userId, password } = this.state;
    // const { handleResponseSuccess } = this.props;

    if (!userId || !password) {
      console.log("====================", this.state)
      this.setState({ errorMessage: "아이디 또는 비밀번호를 입력하세요." })
    } else {
      console.log("====================", this.state)
      this.props.history.push("/Mypage")
    }
  };


  render() {
    return (
      <div className="App-wrap">
        <div className="mb-view">
          <img className="loginLogo" src="/img/jandi_logo.png" alt="jandi_logo" />
          <div className="App-contents">
            <h2>잔디에 오신걸 환영합니다</h2>
            <ul className={cx('login-userInfo')}>
              <form onSubmit={(e) => e.preventDefault()}>
                <li>
                  <div className="inputWrap">
                    <input type='text' placeholder="아이디를 입력하세요" onChange={this.handleInputValue("userId")}></input>
                  </div>
                </li>
                <li>
                  <div className="inputWrap">
                    <input type="password" onChange={this.handleInputValue("password")} placeholder="비밀번호를 입력하세요" />
                  </div>
                </li>
              </form>
              <div onClick={this.handleLogin.bind(this)}>
                {<div style={{ color: "red" }} >{this.state.errorMessage}</div>}
                <Button bgColor='#b8B8B8' color="white">로그인</Button>
              </div>
            </ul>
            <div className="goToSignUp">
              {/*페이스북 로그인 
                            <p>또는</p>
                            <Fblogin />
                            */}
              <Link to="/signUp">계정이 없으신가요?</Link>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default Login;