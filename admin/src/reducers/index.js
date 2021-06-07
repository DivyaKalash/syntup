import userReducer from "./user";
import authReducer from "./auth";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer

});

export default rootReducer;
