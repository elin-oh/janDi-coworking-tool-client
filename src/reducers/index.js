import { combineReducers } from "redux";
import userReducer from "./user";
import countReducer from "./count";
import projectsReducer from "./projects";
import todoReducer from "./todo"


export default combineReducers({
    userReducer,
    countReducer,
    projectsReducer,
    todoReducer
});
