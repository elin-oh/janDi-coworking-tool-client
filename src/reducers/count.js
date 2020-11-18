import * as types from '../actions/ActionTypes';

const initialState = {
  todoDoneCount: 0,
  todoTotalCount: 0
};

function countController(state = initialState, action) {
  // 레퍼런스 생성
  switch (action.type) {
    case types.SET_COUNT:
      return {
        ...state,
        todoDoneCount: action.todoDoneCount,
        todoTotalCount: action.todoTotalCount
      };
    default:
      return state;
  }
}


export default countController;

