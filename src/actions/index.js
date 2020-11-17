import * as types from './ActionTypes';


// 로그인시user정보저장액션생성함수
export const setUser = (email, passLen, userName) => ({
    type: types.SET_USER,
    email,
    passLen,
    userName
});

