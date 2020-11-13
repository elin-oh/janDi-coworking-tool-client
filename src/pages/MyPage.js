import React, { Component } from 'react';
import Header from 'components/Header';

import classNames from 'classnames/bind';
import styles from 'styles/MyPage.css';
import MiniButton from 'components/MiniButton';
import Popup from 'components/Popup';
import Button from 'components/Button';
import PersonalJandiGround from 'containers/PersonalJandiGround';

const cx = classNames.bind(styles);


class Mypage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isReadonlyUserName: true,
      inputNickName: 'David123',
      isPopupOpen: false
    }
  }

  modifyNickName(e) {
    this.setState((prevState) => ({
      isReadonlyUserName: !prevState.isReadonlyUserName
    }))
  }
  onSubmitNickname(e) {
    this.setState((prevState) => ({
      isReadonlyUserName: !prevState.isReadonlyUserName
    }))
  }
  changeInput(e) {
    let { name, value } = e.target;
    if (name === 'nickname') {
      this.setState({
        inputNickName: value
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

  render() {
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
                  test@test.com
                </div>
              </li>
              <li>
                <label>닉네임</label>
                <div className="inputWrap" style={!this.state.isReadonlyUserName ? { paddingRight: '85px' } : null}>
                  <input type="text" value={this.state.inputNickName} readOnly={this.state.isReadonlyUserName} onChange={this.changeInput.bind(this)} name="nickname" />
                  {this.state.isReadonlyUserName ? (
                    <div className="btnModify" onClick={this.modifyNickName.bind(this)}>
                      <img src="/img/ico_modify.png" alt="닉네임 수정" />
                    </div>) : <div onClick={this.onSubmitNickname.bind(this)}><MiniButton classList={['right']}>수정완료</MiniButton></div>}
                </div>
              </li>
              <li>
                <label>비밀번호</label>
                <div className="inputWrap">
                  <input type="password" value="password" readOnly />
                  <div className="btnModify" onClick={this.onOpenPopup.bind(this)}>
                    <img src="/img/ico_modify.png" alt="비밀번호 수정" />
                  </div>
                </div>
              </li>
            </ul>
            <div className="MyPage-graph">
              <h3>
                개인 성취율 그래프
                <span>53/87</span>
              </h3>
              <PersonalJandiGround todoCount={[53, 87]} />
            </div>
          </div>{/*App-contents*/}
          <Popup open={this.state.isPopupOpen} onClosePopup={this.onClosePopup.bind(this)}>
            <h3>비밀번호를 변경하시겠습니까?</h3>

            <ul className="inputList">
              <li>
                <div className="inputWrap">
                  <input type="password" placeholder="현재 비밀번호" />
                </div>
              </li>
              <li>
                <div className="inputWrap">
                  <input type="password" placeholder="변경할 비밀번호" />
                </div>
              </li>
              <li>
                <div className="inputWrap">
                  <input type="password" placeholder="비밀번호 확인" />
                </div>
              </li>
            </ul>
            <Button bgColor="#FF9300" mdSize>비밀번호 변경하기</Button>
          </Popup>
        </div>{/*mb-view */}
      </div >
    );
  }
}
export default Mypage;