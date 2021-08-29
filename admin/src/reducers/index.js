import userReducer from "./user";
import authReducer from "./auth";
import { combineReducers } from "redux";
import categoryReducer from './category';
import bookingReducer from "./booking";
import serviceReducer from "./service";


const rootReducer = combineReducers({
    category: categoryReducer,
    user: userReducer,
    auth: authReducer,
    booking: bookingReducer,
    service: serviceReducer
});

export default rootReducer;
