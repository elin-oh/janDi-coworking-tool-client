import { combineReducers } from "redux";
import userReducer from "./user";
import countReducer from "./count";
import projectsReducer from "./projects";


export default combineReducers({
    userReducer,
    countReducer,
    projectsReducer
});
