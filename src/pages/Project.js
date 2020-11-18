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

const cx = classNames.bind(styles);

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {},
      isPopupOpen: false
    }
  }

  componentDidMount() {



    let projectId = this.props.location.pathname.split('/')[2];
    let day = new Date().toISOString().slice(0, 10);

    //프로젝트 설정
    let project;
    if (this.props.projects.length > 0) {
      project = this.props.projects.filter(item => {
        return item.id == projectId;
      });
      if (project.length > 0) {
        this.setState({
          project: project[0]
        })
      }
    }

    axios.get(server_path + '/projectinfo?pid=' + projectId + '&day=' + day, { withCredentials: true }).then(res => console.log(res))
  }

  render() {
    return (
      < div className="App-wrap" >
        <div className="mb-view">
          <Header />
          <div className="App-contents Project">
            <h4>{this.state.project.projectName}</h4>
            {/* 잔디밭 */}
            <div className="Main-JandiGroundWrapper">
              <div className="Main-JandiGround">
                <JandiGround todoLists={this.state.project} />
              </div>
            </div>
            <TodoInput />

            <TodoListWrapper />
          </div>{/* App-contents */}
        </div>{/* mb-view */}
      </div >
    );
  }
}


const mapStateToProps = (state) => ({
  // works: state.workReducer.works,
  projects: state.projectsReducer.projects,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Project));