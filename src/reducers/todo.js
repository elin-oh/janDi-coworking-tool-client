import * as types from '../actions/ActionTypes';

const initialState = {
  todosInfo: {
    member: [],
    project: {
      adminUserId: false,
      todolists: []
    }
  },
  date: '',
  member: ""
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
    case types.ADD_TODO_LIST:
      return {
        ...state,
        todosInfo: {
          ...state.todosInfo,
          project: {
            ...state.todosInfo.project,
            todolists: [
              ...state.todosInfo.project.todolists,
              action.todolist
            ]
          }
        }
      };
    case types.DELETE_TODO:
    // return {
    //   ...state,
    //   todosInfo: {
    //     ...state.todosInfo,
    //     project: {
    //       ...state.todosInfo.project,
    //       todolists: [
    //         ...state.todosInfo.project.todolists.filter(item => item.id !== action.id)
    //       ]
    //     }
    //   }
    // };
    default:
      return state;
  }
}

export default todoController;