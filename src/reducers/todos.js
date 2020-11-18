import * as types from '../actions/ActionTypes';

const initialState = {
  todos: []
};


function todosController(state = initialState, action) {
  // 레퍼런스 생성
  switch (action.type) {
    case types.SET_TODOS:
      return {
        ...state,
        todos: action.todos
      };
    default:
      return state;
  }
}

export default todosController;