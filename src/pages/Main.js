import React, { Component } from 'react';
import Header from 'components/Header';
import Button from 'components/Button';
import Popup from 'components/Popup';
import MiniButton from 'components/MiniButton';
// import classNames from 'classnames/bind';
// import styles from '../styles/Main.css';
import { getStartEndDate, generateJandi } from 'modules/generateDayBlock';

// const cx = classNames.bind(styles);

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPopupOpen: false,
      todoList: [
        //projectA 에 해당되는 투두리스트 목록
        {
          title: 'ProjectA',
          todoList: [
            {
              date: "2020-10-30",
              count: 7
            }
          ]
        },
        //projectB 에 해당되는 투두리스트 목록
        {
          title: 'ProjectB',
          todoList: [
            {
              date: "2020-10-30",
              count: 7
            }
          ]
        }
      ]
    }
  }

  componentDidMount() {
    //시작주 일요일에 해당되는 날짜, 오늘날짜를 불러온다
    let [startDate, endDate] = getStartEndDate();
    generateJandi(this.state.todoList);
    console.log(startDate, endDate);
  }

  onOpenPopup() {
    this.setState({
      isPopupOpen: true
    })
  }
  handleClosePopup(e) {
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
            <h2>프로젝트 리스트</h2>
            <div onClick={this.onOpenPopup.bind(this)}>
              <Button >프로젝트 생성하기</Button>
            </div>

            <ul>
              {

              }
            </ul>
          </div>{/* App-contents */}

          {this.state.isPopupOpen ? (
            <Popup open onClosePopup={this.handleClosePopup.bind(this)}>
              <h3>프로젝트 생성</h3>

              <ul className="MainCreatePoject">
                <li>
                  <h4>프로젝트 이름</h4>
                  <div className="inputWrap">
                    <input placeholder="name" />
                  </div>
                </li>
                <li>
                  <h4>멤버 초대</h4>
                  <div className="flexRow">
                    <div className="inputWrap">
                      <input placeholder="name" />
                    </div>
                    <MiniButton classList={['posRel']}>초대</MiniButton>
                  </div>

                </li>
              </ul>

            </Popup>
          ) : null}

        </div>{/* mb-view */}
      </div >
    );
  }
}

export default Main;
