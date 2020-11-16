import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import classNames from 'classnames/bind';
import styles from 'styles/SignUp.css';

const cx = classNames.bind(styles);

class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      validateMsg: "",
      email: "",
      userName: "",
      password: "",
      passwordCheck: ""
    }

  }

  handleChangeInput(e) {
    let { value, name } = e.target;

    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="App-wrap">
        <div className="mb-view">
          <div className="App-contents sign_up">
            <img className="topLogo" src="/img/jandi_logo.png" alt="jandi_logo" />
            <ul className={cx('Signup-input')}>
              <li>
                <div className="inputWrap">
                  <input type='text' placeholder="Email" name="email" onChange={this.handleChangeInput.bind(this)} value={this.state.email}></input>
                </div>
              </li>
              <li>
                <div className="inputWrap">
                  <input type="text" placeholder="user name" name="userName" onChange={this.handleChangeInput.bind(this)} value={this.state.userName} />
                </div>
              </li>
              <li>
                <div className="inputWrap">
                  <input type="password" placeholder="password" name="password" onChange={this.handleChangeInput.bind(this)} value={this.state.password} />
                </div>
              </li>
              <li>
                <div className="inputWrap">
                  <input type="password" placeholder="password check" name="passwordCheck" onChange={this.handleChangeInput.bind(this)} value={this.state.passwordCheck} />
                </div>
              </li>
              {
                this.state.validateMsg ?
                  <li className="warning_text">{this.state.validateMsg}</li> :
                  null
              }
            </ul>

            <ul className={cx('btn_list')}>
              <li>
                <Button>가입하기</Button>
              </li>
              <li className={cx('text')}>
                <span>또는</span>
              </li>
              <li>
                <Button bgColor="#1877F2">
                  <img src="/img/ico_facebook.png" alt="페이스북" className="icoImg" />
                  Facebook으로 가입
                </Button>
              </li>
              <li>
                <Button bgColor="#ECECEC" color="black">
                  <img src="/img/ico_google.png" alt="페이스북" className="icoImg" />
                  Google로 가입
                </Button>
              </li>
            </ul>

          </div>
        </div>
      </div >
    );
  }
}

export default Signup;
