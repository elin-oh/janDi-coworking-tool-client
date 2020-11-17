import React, { Component } from 'react';
import Header from 'components/Header';
import Button from 'components/Button';
import Popup from 'components/Popup';
import MiniButton from 'components/MiniButton';
import JandiGround from 'containers/JandiGround';
import axios from 'axios'
import styles from '../styles/Main.css';


// const cx = classNames.bind(styles);

class Main extends Component {
  constructor(props) {
    super(props)
    this.jandiEl = [];
    this.state = {
      isPopupOpen: false,
      todoLists: [
        {
          id: 2,
          title: 'ProjectB'
        },
        {
          id: 3,
          title: 'ProjectA'
        },
        {
          id: 4,
          title: 'ProjectC'
        }
      ]
    }
  }

  componentDidMount() {
    console.log(this.element)
    for (let el of this.state.todoLists) {
      this.jandiEl[el.id].scrollLeft = this.jandiEl[el.id].scrollWidth - this.jandiEl[el.id].offsetWidth;
    }

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
  handleScroll(e) {

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

            <ul className="Main-projectList" onScroll={this.handleScroll.bind(this)}>
              {
                this.state.todoLists.map(item => (
                  <li key={item.id} >
                    <h4>{item.title}</h4>
                    <div className="Main-JandiGround" ref={(el) => { this.jandiEl[item.id] = el }} >
                      <JandiGround title={item.tile} />
                    </div>
                  </li>
                ))
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
                  <div className="flex justCen alignEnd">
                    <div className="inputWrap">
                      <input placeholder="name" />
                    </div>
                    <MiniButton classList={['posRel']}>초대</MiniButton>
                  </div>

                  <ul className="addedMemberList">
                    <li className="flex">
                      <span>test@test.com</span>
                      <img src="/img/btn_delete_member.png" alt="멤버 삭제" className="btnDelete" />
                    </li>
                    <li className="flex">
                      <span>test@test.com</span>
                      <img src="/img/btn_delete_member.png" alt="멤버 삭제" className="btnDelete" />
                    </li>
                    <li className="flex">
                      <span>test@test.com</span>
                      <img src="/img/btn_delete_member.png" alt="멤버 삭제" className="btnDelete" />
                    </li>
                  </ul>
                  <Button>프로젝트 생성하기</Button>
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
