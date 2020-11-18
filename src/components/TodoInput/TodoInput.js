import React from 'react';
import { connect } from 'react-redux';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const TodoInput = (props) => {
  return (
    <div className={cx("TodoInput")}>

      {/* 관리자한테만 보이는 라인 */}
      <div className={cx('adminSelection')}>
        <select>
          <option>::팀원선택::</option>
          {props.member && props.member.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <div className={cx('btnModify')} onClick={props.onOpenModifyPopup}>
          <img src="/img/btn_modify_project.png" alt="설정버튼" />
        </div>
      </div>
      <div className={cx('inputWrapTodoInput')}>
        <input type="text" placeholder="오늘의 할 일을 입력하세요" />
        <div className={cx('btnCreateTodo')}>
          추가
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  member: state.todoReducer.todosInfo.member
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

