import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import Header from 'components/Header';
import Button from 'components/Button';
import Popup from 'components/Popup';
import MiniButton from 'components/MiniButton';
import JandiGround from 'containers/JandiGround';
import axios from 'axios'
import styles from '../styles/Main.css';
import { server_path } from 'modules/path.js';
import { setProjects } from 'actions';
// const cx = classNames.bind(styles);

class Main extends Component {
  constructor(props) {
    super(props)
    this.jandiEl = [];
    this.state = {
      isPopupOpen: false,
      todoLists: []
    }
  }

  componentDidMount() {
    let { cookies } = this.props;

    axios.get(server_path + '/main', { withCredentials: true }).then(res => {
      console.log(res.data);
      this.props.setProjects(res.data);
    }).catch(error => {
      if (error.response && error.response.status === 401) {
        //쿠키삭제
        cookies.remove('userId');
        this.props.history.push('/login');
      }

    })

    //스크롤조정
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

            <ul className="Main-projectList" >
              {
                this.props.projects.map(item => (
                  <li key={item.id} >
                    <Link to={`/projectmake/${item.id}`}>
                      <h4>{item.projectName}</h4>
                      <div className="Main-JandiGround" ref={(el) => { this.jandiEl[item.id] = el }} >
                        <JandiGround title={item.tile} todoLists={item.todolists} />
                      </div>
                    </Link>
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
                  <Button >프로젝트 생성하기</Button>
                </li>
              </ul>
            </Popup>
          ) : null}

        </div>{/* mb-view */}
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  // works: state.workReducer.works,
  projects: state.projectsReducer.projects
});

const mapDispatchToProps = (dispatch) => ({
  setProjects: (projectLists) => dispatch(setProjects(projectLists))
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Main));
