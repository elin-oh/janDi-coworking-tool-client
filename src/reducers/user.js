import * as types from '../actions/ActionTypes';

const initialState = {
};

function userController(state = initialState, action) {
  // 레퍼런스 생성
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        test: !action.value
      };
    default:
      return state;
  }
}


export default userController;

