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

export const setTodos = (todosInfo) => {
    return ({
        type: types.SET_TODOS,
        todosInfo
    })
};

export const setTodoDate = (date) => {
    return ({
        type: types.SET_TODO_DATE,
        date
    })
};


export const setSortList = (nameList, sortedTodoLists) => {
    return ({
        type: types.SET_SORT_LIST,
        nameList,
        sortedTodoLists
    })
};