import * as types from '../actions/ActionTypes';

const initialState = {
  todolist:[]
};


function todoController(state = initialState, action) {
  // 레퍼런스 생성
  switch (action.type) {
    case types.INIT_TODOS:
      return initialState;
    default:
      return state;
  }
}

export default todoController;