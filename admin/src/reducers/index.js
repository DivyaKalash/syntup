import userReducer from "./user";
import authReducer from "./auth";
import { combineReducers } from "redux";
import categoryReducer from './category';
import productReducer from "./product";
import orderReducer from "./order";



const rootReducer = combineReducers({
    category: categoryReducer,
    user: userReducer,
    auth: authReducer,
    product: productReducer,
    oredr: orderReducer

});

export default rootReducer;
