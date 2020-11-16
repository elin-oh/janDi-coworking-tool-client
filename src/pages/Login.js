import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'styles/Login.css';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import axios from 'axios';
import { setUser } from 'actions';
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
    this.setState({
      [key]: e.target.value,
      errorMessage: ""
    });

  };

  handleLogin = () => {
    const { userId, password } = this.state;
    // const { handleResponseSuccess } = this.props;
    if (!userId || !password) {
      //console.log("====================", this.state)
      this.setState({
        errorMessage: "아이디 또는 비밀번호를 입력하세요."
      })
    } else {
      //console.log("====================", this.state)
      axios.post('http://localhost:5000/login', {
        email: userId,
        password
      }).then(res => {
        console.log(res);
        let passLen = password.length;
        this.props.setUser(userId, passLen);
        this.props.history.push("/Mypage");
      }).catch(error => {
        if (error.response && error.response.status === 404) {
          this.setState({
            errorMessage: "존재하지 않는 사용자거나 또는 비밀번호가 틀렸습니다"
          })
        }
        console.log(error);
      })

    }
  };

  render() {
    return (
      <div className="App-wrap">
        <div className="mb-view">
          <div className="App-contents login">
            <img className="loginLogo" src="/img/jandi_logo.png" alt="jandi_logo" />
            <h2>잔디에 오신걸 환영합니다</h2>
            <ul className={cx('login-userInfo')}>
              <li>
                <div className="inputWrap">
                  <input type='text' placeholder="아이디를 입력하세요" onChange={this.handleInputValue("userId")}></input>
                </div>
              </li>
              <li>
                <div className="inputWrap">
                  <input type="password" onChange={this.handleInputValue("password")} placeholder="비밀번호를 입력하세요" />
                </div>
                {this.state.errorMessage && <div className="warning_text">{this.state.errorMessage}</div>}
              </li>
              <li onClick={this.handleLogin.bind(this)} className={cx('btnLogin')}>
                <Button>로그인</Button>
              </li>
            </ul>
            <div className="goToSignUp">
              {/*페이스북 로그인 
                            <p>또는</p>
                            <Fblogin />
                            */}
              <Link to="/signUp">
                <span>계정이 없으신가요?</span>
              </Link>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  // works: state.workReducer.works,
});

const mapDispatchToProps = (dispatch) => ({
  // loadWork: (id) => { return dispatch(loadWork(id)) }
  setUser: (email, passLen) => dispatch(setUser(email, passLen))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);