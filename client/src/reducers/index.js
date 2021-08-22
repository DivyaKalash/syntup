// import userReducer from "./user";
// import authReducer from "./auth";
import { combineReducers } from "redux";
import categoryReducer from './category';
import servicesReducer from './services'
// import orderReducer from "./order";



const rootReducer = combineReducers({
    category: categoryReducer,
    services: servicesReducer
});

export default rootReducer;
