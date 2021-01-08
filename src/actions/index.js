import * as types from './ActionTypes';


// 로그인시user정보저장액션생성함수
export const setUser = (email, passLen, userName) => ({
  type: types.SET_USER,
  email,
  passLen,
  userName
});


export const setCount = (todoDoneCount, todoTotalCount) => {
  return ({
    type: types.SET_COUNT,
    todoDoneCount,
    todoTotalCount
  })
};

export const setProjects = (projectLists) => {
  return ({
    type: types.SET_PROJECTS,
    projectLists
  })
};

export const setProject = (project)=>{
  return {
    type: types.SET_PROJECT,
    project
  }
}

export const setDate = (date)=>{
  return {
    type: types.SET_DATE,
    date
  }
}

export const addTodoLists = (todo)=>{
  return {
    type: types.ADD_TODO_LISTS,
    todo
  }
}

export const setToday = (today)=>{
  return {
    type: types.SET_TODAY,
    today
  }
}

export const deleteTodo = (id)=>{
  return {
    type: types.DELETE_TODO,
    id
  }
}

export const modifyTodoCheck = (id,checked)=>{
  return {
    type: types.MODIFY_TODO_CHECK,
    id,
    checked
  }
}

export const initProject = ()=>{
  return {
    type: types.INIT_PROJECT
  }
}


