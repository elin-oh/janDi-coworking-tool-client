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

export const setTodos = (todoLists) => {
    return ({
        type: types.SET_TODOS,
        todoLists
    })
};