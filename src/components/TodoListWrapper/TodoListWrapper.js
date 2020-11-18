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
    console.log(this.state.sortedTodoLists);
  }


  mapTodoList() {
    if (this.props.todolists) {
      this.props.todolists.forEach(item => {
        console.log(item.user.userName);
        console.log(this.state.nameList.includes(item.user.userName));
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
    return (
      <div className={cx('TodoListWrapper')}>
        {
          this.state.nameList.map(item => (
            <TodoLists todoLists={this.state.sortedTodoLists[item]} name={item} />
          ))
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  // works: state.workReducer.works,
  todolists: state.todoReducer.todosInfo.project.todolists,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper);

