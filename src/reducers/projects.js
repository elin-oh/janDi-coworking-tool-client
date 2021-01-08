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
    case types.INIT_PROJECT:
      return initialState;
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
    case types.ADD_TODO_LISTS:
      return{
        ...state,
        project:{
          ...state.project,
          [state.today]:[
            ...state.project[state.today],
            action.todo
          ]
        }
      };
    case types.SET_TODAY:
      return {
        ...state,
        today:action.today
      };
    case types.DELETE_TODO:
      return {
        ...state,
        project:{
          ...state.project,
          [state.targetDate]:state.project[state.targetDate].filter(item=>item.id !== action.id)
        }
      }
    case types.MODIFY_TODO_CHECK:
      
      return {
        ...state,
        project:{
          ...state.project,
          [state.targetDate]:state.project[state.targetDate].map(item=>{
            if(item.id===action.id){
              item.IsChecked = action.checked;
            }
            return item;
          })
        }
      }
    default:
      return state;
  }
}


export default projectsController;

