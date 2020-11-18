import * as types from '../actions/ActionTypes';

const initialState = {
  projects: []
};

function projectsController(state = initialState, action) {
  // 레퍼런스 생성
  switch (action.type) {
    case types.SET_PROJECTS:
      return {
        ...state,
        projects: action.projectLists
      };
    default:
      return state;
  }
}


export default projectsController;

