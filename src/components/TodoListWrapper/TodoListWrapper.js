import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from './TodoListWrapper.scss';
import classNames from 'classnames/bind';
//import TodoLists from 'components/TodoLists';
import TodoItem from 'components/TodoItem';


const cx = classNames.bind(styles);

class TodoListWrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    if (this.props.project[this.props.targetDate] && this.props.project[this.props.targetDate].length > 0) {
      return (
        <div className={cx('TodoListWrapper')}>
          {
            this.props.project[this.props.targetDate].map(item => {
              return (
                <TodoItem todoList={item} key={item.id}/>
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
  targetDate: state.projectsReducer.targetDate,
  project: state.projectsReducer.project
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper);

