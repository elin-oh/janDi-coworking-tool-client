import * as types from '../actions/ActionTypes';

const initialState = {
  projects: [],
  project:{},
  targetDate:'',
  today:''
};

function projectsController(state = initialState, action) {
  // 레퍼런스 생성
  switch (action.type) {
    case types.SET_PROJECTS:
      return {
        ...state,
        projects: action.projectLists
      };
    case types.SET_PROJECT:
      return {
        ...state,
        project:action.project
      };
    case types.SET_DATE:
      return {
        ...state,
        targetDate: action.date
      };
    case types.SET_TODAY:
      return {
        ...state,
        today:action.today
      };
    default:
      return state;
  }
}


export default projectsController;

