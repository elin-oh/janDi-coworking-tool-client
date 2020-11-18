import * as types from '../actions/ActionTypes';

const initialState = {
  todosInfo: [],
  date: '',
  nameList: [],
  sortedTodoLists: {}
};


function todoController(state = initialState, action) {
  // 레퍼런스 생성
  switch (action.type) {
    case types.SET_TODOS:
      return {
        ...state,
        todosInfo: action.todosInfo
      };
    case types.SET_TODO_DATE:
      return {
        ...state,
        date: action.date
      };
    case types.SET_SORT_LIST:
      return {
        ...state,
        nameList: action.nameList,
        sortedTodoLists: action.sortedTodoLists
      };
    default:
      return state;
  }
}

export default todoController;