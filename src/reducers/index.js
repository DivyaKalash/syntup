// import userReducer from "./user";
// import authReducer from "./auth";
import { combineReducers } from "redux";
import categoryReducer from './category';
// import productReducer from "./product";
// import orderReducer from "./order";



const rootReducer = combineReducers({
    category: categoryReducer,
});

export default rootReducer;
