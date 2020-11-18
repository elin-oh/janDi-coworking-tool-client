import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from './TodoListWrapper.scss';
import classNames from 'classnames/bind';
import TodoLists from 'components/TodoLists';

const cx = classNames.bind(styles);

class TodoListWrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sortedTodoLists: {},
      nameList: []
    }
  }

  componentDidMount() {
    this.mapTodoList();
  }


  mapTodoList() {
    if (this.props.todoinfos.todolists) {
      this.props.todoinfos.todolists.forEach(item => {
        if (this.state.nameList.includes(item.user.userName) === false) {
          let nameListSlice = this.state.nameList.slice();
          nameListSlice.push(item.user.userName);
          this.setState({
            nameList: nameListSlice
          })
        }
        if (this.state.sortedTodoLists[item.user.userName]) {
          this.state.sortedTodoLists[item.user.userName].push(item)
        } else {
          this.state.sortedTodoLists[item.user.userName] = []
        }
      })
    }
  }
  render() {
    if (this.state.nameList.length > 0) {
      return (
        <div className={cx('TodoListWrapper')}>
          {
            this.state.nameList.map(item => {
              return (
                <TodoLists todoLists={this.state.sortedTodoLists[item]} name={item} key={item} />
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div className={cx('TodoListWrapper')}>
          <span className="centerGrayText">등록된 투두가 없습니다</span>
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => ({
  // works: state.workReducer.works,
  todoinfos: state.todoReducer.todosInfo.project,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper);

