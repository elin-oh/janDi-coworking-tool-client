import * as types from '../actions/ActionTypes';

const initialState = {
  email: "",
  passLen: 0,
  userName: ""
};

function projectsController(state = initialState, action) {
  // 레퍼런스 생성
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        email: action.email,
        passLen: action.passLen,
        userName: action.userName
      };
    default:
      return state;
  }
}


export default projectsController;

