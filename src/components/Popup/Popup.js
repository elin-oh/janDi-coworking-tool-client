import React, { Component } from 'react';
import './Popup.scss';

// props에 open설정시 팝업 오픈
// Props에 설정 필수값: min-height, height
class Popup extends Component {

  render() {
    if (this.props.open) {
      return (
        <div className="PopupWrapper">
          {/* 팝업 컴포넌트 사용시 props에 onClosePopup 메소드를 연결해주세요 */}
          <div className="btnClosePopup" onClick={this.props.onClosePopup || this.handleCloseRemovePopup}>
            <img src="/img/btn_close_popup.png" alt="팝업닫기" />
          </div>
          {this.props.children}
        </div>
      );
    } else {
      return null;
    }

  }
}



export default Popup;
