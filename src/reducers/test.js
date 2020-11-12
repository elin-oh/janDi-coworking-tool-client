import * as types from '../actions/ActionTypes';

const initialState = {
    test: ''
};


function testController(state = initialState, action) {
    // 레퍼런스 생성
    switch (action.type) {
        case types.SET_TEST:
            return {
                ...state,
                test: !action.value
            };
        default:
            return state;
    }
}

export default testController;