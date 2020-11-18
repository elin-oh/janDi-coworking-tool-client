import * as types from '../actions/ActionTypes';

let date = new Date().toISOString().slice(0, 10)
const initialState = {
  todosInfo: [],
  date: date
};


function todoController(state = initialState, action) {
  // 레퍼런스 생성
  switch (action.type) {
    case types.SET_TODOS:
      return {
        ...state,
        todosInfo: action.todosInfo
      };
    default:
      return state;
  }
}

export default todoController;