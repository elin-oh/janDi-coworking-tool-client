import React, { Component } from 'react';
import Header from 'components/Header';
import JandiGround from 'containers/JandiGround';
import styles from 'styles/Project.css';
import TodoList from 'components/TodoList'
import TodoInput from 'components/TodoInput'
import TodoItemList from 'components/TodoItemList';
import Popup from 'components/Popup';
import Button from 'components/Button'
import classNames from 'classnames/bind'
import MiniButton from 'components/MiniButton'
import axios from 'axios';
import server_path from 'module'

const cx = classNames.bind(styles);

class Project extends Component {
  constructor(props) {
    super(props)
    this.id = 5;
    this.jandiEl = [];
    this.state = {
      isPopupOpen: false,
      removePopup: false,
      errorMessage: "",
      //  ** 잔디 처리용 정보
      isAdmin: true,
      member: [
        "",
      ],
      todoLists: [
        { id: 0, title: '' }
      ],
      //
      // todo리스트 처리용 정보
      input: '',
      projectId: 0,
      userId: 0,
      isChecked: false,
      todos: [  //이건 이렇게 나누는게 맞는건가?
        {
          id: 0,
          body: "",
          isChecked: false
        },
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    //console.log(this.element)
    for (let el of this.state.todoLists) {
      this.jandiEl[el.id].scrollLeft = this.jandiEl[el.id].scrollWidth - this.jandiEl[el.id].offsetWidth;
    }




  }

  onOpenPopup(e) {
    this.setState({
      isPopupOpen: true
    })
  }
  handleClosePopup(e) {
    this.setState({
      isPopupOpen: false
    })
  }

  onOpenRemovePopup(e) {
    this.setState({
      removePopup: true
    })
  }
  handleCloseRemovePopup(e) {
    this.setState({
      removePopup: false
    })
  }
  handleScroll(e) {
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate() {
    const { input, projectId, userId, isChecked } = this.state;
    if (!input) {
      this.setState({
        errorMessage: "내용을 입력하세요."
      })
    } else {
      axios.post(server_path + '/todolistpost', {
        body: input,
        projectId,
        userId: userId,
        isChecked
      })
        .then(res => console.log(res))
        .catch(error => {
          if (error.response && error.response.status === 422) {
            this.setState({
              errorMessage: '오류가 발생했습니다.'
            })
          }
        })
      // this.setState({
      //   input: '',
      //   todos: todos.concat({
      //     id: this.id++,
      //     body: input,
      //     isChecked: false
      //   })
      // })
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    this.setState(
      {
        todos: [
          ...todos.slice(0, index),
          {
            ...selected,
            isChecked: !selected.isChecked
          },
          ...todos.slice(index + 1, todos.length)
        ]
      });

    // axios.put( server_path + '/todolistchange', { isChecked })
  }

  hanleRemove = (id) => {
    axios.delete(server_path + '/todolistdelete', {
      id
    }).then(res => console.log(res))
    // this.setState({
    //   todos: this.state.todos.filter(todo => todo.id !== id)
    // });
  }


  render() {
    return (
      < div className="App-wrap" >
        <div className="mb-view">
          <Header />
          <div className="App-contents">
            <h2>{this.state.todoLists[0].title}</h2>
            <ul className="Main-projectList" onScroll={this.handleScroll.bind(this)}>
              {this.state.todoLists.map(item => (
                <li key={item.id} >
                  <div className="Main-JandiGround" ref={(el) => { this.jandiEl[item.id] = el }} >
                    <JandiGround />
                  </div>
                </li>
              ))
              }
              <div onClick={this.onOpenPopup.bind(this)}>
                <Button >프로젝트 수정하기</Button>
              </div>

            </ul>
            <TodoList TodoInput={(
              <TodoInput value={this.state.input} onKeyPress={this.handleKeyPress} onChange={this.handleChange} onCreate={this.handleCreate} />)}>
              {this.state.errorMessage && <div className="warning_text">{this.state.errorMessage}</div>}
              <TodoItemList todos={this.state.todos} onToggle={this.handleToggle} onRemove={this.hanleRemove} />
            </TodoList>
          </div>{/* App-contents */}
          {this.state.isPopupOpen ? (
            <Popup open onClosePopup={this.handleClosePopup.bind(this)}>
              <h3>프로젝트 수정</h3>
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
                  <div onClick={this.onOpenRemovePopup.bind(this)}>프로젝트 삭제하기</div>
                  <Button>확인</Button>
                </li>
              </ul>
            </Popup>
          ) : null}
          {this.state.removePopup ? (
            <Popup open handleCloseRemovePopup={this.handleCloseRemovePopup.bind(this)}>
              <h3>정말로 지울꺼야?</h3>
              <Button bgColor='red' color='white'>프로젝트 삭제하기</Button>
            </Popup>
          ) : null}
        </div>{/* mb-view */}
      </div >
    );
  }
}

export default Project;
