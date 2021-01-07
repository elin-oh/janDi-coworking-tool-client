import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { server_path } from 'modules/path';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);
class TodoInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputTodo: "",
      targetMember: "",
      isAdmin: false
    }
  }

  componentDidMount() {
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

  selectMember(e) {
    if (e.target.value && e.target.value !== "::팀원선택::") {
      this.setState({
        targetMember: e.target.value
      })
    }
  }

  addTodos() {
    let { inputTodo } = this.state;
    let options = {};
    options = {
      projectId: this.props.project.id,
      body: inputTodo
    }
    axios.post(server_path + '/todolistpost', options, { withCredentials: true }).then(res => {
      this.setState({
        inputTodo: ""
      });
    }).catch((err)=>{
      console.log(err);
    })
  }

  render() {
    return (
      <div className={cx("TodoInput")}>
        {this.props.isAdmin ? (
          <div className={cx('adminSelection')}>
            {/* <select onChange={this.selectMember.bind(this)}>
              <option>::팀원선택::</option>
              {this.props.member && this.props.member.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select> */}
            <div className={cx('btnModify')} onClick={this.props.onOpenModifyPopup}>
              <img src="/img/btn_modify_project.png" alt="설정버튼" />
            </div>
          </div>
        ) : null}
        <div className={cx('inputWrapTodoInput')}>
          <input type="text" placeholder="오늘의 할 일을 입력하세요" value={this.state.inputTodo} onChange={this.onChangeInput.bind(this)} name="inputTodo" />
          <div className={cx('btnCreateTodo')} onClick={this.addTodos.bind(this)}>
            추가
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  project: state.projectsReducer.project
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

