import { combineReducers } from "redux";
import userReducer from "./user";
import countReducer from "./count";


export default combineReducers({
    userReducer,
    countReducer
});
