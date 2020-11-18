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



  render() {
    if (this.props.nameList.length > 0) {
      return (
        <div className={cx('TodoListWrapper')}>
          {
            this.props.nameList.map(item => {
              return (
                <TodoLists todoLists={this.props.sortedTodoLists[item]} name={item} key={item} />
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
  sortedTodoLists: state.todoReducer.sortedTodoLists,
  nameList: state.todoReducer.nameList
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper);

