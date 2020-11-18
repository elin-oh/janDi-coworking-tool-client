import { combineReducers } from "redux";
import userReducer from "./user";
import countReducer from "./count";
import projectsReducer from "./projects";
import todosReducer from "./todos"


export default combineReducers({
    userReducer,
    countReducer,
    projectsReducer,
    todosReducer
});
