import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from 'styles/login.css';
import { Link } from 'react-router-dom';

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

    handleLogin() {
        const { userId, password } = this.state

        if (!userId || !password) {
            this.setState({ errorMessage: "이메일과 비밀번호를 입력하세요" })
        } else {
            return true;
        }
    };


    render() {
        return (
            <div className="App-wrap">
                <div className="mb-view">
                    <img src="/img/jandi_logo.png" alt="jandi_logo" className="logo" />
                    <div className="App-contents">
                        <h2>잔디에 오신걸 환영합니다</h2>
                        <ul className={cx('login-userInfo')}>
                            <li>
                                <div className="inputWrap">
                                    <input type='text' placeholder="아이디를 입력하세요" onChange={this.handleInputValue("userId")}></input>
                                </div>
                            </li>
                            <li>
                                <div className="inputWrap">
                                    <input type="password" placeholder="비밀번호를 입력하세요" />
                                </div>
                            </li>
                            <button className='btn btn-login' type='submit' onClick={this.handleLogin}>
                                로그인
                            </button>
                            {<div className="alert-box">{this.state.errorMessage}</div>}
                            <div className="inputWrap">
                                <Link to="/signUp">계정이 없으신가요?</Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}
export default Login;