import React, { Component } from 'react';
import Header from 'components/Header';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'styles/MyPage.css';
import MiniButton from 'components/MiniButton';
import Popup from 'components/Popup';
import Button from 'components/Button';
import PersonalJandiGround from 'containers/PersonalJandiGround';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import { setCount, setUser } from 'actions';

const cx = classNames.bind(styles);
class Mypage extends Component {
  constructor(props) {
    super(props)
    const { cookies } = props;
    this.state = {
      isReadonlyUserName: true,
      isPopupOpen: false,
      input: {
        email: props.email,
        passLen: props.passLen,
        userName: props.userName,
        currentPass: '',
        changePass: '',
        changePassCheck: ''
      },
      todoDoneCount: 0,
      todoTotalCount: 0,
    }
  }

  componentDidMount() {
    let { cookies } = this.props.cookies;
    //user 정보가 없으면 리다이렉트

    if (!cookies.userId) {
      this.props.history.push('/login')
    }
    axios.get('http://localhost:5000/userinfo', { withCredentials: true }).then(res => {
      if (res.data.todolists[0]) {
        let { todoDoneCount, todoTotalCount } = res.data.todolists[0];
        this.props.setCount(todoDoneCount, todoTotalCount);
        this.setState({
          todoDoneCount: todoDoneCount,
          todoTotalCount: todoTotalCount
        })
      }
    })

  }


  modifyNickName(e) {
    this.setState((prevState) => ({
      isReadonlyUserName: !prevState.isReadonlyUserName
    }))
  }

  onSubmitNickname(e) {
    let { userName } = this.state.input;
    if (userName === "") {
      //console.log('안돼요')
      return;
    }
    axios.put('http://localhost:5000/userchange', {
      userName
    }, { withCredentials: true }).then(res => {
      let { email, passLen, userName } = this.state.input;
      this.props.setUser(email, passLen, userName);
      this.setState((prevState) => ({
        isReadonlyUserName: !prevState.isReadonlyUserName
      }))
    })

  }
  changeInput(e) {
    let { name, value } = e.target;
    if (name === 'nickname') {
      this.setState({
        input: {
          ...this.state.input,
          userName: value
        }
      })
    } else {
      this.setState({
        input: {
          ...this.state.input,
          [name]: value
        }
      })
    }
  }
  onOpenPopup(e) {
    this.setState({
      isPopupOpen: true
    })
  }
  onClosePopup(e) {
    this.setState({
      isPopupOpen: false
    })
  }
  submitPassword() {
    let { changePass, changePassCheck, currentPass } = this.state.input;
    if (!changePass || !changePassCheck || !currentPass) {
      console.log('모든 란을 다 입력해주세요')
    } else if (currentPass === changePass) {
      console.log('변경할 비밀번호가 현재 비밀번호와 같습니다')
    } else if (changePass !== changePassCheck) {
      console.log('변경할 비밀번호와 비밀번호 확인은 같아야합니다');
    } else {
      axios.put('http://localhost:5000/userchange', {
        currentPassword: currentPass,
        newPassword: changePass
      }, { withCredentials: true }).then(res => {
        let { email, userName } = this.state.input;
        let passLen = changePass.length;
        this.props.setUser(email, passLen, userName);
        this.setState((prevState) => ({
          isReadonlyUserName: !prevState.isReadonlyUserName
        }))
      })
    }
  }

  render() {
    let pass = '';
    for (let i = 0; i < this.state.input.passLen; i++) {
      pass += 'p';
    }
    return (
      <div className="App-wrap">
        <div className="mb-view">
          <Header />
          <div className="App-contents">
            <h2>마이페이지</h2>
            <ul className={cx('Mypage-userInfo')}>
              <li>
                <label>이메일</label>
                <div className="inputWrap">
                  <input type="test" value={this.props.email} readOnly />
                </div>
              </li>
              <li>
                <label>닉네임</label>
                <div className="inputWrap" style={!this.state.isReadonlyUserName ? { paddingRight: '85px' } : null}>
                  <input type="text" value={this.state.input.userName} readOnly={this.state.isReadonlyUserName} onChange={this.changeInput.bind(this)} name="nickname" />
                  {this.state.isReadonlyUserName ? (
                    <div className="btnModify" onClick={this.modifyNickName.bind(this)}>
                      <img src="/img/ico_modify.png" alt="닉네임 수정" />
                    </div>) : <div onClick={this.onSubmitNickname.bind(this)}><MiniButton classList={['right']}>수정완료</MiniButton></div>}
                </div>
              </li>
              <li>
                <label>비밀번호</label>
                <div className="inputWrap">
                  <input type="password" value={pass} readOnly />
                  <div className="btnModify" onClick={this.onOpenPopup.bind(this)}>
                    <img src="/img/ico_modify.png" alt="비밀번호 수정" />
                  </div>
                </div>
              </li>
            </ul>
            <div className="MyPage-graph">
              <h3>
                개인 성취율 그래프
                  <span>{this.state.todoDoneCount}/{this.state.todoTotalCount}</span>
              </h3>
              <PersonalJandiGround todoCount={[this.state.todoDoneCount, this.state.todoTotalCount]} />
            </div>
          </div>{/*App-contents*/}
          <Popup open={this.state.isPopupOpen} onClosePopup={this.onClosePopup.bind(this)}>
            <h3>비밀번호를 변경하시겠습니까?</h3>

            <ul className="inputList">
              <li>
                <div className="inputWrap">
                  <input type="password" placeholder="현재 비밀번호" value={this.state.input.currentPass} name="currentPass" onChange={this.changeInput.bind(this)} />
                </div>
              </li>
              <li>
                <div className="inputWrap">
                  <input type="password" placeholder="변경할 비밀번호" value={this.state.input.changePass} name="changePass" onChange={this.changeInput.bind(this)} />
                </div>
              </li>
              <li>
                <div className="inputWrap">
                  <input type="password" placeholder="비밀번호 확인" value={this.state.input.changePassCheck} name="changePassCheck" onChange={this.changeInput.bind(this)} />
                </div>
              </li>
            </ul>
            <div onClick={this.submitPassword.bind(this)}>
              <Button bgColor="#FF9300" mdSize>비밀번호 변경하기</Button>
            </div>
          </Popup>
        </div>{/*mb-view */}
      </div >
    );
  }
}
const mapStateToProps = (state) => ({
  // works: state.workReducer.works,
  email: state.userReducer.email,
  passLen: state.userReducer.passLen,
  userName: state.userReducer.userName
});

const mapDispatchToProps = (dispatch) => ({
  setCount: (todoDoneCount, todoTotalCount) => dispatch(setCount(todoDoneCount, todoTotalCount)),
  setUser: (email, passLen, userName) => dispatch(setUser(email, passLen, userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Mypage));