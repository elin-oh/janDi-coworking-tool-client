import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import { server_path } from 'modules/path';
import classNames from 'classnames/bind';
import Header from 'components/Header';
import JandiGround from 'containers/JandiGround';
import TodoInput from 'components/TodoInput';
import TodoListWrapper from 'components/TodoListWrapper';
import styles from 'styles/Project.css';
import Popup from 'components/Popup';
import Button from 'components/Button';
import MiniButton from 'components/MiniButton';
import { setTodos, setTodoDate } from 'actions';

const cx = classNames.bind(styles);

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopupOpen: false,
      memberInput: "",
      memberLists: [],
      projectNameInput: "",
      project: {}

    }
  }

  componentDidMount() {

    let projectId = this.props.location.pathname.split('/')[2];
    //프로젝트 설정
    let project;
    if (this.props.projects && this.props.projects.length > 0) {
      project = this.props.projects.filter(item => {
        return item.id == projectId;
      });
      if (project.length > 0) {
        this.setState({
          projectId,
          projectNameInput: project[0].projectName,
          memberLists: this.props.member,
          project: project[0],
        })
      }
    }

    let day = this.getToday();
    this.props.setTodosDate(day);

    axios.get(server_path + '/projectinfo?pid=' + projectId + '&day=' + this.props.targetDate, { withCredentials: true }).then(res => {
      console.log(res.data);
      let filteredMember = res.data.member.filter(item => item !== this.props.userEmail);
      let data = res.data;
      data.member = filteredMember;
      this.props.setTodos(data);
    }).catch(error => {
      console.log(error);
    })
  }
  getToday() {
    let date = new Date();
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    return year + '-' + month + '-' + day;
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

  onChangeInput(e) {
    let { name, value } = e.target;
    if (name === "memberInput") {
      this.setState({
        errorMessage: ""
      })
    }
    this.setState({
      [name]: value
    })
  }
  onClickBtnInvite(e) {
    this.setState({
      errorMessage: ""
    })
    if (this.state.memberInput === "") {
      this.setState({
        errorMessage: "초대할 멤버를 입력해주세요"
      })
      return;
    }

    if (this.state.memberInput === this.props.userEmail) {
      this.setState({
        errorMessage: "사용자 본인입니다"
      })
      return;
    }
    axios.post(server_path + '/usercheck', {
      email: this.state.memberInput
    }, { withCredentials: true }).then(res => {
      if (res.data.isUser === true) {
        let memLi = this.state.memberLists;
        memLi.push(this.state.memberInput);
        this.setState({
          memberInput: '',
          memberLists: memLi
        });
      } else {
        this.setState({
          errorMessage: "가입된 유저가 아닙니다"
        })
      }
    }).catch(error => {
      console.error(error)
    })
  }
  handleClickTodo(project, e) {
    axios.get(server_path + '/projectinfo?pid=' + project.id + '&day=' + e.target.dataset.key, { withCredentials: true }).then(res => {
      console.log(res.data);
      let filteredMember = res.data.member.filter(item => item !== this.props.userEmail);
      let data = res.data;
      data.member = filteredMember;
      this.props.setTodos(data);


    }).catch(error => {

    })
  }
  deleteMember(index) {
    let memLi = this.state.memberLists;
    memLi.splice(index, 1);
    this.setState({
      memberLists: memLi
    })
  }

  onModifyProject() {
    let { cookies } = this.props;
    let { projectNameInput, memberLists } = this.state;
    if (projectNameInput === "") {
      this.setState({
        errorMessage: "프로젝트 이름을 지정해주세요"
      });
      return;
    } else {
      axios.put(server_path + '/projectchange', {
        id: this.state.project.id,
        projectName: this.state.projectNameInput,
        member: this.state.memberLists
      }, { withCredentials: true }).then(res => {
        this.setState({
          isPopupOpen: false
        });

      }).catch(e => {
        console.log(e)
      })
    }

  }
  handleDeleteTodo(id) {
    console.log(id);
    axios.delete(server_path + '/todolistdelete', {
      id
    }).then(res => {
      console.log(res);
    })
  }

  onLoadData() {
    let projectId = this.props.location.pathname.split('/')[2];
    axios.get(server_path + '/projectinfo?pid=' + projectId + '&day=' + this.props.targetDate, { withCredentials: true }).then(res => {
      let filteredMember = res.data.member.filter(item => item !== this.props.userEmail);
      let data = res.data;
      data.member = filteredMember;
      this.props.setTodos(data);
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App-wrap" >
        <div className="mb-view">
          <Header />
          <div className="App-contents Project">
            <h4>{this.state.project.projectName}</h4>
            {/* 잔디밭 */}
            <div className="Main-JandiGroundWrapper">
              <div className="Main-JandiGround">
                <JandiGround todoLists={this.state.project} method={this.handleClickTodo.bind(this, this.state.project)} />
              </div>
            </div>
            <TodoInput member={this.state.member} onOpenModifyPopup={this.onOpenPopup.bind(this)} projectId={this.state.projectId} onLoadData={this.onLoadData.bind(this)} />

            <TodoListWrapper onDeleteTodo={this.handleDeleteTodo.bind(this)} onLoadData={this.onLoadData.bind(this)} />
          </div>{/* App-contents */}
          {this.state.isPopupOpen ? (
            <Popup open onClosePopup={this.handleClosePopup.bind(this)}>
              <h3>프로젝트 수정</h3>

              <ul className="Project-modifyPoject">
                <li>
                  <h4>프로젝트 이름</h4>
                  <div className="inputWrap">
                    <input placeholder="name" onChange={this.onChangeInput.bind(this)} value={this.state.projectNameInput} name="projectNameInput" />
                  </div>
                </li>
                <li>
                  <h4>멤버 초대</h4>
                  <div className="flex justCen alignEnd">
                    <div className="inputWrap">
                      <input placeholder="member" onChange={this.onChangeInput.bind(this)} value={this.state.memberInput} name="memberInput" />
                    </div>
                    <div onClick={this.onClickBtnInvite.bind(this)}>
                      <MiniButton classList={['posRel']}>초대</MiniButton>
                    </div>
                  </div>

                  {
                    this.state.memberLists.length > 0 &&
                    <ul className="addedMemberList">
                      {
                        this.state.memberLists.length > 0 &&
                        this.state.memberLists.map((item, index) => {
                          return (
                            <li className="flex" key={index} data-key={index}>
                              <span>{item}</span>
                              <div onClick={this.deleteMember.bind(this, index)}>
                                <img src="/img/btn_delete_member.png" alt="멤버 삭제" className="btnDelete" />
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  }

                  {
                    this.state.errorMessage ? (
                      <span className="warning_text">{this.state.errorMessage}</span>
                    ) : null
                  }

                  <div className={cx('btnSubmitModifyProject')} onClick={this.onModifyProject.bind(this)}>
                    <Button >프로젝트 수정하기</Button>
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


const mapStateToProps = (state) => ({
  projects: state.projectsReducer.projects,
  userEmail: state.userReducer.email,
  member: state.todoReducer.todosInfo.member,
  targetDate: state.todoReducer.date,
  todolists: state.todoReducer.todosInfo.project.todolists || [],
});

const mapDispatchToProps = (dispatch) => ({
  setTodos: (todosInfo) => dispatch(setTodos(todosInfo)),
  setTodosDate: (date) => dispatch(setTodoDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Project));